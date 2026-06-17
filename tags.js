// Derives meal / ingredient / diet tags for a recipe from its content.
// Works in the browser (exposes window.deriveTags) and in Node (module.exports),
// so the same logic powers the live site and the count tests.
(function (global) {
  "use strict";

  // Gluten-containing markers. "flour" and "noodle" are checked separately so
  // gluten-free qualifiers (almond flour, rice noodles) are allowed through.
  const GLUTEN_WORDS = [
    "wheat", "bread", "breadcrumb", "panko", "bun", "pasta", "spaghetti",
    "penne", "macaroni", "orzo", "couscous", "barley", "seitan", "tortilla",
    "pita", "naan", "bagel", "cracker", "pretzel", "gnocchi", "biscuit",
    "croissant", "phyllo", "puff pastry", "graham", "farro", "bulgur",
    "ramen", "udon", "soba", "lasagna", "dumpling wrapper", "wonton",
    "cake flour", "pastry", "pie crust", "puff", "crouton", "knot",
    "cinnamon roll", "cake", "cookie", "brownie", "muffin", "scone",
    "donut", "blondie", "cupcake", "shortcake", "galette", "cobbler",
    "crumble", "flatbread", "pizza", "pinwheel", "roll"
  ];
  // High-carb markers; if a recipe lists any of these (or is a dessert/smoothie)
  // it is excluded from the low-carb page. Intentionally broad — for a low-carb
  // filter, over-excluding is far safer than letting bread or pasta slip in.
  const LOWCARB_WORDS = [
    "pasta", "spaghetti", "penne", "macaroni", "ziti", "fettuccine", "linguine",
    "rigatoni", "fusilli", "lasagna", "orzo", "couscous", "gnocchi", "noodle",
    "rice", "quinoa", "barley", "farro", "bulgur", "millet", "oats", "oat",
    "potato", "sweet potato", "yam", "corn", "hominy", "masa", "polenta",
    "grits", "cornmeal", "bread", "baguette", "crostini", "crouton", "breadcrumb",
    "panko", "bun", "tortilla", "wrap", "pita", "naan", "bagel", "pastry",
    "dough", "crescent", "biscuit", "flour", "pancake", "waffle", "cracker",
    "chip", "granola", "sugar", "maple syrup", "syrup", "honey", "agave",
    "date", "raisin", "banana", "mango", "pineapple", "apple", "plantain",
    "jackfruit", "chickpea", "lentil", "bean", "split pea"
  ];

  function hasGluten(ingredients) {
    return ingredients.some((raw) => {
      const i = raw.toLowerCase();
      if (GLUTEN_WORDS.some((w) => i.includes(w))) return true;
      if (i.includes("soy sauce") && !i.includes("tamari") && !i.includes("gluten-free")) return true;
      if (i.includes("hoisin") || i.includes("teriyaki")) return true;
      if (/\bflour\b/.test(i)) {
        const gf = /(almond|oat|rice|corn|coconut|chickpea|buckwheat|cassava|tapioca|gluten-free|gf) flour/.test(i);
        if (!gf) return true;
      }
      if (/\bnoodle/.test(i)) {
        if (!/(rice|glass|mung|kelp|shirataki)/.test(i)) return true;
      }
      return false;
    });
  }

  function deriveTags(r) {
    const title = r.title.toLowerCase();
    const ing = r.ingredients.map((s) => s.toLowerCase());
    const hay = (r.title + " " + r.desc).toLowerCase();
    const inAny = (kw) => ing.some((i) => i.includes(kw)) || hay.includes(kw);

    const ingredients = [];
    if (inAny("tofu")) ingredients.push("tofu");
    if (inAny("chickpea") || inAny("garbanzo") || title.includes("falafel") || title.includes("hummus"))
      ingredients.push("chickpea");
    if (inAny("lentil") || title.includes("dal")) ingredients.push("lentil");
    if (inAny("mushroom") || inAny("portobello") || inAny("cremini") || inAny("shiitake"))
      ingredients.push("mushroom");
    if (inAny("avocado") || title.includes("guacamole")) ingredients.push("avocado");

    const meals = [];
    const add = (m) => { if (!meals.includes(m)) meals.push(m); };

    if (title.includes("smoothie")) add("smoothie");
    if (/(soup|stew|chili|chowder|bisque|gumbo|goulash|pozole|minestrone|tagine)/.test(title))
      add("soup");

    const dessertRe = /(cookie|brownie|cake|cupcake|cinnamon roll|cheesecake|nice cream|truffle|crumble|cobbler|pudding|blondie|muffin|donut|doughnut|\bpie\b|lemon bar|shortcake|sorbet|mousse|galette|scone|chocolate cup|dessert)/;
    if (dessertRe.test(title)) add("dessert");

    const breakfastRe = /(oat|pancake|waffle|scramble|granola|french toast|smoothie|parfait|chia pudding|banana bread|applesauce|breakfast|cinnamon roll|donut|doughnut|muffin|scone|toast)/;
    if (breakfastRe.test(title) || /breakfast/.test(hay)) add("breakfast");

    const snackRe = /(hummus|dip|guacamole|salsa|queso|nacho|fries|knot|crostini|pinwheel|dumpling|summer roll|energy ball|truffle|fritter|wing|stuffed mushroom|chips|bites|sorbet|nice cream|chocolate cup)/;
    if (snackRe.test(title)) add("snack");

    const lunchRe = /(salad|sandwich|wrap|bowl|taco|quesadilla|flatbread|panini|banh mi|burrito|burger)/;

    if (r.category === "quick") { add("lunch"); add("dinner"); }
    if (r.category === "crockpot") {
      add("dinner");
      if (meals.includes("soup")) add("lunch");
    }
    if (r.category === "favorites" || r.category === "lowcarb") {
      if (lunchRe.test(title)) { add("lunch"); add("dinner"); }
      if (meals.length === 0) { add("lunch"); add("dinner"); }
    }
    if (r.category === "smoothie") add("breakfast");

    const diets = [];
    const proteinRe = /(tofu|tempeh|seitan|edamame|lentil|chickpea|garbanzo|black bean|kidney bean|pinto|cannellini|navy bean|white bean|butter bean|\bbean|split pea|peanut|soy curl|quinoa|hemp seed|nutritional yeast|soy milk|peas)/;
    if (ing.some((i) => proteinRe.test(i))) diets.push("high-protein");
    if (!hasGluten(r.ingredients)) diets.push("gluten-free");
    // Low-carb: scan BOTH the title and the ingredients, since carby dishes
    // usually announce themselves in the name (Pasta, Toast, Bowl, Burger...).
    const carbHay = title + " " + ing.join(" ");
    const LOWCARB_ALL = LOWCARB_WORDS.concat([
      "toast", "sandwich", "burger", "taco", "burrito", "quesadilla", "pizza",
      "risotto", "sloppy", "panini", "banh mi", "joes", "stroganoff",
      "bibimbap", "shawarma", "gumbo", "jambalaya", "fajita", "paella",
      "mac &", "ragu", "bolognese", "enchilada", "ramen", "pho"
    ]);
    if (r.category === "lowcarb") {
      diets.push("low-carb"); // curated low-carb collection — always include
    } else if (!meals.includes("dessert") && !meals.includes("smoothie") &&
        !LOWCARB_ALL.some((w) => carbHay.includes(w))) {
      diets.push("low-carb");
    }
    if (!ing.some((i) => i.includes("oil"))) diets.push("oil-free");

    return { meals, ingredients, diets };
  }

  global.deriveTags = deriveTags;
  if (typeof module !== "undefined" && module.exports) module.exports = { deriveTags };
})(typeof window !== "undefined" ? window : globalThis);
