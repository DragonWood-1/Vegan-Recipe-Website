// 30-Minute Meals — 50 quick vegan dinner recipes.
const RECIPES_QUICK = [
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
  {
    id: "sesame-tofu-stir-fry",
    category: "quick",
    title: "Sticky Sesame Tofu Stir-Fry",
    time: "25 min",
    servings: "4 servings",
    emoji: "🥡",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=70",
    desc: "Crispy cubes of tofu lacquered in a sticky garlic-sesame glaze with snap peas and carrots. Takeout flavor, weeknight speed.",
    ingredients: [
      "1 block (14 oz) extra-firm tofu, pressed and cubed",
      "2 tbsp cornstarch",
      "3 tbsp neutral oil",
      "2 cups snap peas",
      "2 carrots, thinly sliced",
      "1/4 cup soy sauce",
      "2 tbsp maple syrup",
      "1 tbsp rice vinegar",
      "2 cloves garlic, minced + 1 tsp grated ginger",
      "1 tbsp sesame seeds, for serving"
    ],
    steps: [
      "Toss tofu cubes with cornstarch until evenly coated.",
      "Heat oil in a large skillet over medium-high; fry tofu 8–10 minutes, turning, until golden on all sides. Remove.",
      "Stir-fry snap peas and carrots 3 minutes until crisp-tender.",
      "Whisk soy sauce, maple syrup, vinegar, garlic, and ginger; pour into the pan and bubble 1 minute until sticky.",
      "Return tofu, toss to coat, and serve over rice with sesame seeds."
    ]
  },
  {
    id: "garlic-lemon-spaghetti",
    category: "quick",
    title: "Garlic & Lemon Spaghetti with White Beans",
    time: "20 min",
    servings: "4 servings",
    emoji: "🍋",
    img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=70",
    desc: "Bright lemony spaghetti with golden garlic, creamy white beans, and a shower of parsley. Pantry dinner perfection.",
    ingredients: [
      "12 oz spaghetti",
      "1/4 cup olive oil",
      "6 cloves garlic, thinly sliced",
      "1/2 tsp red pepper flakes",
      "1 can (15 oz) cannellini beans, drained",
      "Zest and juice of 1 lemon",
      "1/4 cup chopped fresh parsley",
      "2 tbsp nutritional yeast",
      "Salt and black pepper to taste"
    ],
    steps: [
      "Cook spaghetti in well-salted water; reserve 3/4 cup pasta water before draining.",
      "Meanwhile, warm olive oil over medium; cook garlic and pepper flakes 2 minutes until just golden.",
      "Add beans and a splash of pasta water; simmer 2 minutes.",
      "Toss in spaghetti, lemon zest and juice, and enough pasta water to make a glossy sauce.",
      "Finish with parsley, nutritional yeast, salt, and plenty of black pepper."
    ]
  },
  {
    id: "mushroom-quesadillas",
    category: "quick",
    title: "Mushroom & Black Bean Quesadillas",
    time: "20 min",
    servings: "4 quesadillas",
    emoji: "🧀",
    img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=70",
    desc: "Crispy golden tortillas stuffed with smoky mushrooms, black beans, and melty vegan cheese. Salsa and guac mandatory.",
    ingredients: [
      "8 oz cremini mushrooms, sliced",
      "1 tbsp olive oil",
      "1 can (15 oz) black beans, drained and lightly mashed",
      "1 tsp cumin + 1 tsp smoked paprika",
      "4 large flour tortillas",
      "1 1/2 cups shredded vegan cheese",
      "2 scallions, sliced",
      "Salsa and guacamole, for serving"
    ],
    steps: [
      "Sauté mushrooms in olive oil over medium-high 5 minutes until browned.",
      "Stir in mashed beans, cumin, paprika, and a pinch of salt; cook 2 minutes.",
      "Spread filling over half of each tortilla; top with vegan cheese and scallions, then fold.",
      "Toast quesadillas in a dry skillet 2–3 minutes per side until crisp and melty.",
      "Slice into wedges and serve with salsa and guacamole."
    ]
  },
  {
    id: "coconut-chickpea-curry",
    category: "quick",
    title: "20-Minute Coconut Chickpea Curry",
    time: "20 min",
    servings: "4 servings",
    emoji: "🍛",
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=70",
    desc: "A fragrant weeknight curry of chickpeas and spinach simmered in creamy coconut milk. One pot, twenty minutes, zero regrets.",
    ingredients: [
      "1 tbsp coconut oil",
      "1 onion, finely diced",
      "3 cloves garlic, minced + 1 tbsp grated ginger",
      "2 tbsp curry powder",
      "2 cans (15 oz each) chickpeas, drained",
      "1 can (14 oz) full-fat coconut milk",
      "1 can (14 oz) diced tomatoes",
      "3 cups baby spinach",
      "Juice of 1/2 lime, salt to taste",
      "Cooked basmati rice, for serving"
    ],
    steps: [
      "Melt coconut oil in a deep skillet; cook onion 3 minutes until soft.",
      "Add garlic, ginger, and curry powder; toast 1 minute until fragrant.",
      "Stir in chickpeas, coconut milk, and tomatoes; simmer 10 minutes.",
      "Fold in spinach until wilted; season with lime juice and salt.",
      "Serve hot over basmati rice."
    ]
  },
  {
    id: "veggie-fajitas",
    category: "quick",
    title: "Sizzling Veggie Fajitas",
    time: "25 min",
    servings: "4 servings",
    emoji: "🫑",
    img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=70",
    desc: "Charred peppers, onions, and portobello strips in a smoky fajita seasoning, served sizzling with warm tortillas and lime.",
    ingredients: [
      "2 portobello mushrooms, sliced into strips",
      "3 bell peppers (mixed colors), sliced",
      "1 large red onion, sliced",
      "2 tbsp olive oil",
      "2 tsp chili powder + 1 tsp cumin + 1 tsp smoked paprika",
      "1/2 tsp garlic powder",
      "8 flour tortillas, warmed",
      "1 avocado, sliced + lime wedges",
      "Fresh cilantro, for serving"
    ],
    steps: [
      "Heat olive oil in a large cast-iron skillet over high heat.",
      "Add portobellos, peppers, and onion; cook 8–10 minutes, stirring occasionally, until charred at the edges.",
      "Sprinkle with the spices and 2 tablespoons water; toss 1 minute to coat.",
      "Pile into warm tortillas with avocado, cilantro, and a big squeeze of lime."
    ]
  },
  {
    id: "miso-ramen",
    category: "quick",
    title: "Quick Miso Mushroom Ramen",
    time: "25 min",
    servings: "2 bowls",
    emoji: "🍜",
    img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=900&q=70",
    desc: "A deeply savory miso broth with shiitakes, bok choy, and springy noodles. Cozy ramen-shop vibes in under half an hour.",
    ingredients: [
      "2 packs (3 oz each) ramen noodles (seasoning discarded)",
      "1 tbsp neutral oil",
      "6 oz shiitake mushrooms, sliced",
      "3 cloves garlic, minced + 1 tbsp grated ginger",
      "4 cups vegetable broth",
      "3 tbsp white miso paste",
      "1 tbsp soy sauce",
      "2 heads baby bok choy, halved",
      "1 cup frozen corn",
      "Scallions, chili oil, and sesame seeds, for topping"
    ],
    steps: [
      "Sear shiitakes in oil over medium-high 4 minutes; add garlic and ginger for 30 seconds.",
      "Pour in broth and soy sauce; simmer 8 minutes with bok choy and corn.",
      "Whisk miso with a ladle of hot broth, then stir back in (don't boil after adding).",
      "Cook ramen noodles separately per package; divide between bowls.",
      "Ladle broth and veggies over the noodles; top with scallions, chili oil, and sesame seeds."
    ]
  },
  {
    id: "pad-thai",
    category: "quick",
    title: "Weeknight Tofu Pad Thai",
    time: "30 min",
    servings: "4 servings",
    emoji: "🥢",
    img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=900&q=70",
    desc: "Chewy rice noodles, golden tofu, and crunchy bean sprouts in a tangy tamarind-lime sauce, topped with crushed peanuts.",
    ingredients: [
      "8 oz flat rice noodles",
      "1 block (14 oz) extra-firm tofu, cubed",
      "3 tbsp neutral oil",
      "3 tbsp tamarind paste",
      "3 tbsp soy sauce",
      "2 tbsp brown sugar",
      "1 tbsp sriracha",
      "2 cups bean sprouts",
      "3 scallions, cut into 2-inch pieces",
      "1/3 cup crushed peanuts + lime wedges"
    ],
    steps: [
      "Soak rice noodles in hot water 15 minutes until pliable; drain.",
      "Whisk tamarind, soy sauce, brown sugar, and sriracha into a sauce.",
      "Pan-fry tofu in oil 8 minutes until golden; push to one side.",
      "Add noodles and sauce; toss over high heat 2–3 minutes until the noodles absorb the sauce.",
      "Fold in bean sprouts and scallions; cook 1 minute more.",
      "Serve topped with crushed peanuts and lime wedges."
    ]
  },
  {
    id: "lentil-tacos",
    category: "quick",
    title: "Crispy Lentil-Walnut Tacos",
    time: "25 min",
    servings: "8 tacos",
    emoji: "🌮",
    img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=70",
    desc: "A hearty taco \"meat\" of lentils and toasted walnuts crisped in a skillet with taco spices. Tucked into tortillas with all the fixings.",
    ingredients: [
      "2 cups cooked brown lentils (or 1 can, drained)",
      "3/4 cup walnuts, finely chopped",
      "2 tbsp olive oil",
      "1 tbsp chili powder + 1 tsp cumin + 1 tsp smoked paprika",
      "2 tbsp tomato paste",
      "8 small tortillas, warmed",
      "2 cups shredded lettuce",
      "1 avocado, diced",
      "Salsa and lime wedges, for serving"
    ],
    steps: [
      "Heat olive oil in a skillet over medium-high; add lentils and walnuts and cook 5 minutes until starting to crisp.",
      "Stir in spices, tomato paste, and 1/4 cup water; cook 3 minutes until thick and crumbly.",
      "Warm tortillas in a dry pan.",
      "Fill with the lentil-walnut crumble, lettuce, avocado, and salsa.",
      "Squeeze lime over the top and serve."
    ]
  },
  {
    id: "pesto-gnocchi",
    category: "quick",
    title: "Crispy Pesto Gnocchi with Cherry Tomatoes",
    time: "20 min",
    servings: "3 servings",
    emoji: "🍝",
    img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=70",
    desc: "Pan-crisped gnocchi (no boiling!) tossed with blistered cherry tomatoes and a vibrant vegan basil pesto.",
    ingredients: [
      "1 lb shelf-stable potato gnocchi",
      "3 tbsp olive oil, divided",
      "2 cups cherry tomatoes",
      "2 cups fresh basil leaves",
      "1/4 cup pine nuts or walnuts",
      "2 tbsp nutritional yeast",
      "1 clove garlic",
      "Juice of 1/2 lemon",
      "Salt and pepper to taste"
    ],
    steps: [
      "Blend basil, nuts, nutritional yeast, garlic, lemon juice, 2 tablespoons oil, and salt into a pesto, adding water to loosen.",
      "Heat remaining oil in a large nonstick skillet over medium-high; add gnocchi straight from the package in a single layer.",
      "Cook 8–10 minutes, tossing occasionally, until golden and crisp.",
      "Add cherry tomatoes; cook 3 minutes until blistered and bursting.",
      "Off heat, toss with pesto and serve immediately."
    ]
  },
  {
    id: "teriyaki-tempeh-bowl",
    category: "quick",
    title: "Teriyaki Tempeh Rice Bowl",
    time: "25 min",
    servings: "3 bowls",
    emoji: "🍱",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=70",
    desc: "Caramelized tempeh glazed in homemade teriyaki, piled on rice with steamed broccoli and quick-pickled cucumber.",
    ingredients: [
      "1 block (8 oz) tempeh, cut into strips",
      "2 tbsp neutral oil",
      "1/4 cup soy sauce",
      "3 tbsp maple syrup",
      "1 tbsp rice vinegar",
      "2 cloves garlic, minced + 1 tsp grated ginger",
      "1 tsp cornstarch mixed with 2 tbsp water",
      "3 cups cooked rice + 1 head broccoli, steamed",
      "1/2 cucumber, thinly sliced + sesame seeds"
    ],
    steps: [
      "Toss cucumber slices with a splash of rice vinegar and a pinch of salt; set aside.",
      "Pan-fry tempeh in oil over medium 4 minutes per side until deep golden.",
      "Whisk soy sauce, maple syrup, vinegar, garlic, ginger, and cornstarch slurry; pour over the tempeh.",
      "Simmer 2 minutes until the glaze is thick and glossy.",
      "Build bowls with rice, broccoli, glazed tempeh, and pickled cucumber; sprinkle with sesame seeds."
    ]
  },
  {
    id: "white-bean-soup",
    category: "quick",
    title: "Tuscan White Bean & Kale Soup",
    time: "25 min",
    servings: "4 servings",
    emoji: "🥣",
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=70",
    desc: "A rustic, garlicky white bean soup with tomatoes, rosemary, and ribbons of kale — ready faster than the bread can toast.",
    ingredients: [
      "2 tbsp olive oil",
      "1 onion, diced + 2 carrots, diced",
      "4 cloves garlic, minced",
      "1 tsp dried rosemary",
      "2 cans (15 oz each) cannellini beans, drained",
      "1 can (14 oz) diced tomatoes",
      "4 cups vegetable broth",
      "1 bunch kale, stemmed and torn",
      "Salt, pepper, and crusty bread for serving"
    ],
    steps: [
      "Sauté onion and carrots in olive oil 4 minutes; add garlic and rosemary for 1 minute.",
      "Add beans, tomatoes, and broth; bring to a boil and simmer 10 minutes.",
      "Mash a ladleful of beans against the pot to thicken the broth.",
      "Stir in kale and simmer 3 minutes until wilted.",
      "Season generously and serve with crusty bread."
    ]
  },
  {
    id: "smashed-chickpea-sandwich",
    category: "quick",
    title: "Smashed Chickpea Salad Sandwich",
    time: "15 min",
    servings: "4 sandwiches",
    emoji: "🥪",
    img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=70",
    desc: "Creamy, crunchy chickpea salad with celery, dill, and vegan mayo, stacked on toasted bread with lettuce and tomato.",
    ingredients: [
      "2 cans (15 oz each) chickpeas, drained",
      "1/3 cup vegan mayo",
      "1 tbsp Dijon mustard",
      "2 celery stalks, finely diced",
      "1/4 red onion, finely diced",
      "2 tbsp chopped fresh dill",
      "Juice of 1/2 lemon",
      "8 slices sandwich bread, toasted",
      "Lettuce and sliced tomato, for serving"
    ],
    steps: [
      "Mash chickpeas in a bowl with a fork, leaving some texture.",
      "Stir in mayo, mustard, celery, onion, dill, lemon juice, salt, and pepper.",
      "Taste and adjust seasoning.",
      "Layer toasted bread with lettuce, tomato, and a thick scoop of chickpea salad; top and serve."
    ]
  },
  {
    id: "kung-pao-cauliflower",
    category: "quick",
    title: "Kung Pao Cauliflower",
    time: "30 min",
    servings: "4 servings",
    emoji: "🌶️",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=70",
    desc: "Crispy cauliflower bites tossed in a sweet-spicy kung pao sauce with roasted peanuts and scallions. Bold, sticky, addictive.",
    ingredients: [
      "1 head cauliflower, cut into florets",
      "3 tbsp cornstarch",
      "3 tbsp neutral oil",
      "1/4 cup soy sauce",
      "2 tbsp rice vinegar + 2 tbsp maple syrup",
      "1 tbsp sriracha or chili garlic sauce",
      "3 cloves garlic, minced + 1 tsp grated ginger",
      "1/3 cup roasted peanuts",
      "4 scallions, sliced",
      "Cooked rice, for serving"
    ],
    steps: [
      "Toss cauliflower with cornstarch until coated.",
      "Heat oil in a large skillet over medium-high; cook cauliflower 10–12 minutes, turning, until golden and tender.",
      "Whisk soy sauce, vinegar, maple syrup, sriracha, garlic, and ginger.",
      "Pour the sauce into the pan and toss 2 minutes until sticky and clinging.",
      "Stir in peanuts and scallions; serve over rice."
    ]
  },
  {
    id: "burrito-bowls",
    category: "quick",
    title: "Loaded Burrito Bowls",
    time: "25 min",
    servings: "4 bowls",
    emoji: "🥙",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=70",
    desc: "Cilantro-lime rice topped with seasoned pinto beans, charred corn, salsa, and guacamole. All the burrito, none of the wrapping skills.",
    ingredients: [
      "1 1/2 cups long-grain rice",
      "Juice of 2 limes + 1/4 cup chopped cilantro",
      "2 cans (15 oz each) pinto beans, drained",
      "2 tsp chili powder + 1 tsp cumin",
      "1 1/2 cups corn (frozen or canned)",
      "1 cup salsa",
      "2 avocados, mashed with lime and salt",
      "1 cup shredded lettuce",
      "Pickled jalapeños, for serving"
    ],
    steps: [
      "Cook rice per package directions; fluff with lime juice, cilantro, and salt.",
      "Warm beans with chili powder, cumin, and a splash of water for 5 minutes.",
      "Char corn in a dry hot skillet 3–4 minutes until spotty brown.",
      "Build bowls: rice, beans, corn, salsa, guacamole, lettuce, and jalapeños."
    ]
  },
  {
    id: "mushroom-stroganoff",
    category: "quick",
    title: "Creamy Mushroom Stroganoff",
    time: "30 min",
    servings: "4 servings",
    emoji: "🍄",
    img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=70",
    desc: "Browned mushrooms in a rich, tangy cashew-cream sauce over ribbons of pasta. Pure comfort, completely plant-based.",
    ingredients: [
      "12 oz wide pasta (tagliatelle or fettuccine)",
      "2 tbsp olive oil",
      "1 lb mixed mushrooms, sliced",
      "1 onion, thinly sliced",
      "3 cloves garlic, minced",
      "1 tbsp smoked paprika",
      "3/4 cup raw cashews, blended with 1 cup water",
      "1 tbsp soy sauce + 2 tsp Dijon mustard",
      "Fresh parsley and black pepper, for serving"
    ],
    steps: [
      "Cook pasta per package directions; reserve 1/2 cup pasta water.",
      "Sear mushrooms in olive oil over high heat 6–7 minutes until deeply browned; add onion and cook 3 minutes.",
      "Stir in garlic and paprika; cook 30 seconds.",
      "Add cashew cream, soy sauce, and mustard; simmer 3 minutes, loosening with pasta water.",
      "Toss with pasta, season, and finish with parsley and black pepper."
    ]
  },
  {
    id: "falafel-wraps",
    category: "quick",
    title: "Crispy Falafel Wraps with Tahini Sauce",
    time: "30 min",
    servings: "4 wraps",
    emoji: "🌯",
    img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=70",
    desc: "Quick skillet falafel wrapped in warm flatbread with crunchy salad and a drizzly lemon-tahini sauce.",
    ingredients: [
      "1 can (15 oz) chickpeas, drained and patted dry",
      "1/2 cup fresh parsley + 1/2 cup cilantro",
      "1/2 onion, roughly chopped + 2 cloves garlic",
      "1 tsp cumin + 1 tsp coriander",
      "3 tbsp flour",
      "3 tbsp olive oil, for frying",
      "1/4 cup tahini + juice of 1 lemon + 3 tbsp water",
      "4 flatbreads or large pitas",
      "Chopped tomato, cucumber, and lettuce"
    ],
    steps: [
      "Pulse chickpeas, herbs, onion, garlic, spices, flour, and salt in a food processor until a coarse, moldable mixture forms.",
      "Shape into 12 small patties.",
      "Pan-fry in olive oil 3–4 minutes per side until deeply golden.",
      "Whisk tahini, lemon juice, water, and salt into a pourable sauce.",
      "Stuff flatbreads with falafel, salad, and a generous drizzle of tahini sauce."
    ]
  },
  {
    id: "thai-green-curry",
    category: "quick",
    title: "Thai Green Curry with Tofu",
    time: "25 min",
    servings: "4 servings",
    emoji: "🍛",
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=70",
    desc: "A fragrant green curry with crispy tofu, bamboo shoots, and bell pepper in coconut milk, finished with basil and lime.",
    ingredients: [
      "1 block (14 oz) extra-firm tofu, cubed",
      "2 tbsp neutral oil",
      "3 tbsp vegan green curry paste",
      "1 can (14 oz) full-fat coconut milk",
      "1 cup vegetable broth",
      "1 red bell pepper, sliced",
      "1 can (8 oz) bamboo shoots, drained",
      "1 tbsp soy sauce + 1 tsp brown sugar",
      "Handful Thai basil + lime wedges",
      "Cooked jasmine rice, for serving"
    ],
    steps: [
      "Pan-fry tofu in oil over medium-high until golden, about 8 minutes; set aside.",
      "Fry curry paste in the same pan 1 minute until fragrant.",
      "Whisk in coconut milk and broth; add bell pepper and bamboo shoots and simmer 8 minutes.",
      "Return tofu; season with soy sauce and sugar.",
      "Off heat, stir in Thai basil. Serve over jasmine rice with lime."
    ]
  },
  {
    id: "smoky-corn-chowder",
    category: "quick",
    title: "Smoky Corn & Potato Chowder",
    time: "30 min",
    servings: "4 servings",
    emoji: "🌽",
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=70",
    desc: "Sweet corn and tender potatoes in a creamy, smoky broth — a quick chowder that tastes like late summer.",
    ingredients: [
      "1 tbsp olive oil",
      "1 onion, diced + 2 celery stalks, diced",
      "1 lb Yukon Gold potatoes, diced small",
      "4 cups corn (frozen is fine), divided",
      "3 cups vegetable broth",
      "1 tsp smoked paprika + 1/2 tsp dried thyme",
      "1 cup unsweetened plant milk",
      "Salt, pepper, and chives for serving"
    ],
    steps: [
      "Sauté onion and celery in olive oil 4 minutes.",
      "Add potatoes, 3 cups corn, broth, paprika, and thyme; simmer 12–15 minutes until potatoes are tender.",
      "Blend half the soup with the plant milk until smooth; return to the pot.",
      "Stir in the remaining cup of corn and warm through.",
      "Season well and serve topped with chives."
    ]
  },
  {
    id: "bibimbap-bowl",
    category: "quick",
    title: "Speedy Veggie Bibimbap Bowl",
    time: "30 min",
    servings: "2 bowls",
    emoji: "🍚",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=70",
    desc: "Warm rice topped with quick-sautéed spinach, carrots, mushrooms, and crispy tofu, all brought together with a gochujang-sesame sauce.",
    ingredients: [
      "2 cups cooked short-grain rice",
      "7 oz firm tofu, cubed",
      "2 tbsp neutral oil, divided",
      "4 oz shiitake mushrooms, sliced",
      "2 carrots, julienned",
      "4 cups baby spinach",
      "2 tbsp gochujang + 1 tbsp maple syrup + 1 tbsp rice vinegar",
      "1 tsp toasted sesame oil",
      "Sesame seeds and sliced scallions, for topping"
    ],
    steps: [
      "Pan-fry tofu in 1 tablespoon oil until golden; set aside.",
      "In the same pan, sauté mushrooms 3 minutes, then carrots 2 minutes, then spinach until just wilted, seasoning each with a pinch of salt.",
      "Whisk gochujang, maple syrup, vinegar, and sesame oil into a sauce.",
      "Arrange rice in bowls with the vegetables and tofu in neat piles.",
      "Drizzle with sauce, sprinkle with sesame seeds and scallions, and mix everything before eating."
    ]
  },
  {
    id: "orzo-primavera",
    category: "quick",
    title: "One-Pot Orzo Primavera",
    time: "25 min",
    servings: "4 servings",
    emoji: "🍝",
    img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=70",
    desc: "Creamy orzo cooked risotto-style with spring vegetables, lemon, and peas — one pot, minimal dishes, maximum flavor.",
    ingredients: [
      "1 1/2 cups orzo",
      "2 tbsp olive oil",
      "1 leek or onion, thinly sliced",
      "2 cloves garlic, minced",
      "1 zucchini, diced",
      "3 1/2 cups vegetable broth",
      "1 cup frozen peas",
      "Zest and juice of 1 lemon",
      "2 tbsp nutritional yeast + fresh basil"
    ],
    steps: [
      "Soften leek in olive oil 3 minutes; add garlic and zucchini for 2 more.",
      "Stir in orzo to toast 1 minute, then add broth.",
      "Simmer 10–12 minutes, stirring often, until the orzo is creamy and tender.",
      "Stir in peas, lemon zest and juice, and nutritional yeast; warm through.",
      "Season and finish with torn basil."
    ]
  },
  {
    id: "bbq-chickpea-flatbread",
    category: "quick",
    title: "BBQ Chickpea Flatbread Pizza",
    time: "20 min",
    servings: "2 flatbreads",
    emoji: "🍕",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=70",
    desc: "Crispy flatbreads topped with smoky BBQ chickpeas, red onion, and vegan cheese, finished with cool cilantro-lime drizzle.",
    ingredients: [
      "2 large flatbreads or naan",
      "1 can (15 oz) chickpeas, drained",
      "1/2 cup BBQ sauce",
      "1 cup shredded vegan mozzarella",
      "1/2 red onion, thinly sliced",
      "1/4 cup vegan mayo + juice of 1/2 lime",
      "2 tbsp chopped cilantro",
      "Olive oil, for brushing"
    ],
    steps: [
      "Heat oven to 425°F (220°C). Brush flatbreads lightly with olive oil.",
      "Toss chickpeas with BBQ sauce; spoon over the flatbreads.",
      "Scatter with vegan mozzarella and red onion.",
      "Bake 10–12 minutes until the edges are crisp and the cheese is melted.",
      "Whisk mayo, lime juice, and cilantro; drizzle over the hot flatbreads and slice."
    ]
  },
  {
    id: "edamame-soba",
    category: "quick",
    title: "Sesame Soba Noodles with Edamame",
    time: "15 min",
    servings: "3 servings",
    emoji: "🍜",
    img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=900&q=70",
    desc: "Nutty soba noodles tossed with protein-packed edamame, crisp cucumber, and a ginger-sesame dressing. Great warm or cold.",
    ingredients: [
      "8 oz soba noodles",
      "1 1/2 cups frozen shelled edamame",
      "3 tbsp soy sauce",
      "2 tbsp rice vinegar",
      "1 tbsp toasted sesame oil",
      "1 tbsp maple syrup",
      "1 tsp grated ginger + 1 clove garlic, grated",
      "1 cucumber, julienned",
      "Sesame seeds and sliced scallions, for topping"
    ],
    steps: [
      "Boil soba noodles per package, adding edamame for the last 3 minutes; drain and rinse under cool water.",
      "Whisk soy sauce, vinegar, sesame oil, maple syrup, ginger, and garlic.",
      "Toss noodles and edamame with the dressing and cucumber.",
      "Top with sesame seeds and scallions; serve immediately or chilled."
    ]
  },
  {
    id: "sweet-potato-curry-soup",
    category: "quick",
    title: "Thai-Spiced Sweet Potato Soup",
    time: "30 min",
    servings: "4 servings",
    emoji: "🍠",
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=70",
    desc: "Velvety sweet potato soup spiked with red curry paste, coconut milk, and lime. Blend-and-done comfort.",
    ingredients: [
      "1 tbsp coconut oil",
      "1 onion, diced",
      "2 tbsp vegan red curry paste",
      "2 lbs sweet potatoes, peeled and cubed",
      "4 cups vegetable broth",
      "1 can (14 oz) coconut milk",
      "Juice of 1 lime",
      "Salt to taste",
      "Cilantro and chili flakes, for serving"
    ],
    steps: [
      "Soften onion in coconut oil 3 minutes; stir in curry paste for 1 minute.",
      "Add sweet potatoes and broth; boil, then simmer 15 minutes until very tender.",
      "Blend until completely smooth (immersion blender works great).",
      "Stir in coconut milk and lime juice; season with salt.",
      "Serve topped with cilantro and chili flakes."
    ]
  },
  {
    id: "portobello-burgers",
    category: "quick",
    title: "Balsamic Portobello Burgers",
    time: "25 min",
    servings: "4 burgers",
    emoji: "🍔",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=70",
    desc: "Juicy balsamic-marinated portobello caps seared until meaty, stacked on toasted buns with garlic mayo and arugula.",
    ingredients: [
      "4 large portobello mushroom caps, stemmed",
      "1/4 cup balsamic vinegar",
      "3 tbsp olive oil",
      "2 cloves garlic, minced",
      "1 tsp dried thyme",
      "4 burger buns, toasted",
      "1/3 cup vegan mayo + 1 small garlic clove, grated",
      "2 cups arugula",
      "1 tomato, sliced + 1/2 red onion, sliced"
    ],
    steps: [
      "Whisk balsamic, olive oil, garlic, thyme, salt, and pepper; brush all over the portobellos and marinate 10 minutes.",
      "Sear caps in a hot skillet or grill pan 4–5 minutes per side until tender and juicy.",
      "Stir grated garlic into the mayo.",
      "Spread garlic mayo on toasted buns; stack with arugula, portobello, tomato, and onion.",
      "Serve immediately with extra napkins."
    ]
  },
  {
    id: "cauliflower-shawarma-bowl",
    category: "quick",
    title: "Sheet-Pan Cauliflower Shawarma Bowls",
    time: "30 min",
    servings: "4 bowls",
    emoji: "🥗",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=70",
    desc: "Shawarma-spiced cauliflower and chickpeas roast on one sheet pan, then land on couscous with cucumber, tomato, and tahini.",
    ingredients: [
      "1 head cauliflower, cut into florets",
      "1 can (15 oz) chickpeas, drained and dried",
      "3 tbsp olive oil",
      "2 tsp cumin + 2 tsp smoked paprika + 1 tsp coriander + 1/2 tsp cinnamon",
      "1 cup couscous",
      "1 cucumber, diced + 2 tomatoes, diced",
      "1/4 cup tahini + juice of 1 lemon + 3 tbsp water",
      "Fresh parsley, for serving"
    ],
    steps: [
      "Heat oven to 450°F (230°C). Toss cauliflower and chickpeas with olive oil, spices, and salt on a sheet pan.",
      "Roast 20–22 minutes, tossing once, until charred at the edges.",
      "Meanwhile, pour 1 cup boiling water over couscous, cover 5 minutes, and fluff.",
      "Whisk tahini, lemon juice, water, and salt into a sauce.",
      "Build bowls: couscous, roasted veg, cucumber, tomato, tahini sauce, and parsley."
    ]
  },
  {
    id: "tofu-banh-mi",
    category: "quick",
    title: "Lemongrass Tofu Banh Mi",
    time: "30 min",
    servings: "4 sandwiches",
    emoji: "🥖",
    img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=70",
    desc: "Crispy soy-lemongrass tofu in a crusty baguette with pickled carrots, cucumber, cilantro, and sriracha mayo.",
    ingredients: [
      "1 block (14 oz) extra-firm tofu, sliced into slabs",
      "3 tbsp soy sauce + 1 tbsp maple syrup",
      "1 stalk lemongrass, minced (or 1 tbsp paste)",
      "2 tbsp neutral oil",
      "2 carrots, julienned + 1/4 cup rice vinegar + 1 tsp sugar",
      "1 baguette, cut into 4 pieces and split",
      "1/3 cup vegan mayo + 2 tsp sriracha",
      "1/2 cucumber, sliced lengthwise",
      "Fresh cilantro sprigs and sliced jalapeño"
    ],
    steps: [
      "Toss carrots with vinegar, sugar, and a pinch of salt; pickle while you cook.",
      "Marinate tofu slabs in soy sauce, maple syrup, and lemongrass for 10 minutes.",
      "Pan-fry tofu in oil 4 minutes per side until caramelized.",
      "Mix mayo and sriracha; spread inside the baguette pieces.",
      "Fill with tofu, pickled carrots, cucumber, cilantro, and jalapeño. Press lightly and serve."
    ]
  },
  {
    id: "arrabbiata-penne",
    category: "quick",
    title: "Spicy Penne Arrabbiata",
    time: "20 min",
    servings: "4 servings",
    emoji: "🌶️",
    img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=70",
    desc: "Penne in a fiery garlic-chili tomato sauce that comes together while the pasta boils. Simple, bold, naturally vegan.",
    ingredients: [
      "12 oz penne",
      "3 tbsp olive oil",
      "5 cloves garlic, thinly sliced",
      "1 tsp red pepper flakes (more if you dare)",
      "1 can (28 oz) crushed tomatoes",
      "1 tsp sugar",
      "1/4 cup fresh basil, torn",
      "2 tbsp nutritional yeast",
      "Salt to taste"
    ],
    steps: [
      "Cook penne in salted water; reserve 1/2 cup pasta water.",
      "Warm olive oil over medium; sizzle garlic and pepper flakes 1–2 minutes until golden.",
      "Add crushed tomatoes and sugar; simmer 10 minutes until slightly thickened.",
      "Toss with penne and a splash of pasta water.",
      "Finish with basil, nutritional yeast, and salt."
    ]
  },
  {
    id: "korean-tofu-bowls",
    category: "quick",
    title: "Gochujang Glazed Tofu Bowls",
    time: "25 min",
    servings: "3 bowls",
    emoji: "🔥",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=70",
    desc: "Crispy tofu in a sweet-spicy gochujang glaze over rice with sautéed spinach and crunchy quick-pickled cucumber.",
    ingredients: [
      "1 block (14 oz) extra-firm tofu, cubed",
      "2 tbsp cornstarch",
      "2 tbsp neutral oil",
      "3 tbsp gochujang",
      "2 tbsp soy sauce + 2 tbsp maple syrup",
      "1 tbsp rice vinegar",
      "2 cloves garlic, minced",
      "3 cups cooked rice + 4 cups baby spinach, sautéed",
      "1/2 cucumber, sliced + sesame seeds"
    ],
    steps: [
      "Toss tofu in cornstarch; pan-fry in oil over medium-high 8–10 minutes until crispy.",
      "Whisk gochujang, soy sauce, maple syrup, vinegar, garlic, and 2 tablespoons water.",
      "Pour the sauce over the tofu and toss 1–2 minutes until glazed.",
      "Build bowls with rice, sautéed spinach, glazed tofu, and cucumber.",
      "Finish with sesame seeds."
    ]
  },
  {
    id: "zucchini-corn-tacos",
    category: "quick",
    title: "Charred Zucchini & Corn Tacos",
    time: "20 min",
    servings: "8 tacos",
    emoji: "🌮",
    img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=70",
    desc: "Skillet-charred zucchini and sweet corn with chipotle crema, cotija-style topping, and lime — summer in a tortilla.",
    ingredients: [
      "2 zucchini, diced",
      "2 cups corn kernels",
      "1 tbsp olive oil",
      "1 tsp chili powder + 1/2 tsp cumin",
      "8 corn tortillas, warmed",
      "1/3 cup vegan sour cream + 1 tsp chipotle in adobo, minced",
      "1/4 cup crumbled vegan feta or toasted pepitas",
      "Fresh cilantro and lime wedges"
    ],
    steps: [
      "Heat olive oil in a cast-iron skillet over high; char zucchini and corn 6–7 minutes, stirring sparingly, until browned.",
      "Season with chili powder, cumin, and salt.",
      "Stir chipotle into the vegan sour cream.",
      "Fill warm tortillas with the veggies; top with chipotle crema, vegan feta or pepitas, and cilantro.",
      "Serve with lime wedges."
    ]
  },
  {
    id: "red-lentil-dal",
    category: "quick",
    title: "Everyday Red Lentil Dal",
    time: "30 min",
    servings: "4 servings",
    emoji: "🍛",
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=70",
    desc: "Quick-cooking red lentils simmered with turmeric and tomatoes, finished with a sizzling cumin-garlic tempering.",
    ingredients: [
      "1 1/2 cups red lentils, rinsed",
      "4 cups water",
      "1 tsp turmeric",
      "1 can (14 oz) diced tomatoes",
      "3 tbsp coconut oil or neutral oil",
      "1 onion, finely diced",
      "4 cloves garlic, sliced + 1 tsp cumin seeds",
      "1/2 tsp chili flakes",
      "Juice of 1/2 lemon, cilantro, and rice for serving"
    ],
    steps: [
      "Simmer lentils with water and turmeric 15–18 minutes, skimming foam, until soft.",
      "Stir in tomatoes and salt; simmer 5 more minutes.",
      "Meanwhile, fry onion in oil until golden; add garlic, cumin seeds, and chili flakes for 1 minute until fragrant.",
      "Pour the sizzling tempering over the dal and stir.",
      "Brighten with lemon and serve over rice with cilantro."
    ]
  },
  {
    id: "greek-orzo-salad",
    category: "quick",
    title: "Greek Orzo Salad with White Beans",
    time: "20 min",
    servings: "4 servings",
    emoji: "🥗",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=70",
    desc: "A hearty Mediterranean salad of orzo, white beans, cucumber, olives, and tomatoes in a bright oregano vinaigrette.",
    ingredients: [
      "1 1/4 cups orzo",
      "1 can (15 oz) cannellini beans, drained",
      "1 cucumber, diced",
      "2 cups cherry tomatoes, halved",
      "1/2 cup kalamata olives, halved",
      "1/4 red onion, thinly sliced",
      "1/4 cup olive oil + 3 tbsp red wine vinegar",
      "2 tsp dried oregano + 1 clove garlic, grated",
      "Fresh dill or parsley, salt and pepper"
    ],
    steps: [
      "Cook orzo in salted water until al dente; drain and rinse briefly under cool water.",
      "Whisk olive oil, vinegar, oregano, garlic, salt, and pepper.",
      "Combine orzo, beans, cucumber, tomatoes, olives, and onion in a large bowl.",
      "Toss with the dressing and fresh herbs.",
      "Taste, adjust seasoning, and serve at room temperature or chilled."
    ]
  },
  {
    id: "hoisin-eggplant-skillet",
    category: "quick",
    title: "Sticky Hoisin Eggplant Skillet",
    time: "25 min",
    servings: "3 servings",
    emoji: "🍆",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=70",
    desc: "Tender, caramelized eggplant glazed in garlicky hoisin-soy sauce, served over steamed rice with scallions.",
    ingredients: [
      "2 medium eggplants, cut into bite-size wedges",
      "3 tbsp neutral oil",
      "3 tbsp hoisin sauce",
      "2 tbsp soy sauce",
      "1 tbsp rice vinegar",
      "1 tbsp maple syrup",
      "3 cloves garlic, minced + 1 tsp grated ginger",
      "3 cups cooked rice",
      "Scallions and sesame seeds, for topping"
    ],
    steps: [
      "Heat oil in a large skillet over medium-high; cook eggplant 10–12 minutes, turning, until deeply browned and tender.",
      "Whisk hoisin, soy sauce, vinegar, maple syrup, garlic, ginger, and 3 tablespoons water.",
      "Pour sauce over the eggplant; simmer 2–3 minutes until sticky and glossy.",
      "Serve over rice, topped with scallions and sesame seeds."
    ]
  },
  {
    id: "tortellini-style-tomato-gnocchi",
    category: "quick",
    title: "One-Pan Tomato Basil Gnocchi Bake",
    time: "25 min",
    servings: "4 servings",
    emoji: "🍅",
    img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=70",
    desc: "Pillowy gnocchi simmered right in a garlicky tomato sauce, then broiled with vegan mozzarella until bubbly.",
    ingredients: [
      "1 lb shelf-stable potato gnocchi",
      "2 tbsp olive oil",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "1 can (28 oz) crushed tomatoes",
      "1 tsp dried oregano + pinch of sugar",
      "1 cup shredded vegan mozzarella",
      "Fresh basil, salt, and pepper"
    ],
    steps: [
      "Soften onion in olive oil in an oven-safe skillet, 3 minutes; add garlic for 30 seconds.",
      "Add crushed tomatoes, oregano, sugar, and 1/2 cup water; bring to a simmer.",
      "Stir in gnocchi; cover and simmer 8 minutes until tender.",
      "Scatter with vegan mozzarella and broil 2–3 minutes until melted and spotty.",
      "Top with basil and serve straight from the pan."
    ]
  },
  {
    id: "moroccan-couscous-skillet",
    category: "quick",
    title: "Moroccan-Spiced Chickpea Couscous",
    time: "20 min",
    servings: "4 servings",
    emoji: "🥘",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=70",
    desc: "Fluffy couscous with cinnamon-cumin chickpeas, sweet raisins, and toasted almonds, brightened with lemon and mint.",
    ingredients: [
      "1 1/4 cups couscous",
      "2 tbsp olive oil",
      "1 onion, diced",
      "1 can (15 oz) chickpeas, drained",
      "1 1/2 tsp cumin + 1 tsp cinnamon + 1/2 tsp turmeric",
      "1/3 cup golden raisins",
      "1/3 cup sliced almonds, toasted",
      "Juice of 1 lemon",
      "Fresh mint and parsley, chopped"
    ],
    steps: [
      "Pour 1 1/4 cups boiling water over couscous with a pinch of salt; cover 5 minutes, then fluff.",
      "Sauté onion in olive oil 4 minutes; add chickpeas and spices and cook 4 minutes more.",
      "Stir in raisins and a splash of water; warm 1 minute.",
      "Toss couscous with the chickpea mixture, lemon juice, almonds, and herbs.",
      "Season and serve warm."
    ]
  },
  {
    id: "buffalo-cauliflower-wraps",
    category: "quick",
    title: "Buffalo Cauliflower Wraps",
    time: "30 min",
    servings: "4 wraps",
    emoji: "🌯",
    img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=70",
    desc: "Roasted buffalo cauliflower with cool ranch-style dressing, crunchy lettuce, and celery, all rolled in warm tortillas.",
    ingredients: [
      "1 head cauliflower, cut into small florets",
      "2 tbsp olive oil",
      "1/2 cup buffalo hot sauce",
      "1 tbsp maple syrup",
      "4 large flour tortillas",
      "1/2 cup vegan mayo + 1 tbsp lemon juice + 1 tsp dried dill",
      "2 cups shredded romaine",
      "2 celery stalks, thinly sliced",
      "1/4 red onion, thinly sliced"
    ],
    steps: [
      "Heat oven to 450°F (230°C). Toss cauliflower with olive oil and salt; roast 15 minutes.",
      "Whisk buffalo sauce with maple syrup; toss with the cauliflower and roast 8 more minutes.",
      "Stir mayo, lemon juice, and dill into a quick ranch.",
      "Spread ranch on tortillas; pile on romaine, celery, onion, and buffalo cauliflower.",
      "Roll up tightly, slice in half, and serve."
    ]
  },
  {
    id: "singapore-noodles",
    category: "quick",
    title: "Singapore-Style Curry Noodles",
    time: "25 min",
    servings: "4 servings",
    emoji: "🍜",
    img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=900&q=70",
    desc: "Thin rice vermicelli stir-fried with curry powder, tofu, peppers, and snow peas — fragrant, golden, and fast.",
    ingredients: [
      "8 oz thin rice vermicelli",
      "7 oz firm tofu, cut into small cubes",
      "3 tbsp neutral oil",
      "1 tbsp curry powder + 1/2 tsp turmeric",
      "1 red bell pepper, sliced",
      "1 cup snow peas",
      "1/2 onion, sliced",
      "3 tbsp soy sauce + 1 tsp sugar",
      "2 scallions, sliced + lime wedges"
    ],
    steps: [
      "Soak vermicelli in hot water 5 minutes until pliable; drain well.",
      "Stir-fry tofu in 2 tablespoons oil until golden; remove.",
      "Add remaining oil; stir-fry onion, bell pepper, and snow peas 3 minutes.",
      "Sprinkle in curry powder and turmeric; add noodles, tofu, soy sauce, and sugar.",
      "Toss over high heat 2–3 minutes until evenly golden; finish with scallions and lime."
    ]
  },
  {
    id: "tuscan-bean-skillet",
    category: "quick",
    title: "Tuscan Butter Bean Skillet",
    time: "20 min",
    servings: "3 servings",
    emoji: "🍳",
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=70",
    desc: "Creamy butter beans in a sun-dried tomato and spinach sauce — a one-skillet stunner for dunking crusty bread.",
    ingredients: [
      "2 tbsp olive oil",
      "4 cloves garlic, sliced",
      "1/3 cup sun-dried tomatoes, chopped",
      "1 tsp Italian seasoning + 1/2 tsp chili flakes",
      "2 cans (15 oz each) butter beans, drained",
      "3/4 cup coconut cream or cashew cream",
      "3 cups baby spinach",
      "2 tbsp nutritional yeast",
      "Crusty bread, for serving"
    ],
    steps: [
      "Warm olive oil over medium; cook garlic and sun-dried tomatoes 2 minutes.",
      "Add Italian seasoning, chili flakes, beans, and cream; simmer 5 minutes.",
      "Fold in spinach until wilted; stir in nutritional yeast.",
      "Season with salt and pepper.",
      "Serve straight from the skillet with crusty bread for dipping."
    ]
  },
  {
    id: "kale-caesar-tempeh",
    category: "quick",
    title: "Kale Caesar with Crispy Tempeh Croutons",
    time: "25 min",
    servings: "2 large salads",
    emoji: "🥬",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=70",
    desc: "Massaged kale in a creamy caper-Dijon caesar dressing topped with smoky pan-crisped tempeh cubes and toasted breadcrumbs.",
    ingredients: [
      "1 large bunch kale, stemmed and chopped",
      "8 oz tempeh, cubed",
      "2 tbsp olive oil + 1 tbsp soy sauce + 1 tsp smoked paprika",
      "1/3 cup vegan mayo",
      "1 tbsp Dijon mustard + 1 tsp capers, minced",
      "1 clove garlic, grated",
      "Juice of 1 lemon",
      "2 tbsp nutritional yeast",
      "1/3 cup toasted panko breadcrumbs"
    ],
    steps: [
      "Toss tempeh with soy sauce and paprika; pan-fry in olive oil 8 minutes until crispy on all sides.",
      "Whisk mayo, Dijon, capers, garlic, lemon juice, nutritional yeast, and 1–2 tablespoons water into a dressing.",
      "Massage kale with a pinch of salt and a spoonful of dressing for 1 minute until softened.",
      "Toss kale with remaining dressing.",
      "Top with tempeh croutons and toasted panko."
    ]
  },
  {
    id: "sweet-chili-brussels-bowl",
    category: "quick",
    title: "Sweet Chili Brussels & Rice Bowl",
    time: "25 min",
    servings: "3 bowls",
    emoji: "🥦",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=70",
    desc: "Caramelized brussels sprouts and crispy chickpeas glazed in sweet chili sauce over rice with creamy avocado.",
    ingredients: [
      "1 lb brussels sprouts, halved",
      "1 can (15 oz) chickpeas, drained and dried",
      "2 tbsp neutral oil",
      "1/3 cup sweet chili sauce",
      "1 tbsp soy sauce",
      "1 tsp sriracha",
      "3 cups cooked jasmine rice",
      "1 avocado, sliced",
      "Sesame seeds and scallions, for topping"
    ],
    steps: [
      "Heat oil in a large skillet over medium-high; add brussels cut-side down and cook 6 minutes undisturbed until charred.",
      "Add chickpeas and cook 5 minutes, tossing, until crisped.",
      "Stir together sweet chili sauce, soy sauce, and sriracha; pour in and toss 1 minute until glazed.",
      "Serve over rice with avocado, sesame seeds, and scallions."
    ]
  },
  {
    id: "lemony-broccoli-pasta",
    category: "quick",
    title: "Lemony Broccoli & Almond Pasta",
    time: "20 min",
    servings: "4 servings",
    emoji: "🥦",
    img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=70",
    desc: "Orecchiette with charred broccoli, toasted almonds, garlic, and lemon — bright, crunchy, and done in twenty minutes.",
    ingredients: [
      "12 oz orecchiette or shells",
      "1 large head broccoli, cut into small florets",
      "1/4 cup olive oil",
      "4 cloves garlic, sliced",
      "1/2 tsp chili flakes",
      "1/3 cup sliced almonds",
      "Zest and juice of 1 lemon",
      "3 tbsp nutritional yeast",
      "Salt and black pepper"
    ],
    steps: [
      "Cook pasta in salted water, adding broccoli for the last 3 minutes; reserve 1/2 cup pasta water and drain.",
      "Toast almonds in olive oil over medium 2 minutes; add garlic and chili flakes for 1 more minute.",
      "Add pasta, broccoli, and a splash of pasta water; toss over the heat 1 minute.",
      "Finish with lemon zest, lemon juice, nutritional yeast, salt, and pepper."
    ]
  },
  {
    id: "tex-mex-skillet-quinoa",
    category: "quick",
    title: "One-Pan Tex-Mex Quinoa Skillet",
    time: "30 min",
    servings: "4 servings",
    emoji: "🥘",
    img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=900&q=70",
    desc: "Quinoa simmers right in salsa and broth with black beans and corn, then gets topped with avocado and vegan cheese.",
    ingredients: [
      "1 cup quinoa, rinsed",
      "1 tbsp olive oil",
      "1 onion, diced",
      "1 can (15 oz) black beans, drained",
      "1 cup corn",
      "1 cup salsa + 1 1/2 cups vegetable broth",
      "2 tsp chili powder + 1 tsp cumin",
      "3/4 cup shredded vegan cheese",
      "1 avocado, diced + cilantro and lime"
    ],
    steps: [
      "Soften onion in olive oil in a deep skillet, 3 minutes.",
      "Add quinoa, beans, corn, salsa, broth, and spices; stir and bring to a boil.",
      "Cover and simmer on low 18 minutes until the quinoa is tender.",
      "Scatter vegan cheese on top, cover 2 minutes to melt.",
      "Finish with avocado, cilantro, and lime wedges."
    ]
  },
  {
    id: "ginger-scallion-noodles",
    category: "quick",
    title: "Ginger-Scallion Oil Noodles",
    time: "15 min",
    servings: "2 servings",
    emoji: "🍜",
    img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=900&q=70",
    desc: "Springy noodles slicked with sizzling ginger-scallion oil and soy — five ingredients of pure magic, plus crispy tofu if you like.",
    ingredients: [
      "10 oz fresh wheat noodles (or 8 oz dried)",
      "6 scallions, finely sliced",
      "3 tbsp fresh ginger, finely minced",
      "1/4 cup neutral oil",
      "2 tbsp soy sauce",
      "1 tsp rice vinegar",
      "1/2 tsp sugar",
      "Chili crisp, for serving",
      "1 cup shelled edamame, steamed (optional protein)"
    ],
    steps: [
      "Cook noodles per package directions; drain.",
      "Put scallions and ginger in a heatproof bowl with a big pinch of salt.",
      "Heat oil until shimmering and pour it over the aromatics — it should sizzle hard.",
      "Stir in soy sauce, vinegar, and sugar.",
      "Toss the noodles and edamame in the ginger-scallion oil; top with chili crisp."
    ]
  },
  {
    id: "harissa-chickpea-skillet",
    category: "quick",
    title: "Harissa Chickpea & Tomato Skillet",
    time: "20 min",
    servings: "3 servings",
    emoji: "🍅",
    img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=900&q=70",
    desc: "Chickpeas simmered in a spicy harissa-tomato sauce with wilted greens, served with warm pita and a swoosh of hummus.",
    ingredients: [
      "2 tbsp olive oil",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "2 tbsp harissa paste",
      "2 cans (15 oz each) chickpeas, drained",
      "1 can (14 oz) crushed tomatoes",
      "3 cups baby spinach or chard",
      "1/2 cup hummus + warm pita, for serving",
      "Fresh mint or parsley, chopped"
    ],
    steps: [
      "Soften onion in olive oil 3 minutes; add garlic and harissa for 1 minute.",
      "Stir in chickpeas and crushed tomatoes; simmer 8–10 minutes until thickened.",
      "Fold in greens until wilted; season with salt.",
      "Swoosh hummus on plates, spoon the chickpeas over, and shower with herbs.",
      "Serve with warm pita for scooping."
    ]
  },
  {
    id: "avocado-caprese-panini",
    category: "quick",
    title: "Avocado Caprese Panini",
    time: "15 min",
    servings: "2 sandwiches",
    emoji: "🥪",
    img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=70",
    desc: "Golden pressed sourdough with creamy avocado, vegan mozzarella, juicy tomato, basil, and a balsamic drizzle.",
    ingredients: [
      "4 slices sourdough bread",
      "1 ripe avocado, sliced",
      "4 oz vegan mozzarella, sliced",
      "1 large tomato, sliced",
      "8 fresh basil leaves",
      "2 tsp balsamic glaze",
      "2 tbsp olive oil",
      "Flaky salt and black pepper"
    ],
    steps: [
      "Layer bread with vegan mozzarella, tomato, avocado, basil, balsamic glaze, salt, and pepper; close the sandwiches.",
      "Brush the outsides with olive oil.",
      "Press in a panini press or weighted skillet over medium heat, 3–4 minutes per side, until golden and melty.",
      "Slice diagonally and serve hot."
    ]
  }
];
