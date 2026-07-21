/*
 * Static page generator for The Green Table.
 * Run with:  node build-pages.js
 * Emits index.html plus one page per category / ingredient / diet, all sharing
 * the same header nav, AdSense snippet, recipe modal, and scripts. Re-run this
 * whenever the nav or shared layout changes.
 */
const fs = require("fs");
const path = require("path");
const ROOT = __dirname;

const ADSENSE =
  '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8788099801042098"\n' +
  '     crossorigin="anonymous"></script>';

// Live domain (no trailing slash). Drives the canonical tags, sitemap.xml, and
// robots.txt that Google needs to index the site. Re-run `node build-pages.js`
// after changing it.
const SITE_URL = "https://vegankitchenguide.com";

// Nav menus (label -> filename). Used to build the shared header on every page.
const CATEGORIES = [
  ["Breakfast", "breakfast.html"], ["Lunch", "lunch.html"], ["Dinner", "dinner.html"],
  ["Dessert", "dessert.html"], ["Snack", "snack.html"], ["Soup", "soup.html"],
  ["Smoothie", "smoothie.html"]
];
const INGREDIENTS = [
  ["Tofu", "tofu.html"], ["Chickpea", "chickpea.html"], ["Lentil", "lentil.html"],
  ["Mushroom", "mushroom.html"], ["Avocado", "avocado.html"]
];
const DIETS = [
  ["High Protein", "high-protein.html"], ["Gluten Free", "gluten-free.html"],
  ["Low Carb", "low-carb.html"], ["Oil Free", "oil-free.html"]
];

function dropdown(label, items) {
  const links = items.map(([t, h]) => `          <a href="${h}">${t}</a>`).join("\n");
  return (
    `      <div class="dropdown">\n` +
    `        <button class="dropbtn" type="button">${label} ▾</button>\n` +
    `        <div class="dropdown-menu">\n${links}\n        </div>\n` +
    `      </div>`
  );
}

const NAV =
  `  <header class="site-header">\n` +
  `    <nav class="nav">\n` +
  `      <a class="brand" href="index.html">🌿 The Green Table</a>\n` +
  `      <button class="nav-toggle" type="button" aria-label="Menu">☰</button>\n` +
  `      <div class="nav-links">\n` +
  dropdown("Categories", CATEGORIES) + "\n" +
  dropdown("Ingredients", INGREDIENTS) + "\n" +
  dropdown("Diets", DIETS) + "\n" +
  `        <a href="index.html">All Recipes</a>\n` +
  `      </div>\n` +
  `    </nav>\n` +
  `  </header>`;

const MODAL =
  `  <div class="modal-overlay" id="recipe-modal" hidden>\n` +
  `    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">\n` +
  `      <button class="modal-close" id="modal-close" aria-label="Close recipe">&times;</button>\n` +
  `      <img class="modal-img" id="modal-img" src="" alt="">\n` +
  `      <div class="modal-body">\n` +
  `        <h3 id="modal-title"></h3>\n` +
  `        <div class="modal-meta" id="modal-meta"></div>\n` +
  `        <p class="modal-desc" id="modal-desc"></p>\n` +
  `        <div class="modal-columns">\n` +
  `          <div><h4>Ingredients</h4><ul id="modal-ingredients"></ul></div>\n` +
  `          <div><h4>Directions</h4><ol id="modal-steps"></ol></div>\n` +
  `        </div>\n` +
  `      </div>\n` +
  `    </div>\n` +
  `  </div>`;

const DATA_SCRIPTS =
  `  <script src="recipes-quick.js"></script>\n` +
  `  <script src="recipes-crockpot.js"></script>\n` +
  `  <script src="recipes-favorites.js"></script>\n` +
  `  <script src="recipes-smoothies.js"></script>\n` +
  `  <script src="recipes-lowcarb.js"></script>\n` +
  `  <script src="recipes.js"></script>`;

const FOOTER =
  `  <footer class="site-footer">\n` +
  `    <p>🌿 The Green Table — plant-based recipes made simple.</p>\n` +
  `    <nav class="footer-links">\n` +
  `      <a href="about.html">About</a>\n` +
  `      <a href="contact.html">Contact</a>\n` +
  `      <a href="privacy.html">Privacy Policy</a>\n` +
  `    </nav>\n` +
  `  </footer>`;

