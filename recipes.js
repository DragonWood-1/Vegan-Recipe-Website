// Recipe data for The Green Table.
// Photos are served from Unsplash; script.js swaps in a placeholder if one fails to load.
const RECIPES = [
  // ---------- 30-Minute Meals ----------
  {
    id: "chickpea-stir-fry",
    category: "quick",
    title: "Crispy Chickpea & Veggie Stir-Fry",
    time: "25 min",
    servings: "4 servings",
    emoji: "🥦",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=70",
    desc: "Golden pan-crisped chickpeas tossed with broccoli, peppers, and a garlicky soy-maple glaze. Serve over rice or grab it straight from the skillet.",
    ingredients: [
      "1 can (15 oz) chickpeas, drained and patted dry",
      "2 tbsp olive oil",
      "1 head broccoli, cut into florets",
      "1 red bell pepper, sliced",
      "3 cloves garlic, minced",
      "3 tbsp soy sauce or tamari",
      "1 tbsp maple syrup",
      "1 tsp toasted sesame oil",
      "Cooked rice and sesame seeds, for serving"
    ],
    steps: [
      "Heat olive oil in a large skillet over medium-high. Add chickpeas and cook 6–8 minutes until crisp and golden.",
      "Add broccoli and bell pepper; stir-fry 5 minutes until crisp-tender.",
      "Stir in garlic and cook 30 seconds until fragrant.",
      "Whisk soy sauce, maple syrup, and sesame oil; pour over the pan and toss 1–2 minutes until glossy.",
      "Serve over rice, topped with sesame seeds."
    ]
  },
  {
    id: "creamy-tomato-pasta",
    category: "quick",
    title: "Creamy Tomato & Basil Pasta",
    time: "20 min",
    servings: "4 servings",
    emoji: "🍝",
    img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=70",
    desc: "A silky, dairy-free tomato cream sauce made with cashews (or coconut milk), finished with fresh basil. Tastes like it simmered all day.",
    ingredients: [
      "12 oz pasta of choice",
      "1/2 cup raw cashews (or 3/4 cup coconut cream)",
      "1 can (14 oz) crushed tomatoes",
      "3 cloves garlic, minced",
      "1 tbsp olive oil",
      "1 tsp dried oregano",
      "1/2 tsp red pepper flakes",
      "Handful fresh basil, torn",
      "Salt and black pepper to taste"
    ],
    steps: [
      "Cook pasta in salted water per package directions; reserve 1/2 cup pasta water.",
      "Meanwhile, blend cashews with 1/2 cup hot water until completely smooth.",
      "Sauté garlic in olive oil 1 minute. Add crushed tomatoes, oregano, and pepper flakes; simmer 8 minutes.",
      "Stir in cashew cream and a splash of pasta water until silky. Season with salt and pepper.",
      "Toss with pasta, top with fresh basil, and serve."
    ]
  },
  {
    id: "black-bean-tacos",
    category: "quick",
    title: "Smoky Black Bean Tacos",
    time: "20 min",
    servings: "8 tacos",
    emoji: "🌮",
    img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=70",
    desc: "Chipotle-spiced black beans piled into warm tortillas with avocado, quick-pickled onions, and lime. Taco night, solved.",
    ingredients: [
      "2 cans (15 oz each) black beans, drained",
      "1 tbsp olive oil",
      "2 tsp chili powder",
      "1 tsp smoked paprika",
      "1 tsp cumin",
      "8 small corn or flour tortillas",
      "1 avocado, sliced",
      "1/2 red onion, thinly sliced + juice of 1 lime",
      "Fresh cilantro and salsa, for serving"
    ],
    steps: [
      "Toss sliced red onion with lime juice and a pinch of salt; set aside to quick-pickle.",
      "Warm olive oil in a skillet; add beans, chili powder, paprika, cumin, and a splash of water. Simmer 5–7 minutes, mashing slightly.",
      "Char tortillas in a dry pan or directly over a low flame.",
      "Fill tortillas with beans, avocado, pickled onions, cilantro, and salsa.",
      "Finish with an extra squeeze of lime and serve."
    ]
  },
  {
    id: "peanut-noodles",
    category: "quick",
    title: "Spicy Peanut Noodles",
    time: "15 min",
    servings: "3 servings",
    emoji: "🍜",
    img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=900&q=70",
    desc: "Slurpable noodles in a 5-minute peanut-lime sauce with crunchy veggies. Faster than delivery and twice as good.",
    ingredients: [
      "10 oz rice noodles or spaghetti",
      "1/3 cup natural peanut butter",
      "3 tbsp soy sauce",
      "1 tbsp maple syrup",
      "1 tbsp sriracha (more to taste)",
      "Juice of 1 lime",
      "1 clove garlic, grated",
      "1 cup shredded carrots and cabbage",
      "Crushed peanuts and scallions, for topping"
    ],
    steps: [
      "Cook noodles per package directions; reserve 1/4 cup cooking water.",
      "Whisk peanut butter, soy sauce, maple syrup, sriracha, lime juice, and garlic; thin with cooking water until pourable.",
      "Toss hot noodles with the sauce and shredded veggies.",
      "Top with crushed peanuts and scallions. Serve warm or chilled."
    ]
  },
  {
    id: "buddha-bowl",
    category: "quick",
    title: "Rainbow Buddha Bowl",
    time: "30 min",
    servings: "2 bowls",
    emoji: "🥗",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=70",
    desc: "Quinoa, roasted sweet potatoes, crisp veggies, and creamy tahini-lemon dressing — a full rainbow in one bowl.",
    ingredients: [
      "1 cup quinoa, rinsed",
      "1 large sweet potato, cubed",
      "1 tbsp olive oil",
      "1 cup shredded purple cabbage",
      "1 cup cherry tomatoes, halved",
      "1 avocado, sliced",
      "1/4 cup tahini",
      "Juice of 1 lemon + 1 small garlic clove, grated",
      "2–4 tbsp water, salt to taste"
    ],
    steps: [
      "Roast sweet potato cubes with olive oil and salt at 425°F (220°C) for 20–25 minutes.",
      "Meanwhile, simmer quinoa in 2 cups water for 15 minutes; fluff with a fork.",
      "Whisk tahini, lemon juice, garlic, water, and salt into a creamy dressing.",
      "Build bowls: quinoa base, then sweet potato, cabbage, tomatoes, and avocado.",
      "Drizzle generously with tahini dressing."
    ]
  },
  {
    id: "mushroom-fried-rice",
    category: "quick",
    title: "Garlic Mushroom Fried Rice",
    time: "20 min",
    servings: "4 servings",
    emoji: "🍚",
    img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=70",
    desc: "Day-old rice, meaty mushrooms, peas, and lots of garlic — better-than-takeout fried rice in one wok.",
    ingredients: [
      "3 cups cooked, cooled rice (day-old is best)",
      "2 tbsp neutral oil",
      "8 oz cremini mushrooms, sliced",
      "4 cloves garlic, minced",
      "1 cup frozen peas and carrots",
      "3 tbsp soy sauce",
      "1 tsp toasted sesame oil",
      "3 scallions, sliced"
    ],
    steps: [
      "Heat oil in a wok over high heat. Sear mushrooms 4–5 minutes until browned.",
      "Add garlic and frozen veggies; stir-fry 2 minutes.",
      "Add rice, breaking up clumps, and stir-fry 3–4 minutes until heated and lightly crisped.",
      "Season with soy sauce and sesame oil; toss well.",
      "Finish with scallions and serve hot."
    ]
  },

  // ---------- Crock Pot Meals ----------
  {
    id: "crockpot-chili",
    category: "crockpot",
    title: "Hearty Three-Bean Crock Pot Chili",
    time: "6–8 hrs low",
    servings: "8 servings",
    emoji: "🌶️",
    img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=900&q=70",
    desc: "A thick, smoky chili loaded with three kinds of beans, fire-roasted tomatoes, and a hint of cocoa for depth. Game-day approved.",
    ingredients: [
      "1 can each: black beans, kidney beans, pinto beans (drained)",
      "2 cans (14 oz) fire-roasted diced tomatoes",
      "1 onion, diced + 1 bell pepper, diced",
      "3 cloves garlic, minced",
      "2 tbsp chili powder + 1 tbsp cumin",
      "1 tsp smoked paprika + 1 tsp unsweetened cocoa powder",
      "1 cup vegetable broth",
      "1 cup frozen corn",
      "Salt to taste; avocado and lime for serving"
    ],
    steps: [
      "Add everything except corn to the crock pot and stir.",
      "Cover and cook on LOW 6–8 hours (or HIGH 3–4 hours).",
      "Stir in corn during the last 30 minutes.",
      "Season with salt; serve topped with avocado, lime, and tortilla chips."
    ]
  },
  {
    id: "crockpot-lentil-soup",
    category: "crockpot",
    title: "Slow Cooker Lentil & Vegetable Soup",
    time: "7–8 hrs low",
    servings: "6 servings",
    emoji: "🥣",
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=70",
    desc: "Cozy green lentils simmered low and slow with carrots, celery, tomatoes, and herbs. Freezer-friendly and even better the next day.",
    ingredients: [
      "1 1/2 cups green or brown lentils, rinsed",
      "3 carrots, sliced + 3 celery stalks, sliced",
      "1 onion, diced + 4 cloves garlic, minced",
      "1 can (14 oz) diced tomatoes",
      "6 cups vegetable broth",
      "1 tsp dried thyme + 1 bay leaf",
      "1 tsp smoked paprika",
      "3 cups baby spinach",
      "Juice of 1/2 lemon, salt and pepper"
    ],
    steps: [
      "Add all ingredients except spinach and lemon to the crock pot.",
      "Cover and cook on LOW 7–8 hours until lentils are tender.",
      "Discard the bay leaf; stir in spinach until wilted.",
      "Brighten with lemon juice, season, and serve with crusty bread."
    ]
  },
  {
    id: "crockpot-curry",
    category: "crockpot",
    title: "Crock Pot Chickpea Coconut Curry",
    time: "6 hrs low",
    servings: "6 servings",
    emoji: "🍛",
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=70",
    desc: "Chickpeas and sweet potatoes slow-simmered in a fragrant coconut-curry sauce. Spoon it over basmati rice and thank yourself later.",
    ingredients: [
      "2 cans (15 oz) chickpeas, drained",
      "1 large sweet potato, cubed",
      "1 onion, diced + 3 cloves garlic, minced",
      "1 tbsp grated fresh ginger",
      "2 tbsp curry powder + 1 tsp turmeric",
      "1 can (14 oz) diced tomatoes",
      "1 can (14 oz) full-fat coconut milk",
      "2 cups baby spinach",
      "Cooked basmati rice and cilantro, for serving"
    ],
    steps: [
      "Add chickpeas, sweet potato, onion, garlic, ginger, spices, and tomatoes to the crock pot; stir.",
      "Pour in coconut milk and cook on LOW 6 hours (or HIGH 3 hours).",
      "Stir in spinach during the last 10 minutes.",
      "Season with salt and serve over basmati rice with cilantro."
    ]
  },
  {
    id: "crockpot-sloppy-joes",
    category: "crockpot",
    title: "Lentil Sloppy Joes",
    time: "5–6 hrs low",
    servings: "6 sandwiches",
    emoji: "🍔",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=70",
    desc: "Sweet-and-tangy lentil sloppy joes that simmer themselves while you're at work. Pile onto toasted buns and grab the napkins.",
    ingredients: [
      "1 1/2 cups brown lentils, rinsed",
      "1 onion, diced + 1 green bell pepper, diced",
      "3 cups vegetable broth",
      "1 can (15 oz) tomato sauce",
      "3 tbsp tomato paste",
      "2 tbsp maple syrup + 1 tbsp apple cider vinegar",
      "1 tbsp vegan Worcestershire or soy sauce",
      "2 tsp chili powder + 1 tsp garlic powder",
      "6 burger buns, toasted"
    ],
    steps: [
      "Combine all ingredients except buns in the crock pot.",
      "Cover and cook on LOW 5–6 hours, until lentils are tender and the mixture is thick.",
      "If too loose, cook uncovered on HIGH for the last 20 minutes.",
      "Season, then pile onto toasted buns with pickles and slaw."
    ]
  },
  {
    id: "crockpot-potato-soup",
    category: "crockpot",
    title: "Creamy Crock Pot Potato Soup",
    time: "6–7 hrs low",
    servings: "6 servings",
    emoji: "🥔",
    img: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=900&q=70",
    desc: "Velvety potato soup made creamy with blended cashews — no dairy needed. Top with chives and smoky coconut bacon bits.",
    ingredients: [
      "2 lbs Yukon Gold potatoes, cubed",
      "1 onion, diced + 3 cloves garlic, minced",
      "3 celery stalks, sliced",
      "4 cups vegetable broth",
      "1 tsp dried thyme",
      "3/4 cup raw cashews",
      "1 cup unsweetened plant milk",
      "Salt, pepper, and chives for serving"
    ],
    steps: [
      "Add potatoes, onion, garlic, celery, broth, and thyme to the crock pot.",
      "Cook on LOW 6–7 hours until potatoes are very tender.",
      "Blend cashews with plant milk until perfectly smooth; stir into the soup.",
      "Mash or partially blend the soup to your preferred texture.",
      "Season well and top with chives and smoky coconut bacon."
    ]
  },
  {
    id: "crockpot-jackfruit",
    category: "crockpot",
    title: "BBQ Pulled Jackfruit Sandwiches",
    time: "4–5 hrs low",
    servings: "6 sandwiches",
    emoji: "🥪",
    img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=70",
    desc: "Young jackfruit shreds just like pulled pork after hours in smoky BBQ sauce. Serve on buns with crunchy slaw.",
    ingredients: [
      "2 cans (20 oz) young green jackfruit in brine, drained",
      "1 onion, sliced",
      "1 1/2 cups BBQ sauce",
      "1/2 cup vegetable broth",
      "1 tbsp smoked paprika",
      "1 tsp garlic powder",
      "6 buns, toasted",
      "Coleslaw, for serving"
    ],
    steps: [
      "Rinse jackfruit, trim tough cores, and add to the crock pot with onion.",
      "Stir in BBQ sauce, broth, paprika, and garlic powder.",
      "Cook on LOW 4–5 hours; shred the jackfruit with two forks.",
      "Cook uncovered on HIGH 20 more minutes to thicken.",
      "Pile onto toasted buns with coleslaw."
    ]
  },

  // ---------- More Favorites ----------
  {
    id: "overnight-oats",
    category: "favorites",
    title: "Berry Overnight Oats",
    time: "5 min + overnight",
    servings: "2 jars",
    emoji: "🫐",
    img: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=900&q=70",
    desc: "Make-ahead breakfast jars with rolled oats, chia, almond milk, and a pile of fresh berries.",
    ingredients: [
      "1 cup rolled oats",
      "2 tbsp chia seeds",
      "1 1/4 cups almond milk",
      "1 tbsp maple syrup",
      "1/2 tsp vanilla extract",
      "1 cup mixed berries",
      "2 tbsp almond butter"
    ],
    steps: [
      "Divide oats, chia, almond milk, maple syrup, and vanilla between two jars; stir well.",
      "Refrigerate overnight (or at least 4 hours).",
      "Top with berries and a swirl of almond butter before serving."
    ]
  },
  {
    id: "avocado-toast",
    category: "favorites",
    title: "Loaded Avocado Toast",
    time: "10 min",
    servings: "2 toasts",
    emoji: "🥑",
    img: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=900&q=70",
    desc: "Crusty sourdough, smashed lemony avocado, chili flakes, and quick-pickled radishes.",
    ingredients: [
      "2 thick slices sourdough, toasted",
      "1 ripe avocado",
      "Juice of 1/2 lemon",
      "2 radishes, thinly sliced",
      "1 tsp red wine vinegar",
      "Red pepper flakes, flaky salt, olive oil"
    ],
    steps: [
      "Toss radish slices with vinegar and a pinch of salt.",
      "Smash avocado with lemon juice and salt; spread thickly on toast.",
      "Top with radishes, pepper flakes, flaky salt, and a drizzle of olive oil."
    ]
  },
  {
    id: "stuffed-peppers",
    category: "favorites",
    title: "Quinoa-Stuffed Bell Peppers",
    time: "50 min",
    servings: "4 servings",
    emoji: "🫑",
    img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=900&q=70",
    desc: "Sweet bell peppers baked with a savory quinoa, black bean, and corn filling.",
    ingredients: [
      "4 large bell peppers, halved and seeded",
      "1 cup quinoa, cooked (about 3 cups)",
      "1 can (15 oz) black beans, drained",
      "1 cup corn",
      "1 cup salsa",
      "1 tsp cumin + 1 tsp chili powder",
      "Fresh cilantro and lime, for serving"
    ],
    steps: [
      "Heat oven to 400°F (200°C). Arrange pepper halves in a baking dish.",
      "Mix quinoa, beans, corn, salsa, and spices; spoon into the peppers.",
      "Cover with foil and bake 30 minutes; uncover and bake 10 more.",
      "Finish with cilantro and a squeeze of lime."
    ]
  },
  {
    id: "chocolate-mousse",
    category: "favorites",
    title: "Chocolate Avocado Mousse",
    time: "10 min + chill",
    servings: "4 servings",
    emoji: "🍫",
    img: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=900&q=70",
    desc: "Rich, silky chocolate mousse blended from ripe avocados, cocoa, and maple — no one will guess the secret ingredient.",
    ingredients: [
      "2 ripe avocados",
      "1/3 cup unsweetened cocoa powder",
      "1/3 cup maple syrup",
      "1/4 cup plant milk",
      "1 tsp vanilla extract",
      "Pinch of salt",
      "Berries and shaved dark chocolate, for topping"
    ],
    steps: [
      "Blend all ingredients until completely smooth, scraping down the sides.",
      "Taste and adjust sweetness.",
      "Chill 30 minutes, then serve topped with berries and shaved chocolate."
    ]
  }
];
