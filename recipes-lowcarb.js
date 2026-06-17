// Low-carb vegan recipes. The main library is grain/legume-heavy, so these are
// purpose-built to populate the Low Carb page. tags.js force-tags category
// "lowcarb" as low-carb, so dish names like "cauliflower rice" don't exclude them.
const RECIPES_LOWCARB = [
  {
    id: "lc-zoodle-pesto",
    category: "lowcarb",
    title: "Zucchini Noodles with Avocado Pesto",
    time: "20 min",
    servings: "2 servings",
    emoji: "🥑",
    img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=70",
    desc: "Spiralized zucchini tossed in a creamy basil-avocado pesto — all the comfort of pasta with a fraction of the carbs.",
    ingredients: [
      "3 medium zucchini, spiralized",
      "1 ripe avocado",
      "1 packed cup fresh basil",
      "2 tbsp pine nuts",
      "1 clove garlic",
      "2 tbsp olive oil",
      "Juice of 1/2 lemon",
      "Salt and pepper",
      "Cherry tomatoes, halved, to serve"
    ],
    steps: [
      "Blend avocado, basil, pine nuts, garlic, olive oil, lemon, and 2 tbsp water into a creamy pesto.",
      "Pat the spiralized zucchini dry with a towel.",
      "Toss the raw zoodles with the pesto until evenly coated.",
      "Top with cherry tomatoes and serve right away."
    ]
  },
  {
    id: "lc-tofu-lettuce-wraps",
    category: "lowcarb",
    title: "Crispy Tofu Lettuce Wraps",
    time: "25 min",
    servings: "4 wraps",
    emoji: "🥬",
    img: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=70",
    desc: "Savory crumbled tofu in crisp butter-lettuce cups with a gingery sauce — light, fresh, and naturally low-carb.",
    ingredients: [
      "1 block (14 oz) extra-firm tofu, crumbled",
      "1 head butter or romaine lettuce, leaves separated",
      "2 tbsp tamari",
      "1 tbsp rice vinegar",
      "1 tbsp grated ginger",
      "2 cloves garlic, minced",
      "1 tsp toasted sesame oil",
      "2 scallions, sliced",
      "1 tbsp sesame seeds"
    ],
    steps: [
      "Sauté the crumbled tofu in sesame oil over medium-high until golden, 8–10 minutes.",
      "Add ginger and garlic; cook 1 minute.",
      "Stir in tamari and rice vinegar and toss to glaze.",
      "Spoon into lettuce cups and top with scallions and sesame seeds."
    ]
  },
  {
    id: "lc-cauliflower-rice-stirfry",
    category: "lowcarb",
    title: "Cauliflower Fried Rice",
    time: "20 min",
    servings: "4 servings",
    emoji: "🍚",
    img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=70",
    desc: "All the flavor of takeout fried rice using riced cauliflower — packed with veggies and ready in 20 minutes.",
    ingredients: [
      "1 large head cauliflower, riced (or 4 cups)",
      "2 tbsp avocado oil",
      "1 cup frozen peas and diced carrots",
      "3 cloves garlic, minced",
      "1 tbsp grated ginger",
      "3 tbsp tamari",
      "1 tsp toasted sesame oil",
      "3 scallions, sliced",
      "1/2 block tofu, crumbled"
    ],
    steps: [
      "Sear crumbled tofu in 1 tbsp oil until golden; set aside.",
      "Add remaining oil, garlic, ginger, peas, and carrots; stir-fry 3 minutes.",
      "Add riced cauliflower and cook 5–6 minutes until tender.",
      "Stir in tamari, sesame oil, tofu, and scallions; toss and serve."
    ]
  },
  {
    id: "lc-spaghetti-squash-marinara",
    category: "lowcarb",
    title: "Spaghetti Squash Marinara",
    time: "50 min",
    servings: "4 servings",
    emoji: "🎃",
    img: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=900&q=70",
    desc: "Roasted spaghetti squash strands smothered in garlicky marinara — a cozy, low-carb stand-in for pasta night.",
    ingredients: [
      "1 large spaghetti squash, halved and seeded",
      "2 tbsp olive oil",
      "2 cups marinara sauce",
      "3 cloves garlic, minced",
      "1/2 tsp chili flakes",
      "2 tbsp nutritional yeast",
      "Fresh basil, torn",
      "Salt and pepper"
    ],
    steps: [
      "Roast squash halves cut-side down at 400°F (200°C) for 35–40 minutes.",
      "Warm marinara with garlic and chili flakes.",
      "Scrape the squash into strands with a fork.",
      "Toss strands with sauce, top with nutritional yeast and basil, and serve."
    ]
  },
  {
    id: "lc-portobello-steaks",
    category: "lowcarb",
    title: "Garlic Butter Portobello Steaks",
    time: "20 min",
    servings: "2 servings",
    emoji: "🍄",
    img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=70",
    desc: "Meaty portobello caps seared in vegan garlic butter and herbs — a satisfying, knife-and-fork low-carb main.",
    ingredients: [
      "4 large portobello mushroom caps",
      "3 tbsp vegan butter",
      "4 cloves garlic, minced",
      "1 tbsp tamari",
      "1 tsp fresh thyme",
      "1 tbsp chopped parsley",
      "Salt and black pepper",
      "Lemon wedges, to serve"
    ],
    steps: [
      "Score the mushroom caps and season with salt and pepper.",
      "Melt vegan butter in a skillet over medium-high; sear caps 4 minutes per side.",
      "Add garlic, tamari, and thyme; baste the mushrooms for 2 minutes.",
      "Finish with parsley and a squeeze of lemon."
    ]
  },
  {
    id: "lc-avocado-cucumber-salad",
    category: "lowcarb",
    title: "Avocado Cucumber Salad",
    time: "10 min",
    servings: "4 servings",
    emoji: "🥒",
    img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=70",
    desc: "Cool, crunchy cucumbers and creamy avocado in a bright lime-dill dressing — refreshing and ready in ten minutes.",
    ingredients: [
      "2 large cucumbers, sliced",
      "2 avocados, cubed",
      "1/4 red onion, thinly sliced",
      "2 tbsp chopped fresh dill",
      "2 tbsp olive oil",
      "Juice of 1 lime",
      "Salt and black pepper"
    ],
    steps: [
      "Combine cucumbers, avocado, and red onion in a bowl.",
      "Whisk olive oil, lime juice, salt, and pepper.",
      "Pour dressing over the salad and add the dill.",
      "Toss gently and serve chilled."
    ]
  },
  {
    id: "lc-tofu-scramble",
    category: "lowcarb",
    title: "Veggie Tofu Scramble",
    time: "15 min",
    servings: "2 servings",
    emoji: "🍳",
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=70",
    desc: "A protein-packed, eggy tofu scramble loaded with peppers and spinach — a savory low-carb start to the day.",
    ingredients: [
      "1 block (14 oz) firm tofu, crumbled",
      "1 tbsp olive oil",
      "1/2 bell pepper, diced",
      "2 cups baby spinach",
      "1/2 tsp turmeric",
      "1 tsp nutritional yeast",
      "1/4 tsp black salt (kala namak)",
      "Salt and pepper"
    ],
    steps: [
      "Heat oil and sauté bell pepper 3 minutes.",
      "Add crumbled tofu, turmeric, and nutritional yeast; cook 5 minutes.",
      "Fold in spinach until wilted.",
      "Season with black salt, salt, and pepper and serve."
    ]
  },
  {
    id: "lc-cauliflower-steaks-tahini",
    category: "lowcarb",
    title: "Roasted Cauliflower Steaks with Tahini",
    time: "35 min",
    servings: "2 servings",
    emoji: "🥦",
    img: "https://images.unsplash.com/photo-1568584711271-6c929fb49b60?auto=format&fit=crop&w=900&q=70",
    desc: "Thick cauliflower steaks roasted until caramelized and drizzled with lemony tahini — hearty yet light.",
    ingredients: [
      "1 large head cauliflower, cut into thick steaks",
      "3 tbsp olive oil",
      "1 tsp smoked paprika",
      "1/4 cup tahini",
      "Juice of 1 lemon",
      "1 clove garlic, grated",
      "2 tbsp chopped parsley",
      "Salt and pepper"
    ],
    steps: [
      "Brush cauliflower steaks with oil, paprika, salt, and pepper.",
      "Roast at 425°F (220°C) for 25 minutes, flipping once, until golden.",
      "Whisk tahini, lemon, garlic, and water into a pourable sauce.",
      "Drizzle over the steaks and finish with parsley."
    ]
  },
  {
    id: "lc-sesame-edamame-slaw",
    category: "lowcarb",
    title: "Sesame Ginger Edamame Slaw",
    time: "15 min",
    servings: "4 servings",
    emoji: "🥗",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=70",
    desc: "Crunchy cabbage and shelled edamame in a punchy sesame-ginger dressing — a high-protein, low-carb side or light meal.",
    ingredients: [
      "4 cups shredded green and purple cabbage",
      "1 cup shelled edamame",
      "1 carrot, julienned",
      "2 tbsp tamari",
      "1 tbsp rice vinegar",
      "1 tbsp grated ginger",
      "1 tbsp toasted sesame oil",
      "1 tbsp sesame seeds"
    ],
    steps: [
      "Combine cabbage, edamame, and carrot in a large bowl.",
      "Whisk tamari, vinegar, ginger, and sesame oil.",
      "Toss the slaw with the dressing.",
      "Sprinkle with sesame seeds and serve."
    ]
  },
  {
    id: "lc-stuffed-peppers-lc",
    category: "lowcarb",
    title: "Tofu & Spinach Stuffed Peppers",
    time: "40 min",
    servings: "4 servings",
    emoji: "🫑",
    img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=900&q=70",
    desc: "Bell peppers stuffed with a savory tofu-and-spinach filling instead of rice — filling, cheesy-tasting, and low-carb.",
    ingredients: [
      "4 bell peppers, halved and seeded",
      "1 block (14 oz) firm tofu, crumbled",
      "3 cups chopped spinach",
      "1/2 onion, diced",
      "2 cloves garlic, minced",
      "3 tbsp nutritional yeast",
      "1 tsp Italian seasoning",
      "2 tbsp olive oil",
      "Salt and pepper"
    ],
    steps: [
      "Sauté onion and garlic in oil until soft, then add tofu and seasoning.",
      "Stir in spinach and nutritional yeast; cook until wilted.",
      "Spoon the filling into the pepper halves.",
      "Bake at 400°F (200°C) for 25 minutes until the peppers are tender."
    ]
  }
];