/* ---------------- Recipe data (loaded at build time) ----------------
 * Load the same recipe arrays and tag logic the browser uses, so we can
 * pre-render real recipe content into the HTML instead of leaving pages
 * as empty JS shells. */
const vm = require("vm");
const { deriveTags } = require("./tags.js");
const RECIPE_FILES = [
  "recipes-quick.js", "recipes-crockpot.js", "recipes-favorites.js",
  "recipes-smoothies.js", "recipes-lowcarb.js", "recipes.js"
];
const RECIPES = (() => {
  const src = RECIPE_FILES.map((f) => fs.readFileSync(path.join(ROOT, f), "utf8")).join("\n");
  const sandbox = { OUT: {} };
  vm.createContext(sandbox);
  vm.runInContext(src + "\nOUT.value = RECIPES;", sandbox);
  return sandbox.OUT.value;
})();
RECIPES.forEach((r) => { r.tags = deriveTags(r); });

const PREVIEW_COUNT = 12; // keep in sync with app.js

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function escAttr(s) {
  return esc(s).replace(/"/g, "&quot;");
}

// One recipe card, matching the markup app.js produces so existing CSS applies.
// app.js enhances these server-rendered cards (wires the modal + "show all").
function recipeCardHTML(r, i) {
  const search = escAttr((r.title + " " + r.desc + " " + r.ingredients.join(" ")).toLowerCase());
  const cls = "recipe-card" + (i >= PREVIEW_COUNT ? " extra collapsed" : "");
  return (
    `      <button class="${cls}" type="button" data-id="${escAttr(r.id)}" ` +
    `aria-label="View recipe: ${escAttr(r.title)}" data-search="${search}">\n` +
    `        <div class="card-img-wrap">\n` +
    `          <img src="${escAttr(r.img)}" alt="${escAttr(r.title)}" loading="lazy">\n` +
    `          <span class="time-badge">⏱ ${esc(r.time)}</span>\n` +
    `        </div>\n` +
    `        <div class="card-body">\n` +
    `          <h3>${esc(r.title)}</h3>\n` +
    `          <p>${esc(r.desc)}</p>\n` +
    `          <span class="card-meta">${esc(r.servings)}</span>\n` +
    `        </div>\n` +
    `      </button>`
  );
}

// A full grid of cards plus the "Show all N recipes" button, pre-rendered.
function gridHTML(recipes, attrs) {
  if (!recipes.length) {
    return `      <p class="empty-msg">No recipes here yet — check back soon!</p>`;
  }
  const cards = recipes.map((r, i) => recipeCardHTML(r, i)).join("\n");
  const more = recipes.length > PREVIEW_COUNT
    ? `\n      <button class="btn btn-secondary show-more" type="button">Show all ${recipes.length} recipes ↓</button>`
    : "";
  return `      <div class="recipe-grid"${attrs || ""}>\n${cards}\n      </div>${more}`;
}

// JSON-LD so search engines read the full ingredients + steps as structured
// Recipe data (crawlable content Google explicitly supports).
function recipeJsonLd(recipes) {
  const items = recipes.map((r, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Recipe",
      name: r.title,
      image: r.img,
      description: r.desc,
      recipeYield: r.servings,
      totalTime: r.time,
      recipeIngredient: r.ingredients,
      recipeInstructions: r.steps.map((s) => ({ "@type": "HowToStep", text: s })),
      suitableForDiet: "https://schema.org/VeganDiet"
    }
  }));
  const doc = { "@context": "https://schema.org", "@type": "ItemList", itemListElement: items };
  return `  <script type="application/ld+json">\n${JSON.stringify(doc)}\n  </script>`;
}

function head(title, desc, canonPath, ogImage) {
  // canonPath: "" for the homepage, or a filename like "breakfast.html".
  const canon = SITE_URL + "/" + (canonPath || "");
  const img = ogImage || "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=70";
  return (
    `<!DOCTYPE html>\n<html lang="en">\n<head>\n` +
    `  <meta charset="UTF-8">\n` +
    `  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n` +
    `  <meta name="description" content="${desc}">\n` +
    `  <meta name="robots" content="index, follow">\n` +
    `  <link rel="canonical" href="${canon}">\n` +
    `  <title>${title}</title>\n` +
    `  <meta property="og:type" content="website">\n` +
    `  <meta property="og:title" content="${title}">\n` +
    `  <meta property="og:description" content="${desc}">\n` +
    `  <meta property="og:url" content="${canon}">\n` +
    `  <meta property="og:image" content="${img}">\n` +
    `  <meta name="twitter:card" content="summary_large_image">\n` +
    `  ${ADSENSE}\n` +
    `  <link rel="preconnect" href="https://fonts.googleapis.com">\n` +
    `  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n` +
    `  <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">\n` +
    `  <link rel="stylesheet" href="styles.css">\n` +
    `</head>`
  );
}

/* ---------------- Collection pages ---------------- */
const COLLECTIONS = [
  // kind, value, file, h1, emoji, subtitle, heroImg
  ["meals", "breakfast", "breakfast.html", "Vegan Breakfast Recipes", "🥞", "Pancakes, oats, scrambles, and smoothies to start the day right.", "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1600&q=70"],
  ["meals", "lunch", "lunch.html", "Vegan Lunch Recipes", "🥪", "Bowls, salads, wraps, and sandwiches for an easy midday meal.", "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1600&q=70"],
  ["meals", "dinner", "dinner.html", "Vegan Dinner Recipes", "🍽️", "Weeknight skillets, curries, and slow-cooked comfort food.", "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1600&q=70"],
  ["meals", "dessert", "dessert.html", "Vegan Dessert Recipes", "🍰", "Cookies, cakes, pies, and frozen treats — all dairy- and egg-free.", "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=1600&q=70"],
  ["meals", "snack", "snack.html", "Vegan Snack Recipes", "🍿", "Dips, bites, and finger foods for anytime cravings.", "https://images.unsplash.com/photo-1521986329282-0436c1f1e212?auto=format&fit=crop&w=1600&q=70"],
  ["meals", "soup", "soup.html", "Vegan Soup Recipes", "🍲", "Cozy soups, stews, chilis, and chowders, all plant-based.", "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1600&q=70"],
  ["meals", "smoothie", "smoothie.html", "Vegan Smoothie Recipes", "🥤", "Creamy, fruit-packed blends ready in five minutes.", "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=1600&q=70"],

  ["ingredients", "tofu", "tofu.html", "Vegan Tofu Recipes", "🧊", "Crispy, saucy, and protein-rich tofu dishes from around the world.", "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1600&q=70"],
  ["ingredients", "chickpea", "chickpea.html", "Vegan Chickpea Recipes", "🫛", "Hearty, high-protein meals built on the mighty chickpea.", "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1600&q=70"],
  ["ingredients", "lentil", "lentil.html", "Vegan Lentil Recipes", "🍛", "Filling, budget-friendly lentil soups, dals, and mains.", "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1600&q=70"],
  ["ingredients", "mushroom", "mushroom.html", "Vegan Mushroom Recipes", "🍄", "Meaty, umami-rich mushroom dishes for every craving.", "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1600&q=70"],
  ["ingredients", "avocado", "avocado.html", "Vegan Avocado Recipes", "🥑", "Creamy avocado in toasts, bowls, dips, and even dessert.", "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=1600&q=70"],

  ["diets", "high-protein", "high-protein.html", "High Protein Vegan Recipes", "💪", "Tofu, tempeh, beans, and lentils for plenty of plant protein.", "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1600&q=70"],
  ["diets", "gluten-free", "gluten-free.html", "Gluten Free Vegan Recipes", "🌾", "Naturally gluten-free plant-based meals — no wheat required.", "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1600&q=70"],
  ["diets", "low-carb", "low-carb.html", "Low Carb Vegan Recipes", "🥗", "Lighter, veggie-forward dishes that go easy on the carbs.", "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1600&q=70"],
  ["diets", "oil-free", "oil-free.html", "Oil Free Vegan Recipes", "🫧", "Wholesome recipes made without any added oil.", "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1600&q=70"]
];

function collectionPage(kind, value, file, h1, emoji, subtitle, heroImg) {
  const isDiet = kind === "diets";
  const disclaimer = isDiet
    ? `      <p class="diet-note">Recipes here are auto-sorted from our library by their ingredients — always double-check the ingredient list against your own dietary needs.</p>\n`
    : "";
  const matches = RECIPES.filter((r) => r.tags[kind].includes(value));
  const intro =
    `      <p class="collection-intro">${esc(h1)} — ${esc(subtitle)} ` +
    `Every recipe below is 100% plant-based, with the full ingredient list and step-by-step directions. ` +
    `Browse all ${matches.length} recipes, search by keyword, or tap any card for the complete recipe.</p>\n`;
  return (
    head("" + h1 + " — The Green Table", subtitle, file, heroImg) + "\n" +
    `<body>\n\n` +
    NAV + "\n\n" +
    `  <section class="collection-hero" style="--hero: url('${heroImg}')">\n` +
    `    <div class="hero-content">\n` +
    `      <h1>${emoji} ${h1}</h1>\n` +
    `      <p>${subtitle}</p>\n` +
    `      <span class="collection-count" id="collection-count">${matches.length} recipes</span>\n` +
    `      <div class="search-wrap">\n` +
    `        <input type="search" id="recipe-search" placeholder="Search these recipes…" aria-label="Search recipes">\n` +
    `        <span id="search-count" aria-live="polite"></span>\n` +
    `      </div>\n` +
    `    </div>\n` +
    `  </section>\n\n` +
    `  <main>\n` +
    `    <section class="recipe-section">\n` +
    intro +
    disclaimer +
    gridHTML(matches) + "\n" +
    `    </section>\n` +
    `  </main>\n\n` +
    MODAL + "\n\n" +
    FOOTER + "\n\n" +
    recipeJsonLd(matches) + "\n" +
    DATA_SCRIPTS + "\n" +
    `  <script>window.COLLECTION = { kind: "${kind}", value: "${value}" };</script>\n` +
    `  <script src="tags.js"></script>\n` +
    `  <script src="app.js"></script>\n` +
    `</body>\n</html>\n`
  );
}

/* ---------------- Homepage ---------------- */
function chipRow(items) {
  return items.map(([t, h]) => `        <a class="chip" href="${h}">${t}</a>`).join("\n");
}

function homePage() {
  return (
    head("The Green Table — Vegan Recipes", "Delicious plant-based recipes — quick 30-minute meals, easy crock pot dinners, desserts, and more.", "", "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=70") + "\n" +
    `<body>\n\n` +
    NAV + "\n\n" +
    `  <section class="hero" id="top">\n` +
    `    <div class="hero-content">\n` +
    `      <h1>100% Plant-Based.<br>100% Delicious.</h1>\n` +
    `      <p>Over 200 easy vegan recipes — quick weeknight dinners, slow-cooker comfort food, desserts, smoothies, and more.</p>\n` +
    `      <div class="hero-buttons">\n` +
    `        <a class="btn btn-primary" href="#thirty-minute">⏱️ 30-Minute Meals</a>\n` +
    `        <a class="btn btn-secondary" href="#crock-pot">🍲 Crock Pot Meals</a>\n` +
    `        <a class="btn btn-secondary" href="dessert.html">🍰 Desserts</a>\n` +
    `      </div>\n` +
    `      <div class="search-wrap">\n` +
    `        <input type="search" id="recipe-search" placeholder="Search NNN recipes — try “curry”, “chocolate”, “tacos”…" aria-label="Search recipes">\n` +
    `        <span id="search-count" aria-live="polite"></span>\n` +
    `      </div>\n` +
    `    </div>\n` +
    `  </section>\n\n` +
    `  <section class="browse">\n` +
    `    <div class="browse-inner">\n` +
    `      <h2>Browse by Category</h2>\n      <div class="chips">\n${chipRow(CATEGORIES)}\n      </div>\n` +
    `      <h2>Browse by Ingredient</h2>\n      <div class="chips">\n${chipRow(INGREDIENTS)}\n      </div>\n` +
    `      <h2>Browse by Diet</h2>\n      <div class="chips">\n${chipRow(DIETS)}\n      </div>\n` +
    `    </div>\n` +
    `  </section>\n\n` +
    `  <main>\n` +
    `    <section class="recipe-section" id="thirty-minute">\n` +
    `      <div class="section-head">\n        <h2>⏱️ 30-Minute Meals</h2>\n        <p>Weeknight winners — on the table fast, no shortcuts on flavor.</p>\n      </div>\n` +
    gridHTML(RECIPES.filter((r) => r.category === "quick"), ` data-category="quick"`) + "\n    </section>\n\n" +
    `    <section class="recipe-section alt" id="crock-pot">\n` +
    `      <div class="section-head">\n        <h2>🍲 Crock Pot Vegan Meals</h2>\n        <p>Set it, forget it, and come home to dinner. Slow cooker comfort food, all plants.</p>\n      </div>\n` +
    gridHTML(RECIPES.filter((r) => r.category === "crockpot"), ` data-category="crockpot"`) + "\n    </section>\n\n" +
    `    <section class="recipe-section" id="all-recipes">\n` +
    `      <div class="section-head">\n        <h2>🥗 Favorites &amp; Vegan Desserts</h2>\n        <p>Reader favorites from breakfast to dessert — including 100% plant-based sweets.</p>\n      </div>\n` +
    gridHTML(RECIPES.filter((r) => r.category === "favorites"), ` data-category="favorites"`) + "\n    </section>\n" +
    `  </main>\n\n` +
    MODAL + "\n\n" +
    FOOTER + "\n\n" +
    DATA_SCRIPTS + "\n" +
    `  <script src="tags.js"></script>\n` +
    `  <script src="app.js"></script>\n` +
    `</body>\n</html>\n`
  );
}

/* ---------------- Static content pages (About / Contact / Privacy) ---------------- */
const CONTACT_EMAIL = "hello@vegankitchenguide.com";
const LAST_UPDATED = "July 21, 2026";

function contentPage(file, title, desc, innerHTML) {
  return (
    head(title + " — The Green Table", desc, file) + "\n" +
    `<body>\n\n` +
    NAV + "\n\n" +
    `  <main class="content-page">\n` +
    innerHTML + "\n" +
    `  </main>\n\n` +
    FOOTER + "\n\n" +
    `  <script src="app.js"></script>\n` +
    `</body>\n</html>\n`
  );
}

const STATIC_PAGES = [
  ["about.html", "About", "The story behind The Green Table and our vegan recipe library.",
    `    <h1>About The Green Table</h1>\n` +
    `    <p>The Green Table is a free vegan recipe library built for anyone who wants to eat more plants without giving up flavor. Whether you are fully plant-based, flexitarian, or just cooking one meatless dinner a week, our goal is to make vegan cooking approachable, affordable, and genuinely delicious.</p>\n` +
    `    <h2>What you'll find here</h2>\n` +
    `    <p>Every recipe on this site is 100% plant-based — no meat, dairy, or eggs. Our collection spans quick 30-minute weeknight meals, hands-off crock pot dinners, breakfasts, soups, snacks, smoothies, and desserts. Each recipe includes a full ingredient list and clear, step-by-step directions so you can cook it with confidence.</p>\n` +
    `    <h2>How our recipes are organized</h2>\n` +
    `    <p>We tag every recipe by meal type, key ingredient (tofu, chickpeas, lentils, mushrooms, avocado), and dietary style (high-protein, gluten-free, low-carb, oil-free), so you can quickly find something that fits what you have on hand and how you like to eat. The diet pages are auto-sorted from the ingredient lists — always double-check against your own dietary needs.</p>\n` +
    `    <h2>Our promise</h2>\n` +
    `    <p>We test our recipes to make sure they actually work in a home kitchen, and we write them in plain language without the endless backstory. Have a suggestion or a recipe you'd love to see? <a href="contact.html">Get in touch</a> — we read every message.</p>`],

  ["contact.html", "Contact", "Get in touch with The Green Table.",
    `    <h1>Contact Us</h1>\n` +
    `    <p>We'd love to hear from you. Questions about a recipe, a substitution suggestion, a broken link, or just want to say hello? Reach out any time.</p>\n` +
    `    <h2>Email</h2>\n` +
    `    <p>The best way to reach us is by email at <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>. We do our best to reply within a few business days.</p>\n` +
    `    <h2>Recipe requests &amp; feedback</h2>\n` +
    `    <p>Tried one of our recipes? Let us know how it turned out — your feedback helps us improve. If there's a vegan dish you'd like us to develop, send it over and it may end up in our library.</p>\n` +
    `    <h2>A note on advice</h2>\n` +
    `    <p>Our recipes and articles are for general informational purposes and are not a substitute for professional dietary or medical advice. Please consult a qualified professional about your individual nutritional needs.</p>`],

  ["privacy.html", "Privacy Policy", "How The Green Table handles data, cookies, and advertising.",
    `    <h1>Privacy Policy</h1>\n` +
    `    <p class="muted">Last updated: ${LAST_UPDATED}</p>\n` +
    `    <p>This Privacy Policy explains how The Green Table ("we", "us", or "our") collects, uses, and protects information when you visit this website. By using the site, you agree to the practices described below.</p>\n` +
    `    <h2>Information we collect</h2>\n` +
    `    <p>We do not require you to create an account or submit personal information to browse recipes. If you contact us by email, we receive the information you choose to share (such as your name and email address) solely to respond to you. Like most websites, our servers and third-party providers may automatically log standard technical data such as your browser type, device, and IP address.</p>\n` +
    `    <h2>Cookies</h2>\n` +
    `    <p>Cookies are small text files stored on your device. We and our partners use cookies to understand how visitors use the site and to serve relevant advertising. You can disable cookies in your browser settings, though some features may not work as intended.</p>\n` +
    `    <h2>Advertising &amp; Google AdSense</h2>\n` +
    `    <p>This site displays ads served by Google, including through Google AdSense. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this and other websites.</p>\n` +
    `    <ul>\n` +
    `      <li>Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to this site and/or other sites on the Internet.</li>\n` +
    `      <li>Google uses the DoubleClick cookie to serve ads based on your interests. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" rel="nofollow noopener" target="_blank">Google Ads Settings</a>.</li>\n` +
    `      <li>You can also opt out of a third-party vendor's use of cookies for personalized advertising at <a href="https://www.aboutads.info/choices/" rel="nofollow noopener" target="_blank">aboutads.info/choices</a>.</li>\n` +
    `    </ul>\n` +
    `    <h2>Third-party links</h2>\n` +
    `    <p>Our site may link to external websites. We are not responsible for the privacy practices or content of those sites; we encourage you to review their policies.</p>\n` +
    `    <h2>Children's privacy</h2>\n` +
    `    <p>This site is intended for a general audience and is not directed at children under 13. We do not knowingly collect personal information from children.</p>\n` +
    `    <h2>Changes to this policy</h2>\n` +
    `    <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised "last updated" date.</p>\n` +
    `    <h2>Contact</h2>\n` +
    `    <p>Questions about this policy? Email us at <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>.</p>`]
];

/* ---------------- Sitemap + robots.txt ---------------- */
function writeSitemap() {
  const pages = [""]
    .concat(COLLECTIONS.map((c) => c[2]))
    .concat(STATIC_PAGES.map((p) => p[0])); // "" = homepage
  const urls = pages
    .map((p) => `  <url>\n    <loc>${SITE_URL}/${p}</loc>\n    <changefreq>weekly</changefreq>\n  </url>`)
    .join("\n");
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls + "\n</urlset>\n";
  fs.writeFileSync(path.join(ROOT, "sitemap.xml"), xml);
}

function writeRobots() {
  const txt =
    `User-agent: *\n` +
    `Allow: /\n\n` +
    `Sitemap: ${SITE_URL}/sitemap.xml\n`;
  fs.writeFileSync(path.join(ROOT, "robots.txt"), txt);
}

/* ---------------- Write everything ---------------- */
let written = 0;
fs.writeFileSync(path.join(ROOT, "index.html"), homePage());
written++;
COLLECTIONS.forEach((c) => {
  fs.writeFileSync(path.join(ROOT, c[2]), collectionPage(...c));
  written++;
});
STATIC_PAGES.forEach(([file, title, desc, inner]) => {
  fs.writeFileSync(path.join(ROOT, file), contentPage(file, title, desc, inner));
  written++;
});
writeSitemap();
writeRobots();
console.log("Generated " + written + " pages, plus sitemap.xml and robots.txt.");
