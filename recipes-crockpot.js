// Crock Pot Meals — 50 slow cooker vegan recipes.
const RECIPES_CROCKPOT = [
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

  // ---------- New slow cooker recipes ----------
  {
    id: "crockpot-white-bean-chili",
    category: "crockpot",
    title: "White Bean & Green Chile Chili",
    time: "6–7 hrs low",
    servings: "6 servings",
    emoji: "🍲",
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=70",
    desc: "Creamy white beans simmered with roasted green chiles, cumin, and lime — a mellow, tangy cousin of classic red chili.",
    ingredients: [
      "3 cans (15 oz) cannellini or great northern beans, drained",
      "2 cans (4 oz) diced green chiles",
      "1 onion, diced + 4 cloves garlic, minced",
      "1 poblano pepper, diced",
      "2 tsp cumin + 1 tsp dried oregano",
      "4 cups vegetable broth",
      "1 cup frozen corn",
      "1/2 cup raw cashews, blended with 3/4 cup water",
      "Juice of 1 lime + fresh cilantro, for serving"
    ],
    steps: [
      "Add beans, green chiles, onion, garlic, poblano, spices, and broth to the crock pot.",
      "Cover and cook on LOW 6–7 hours.",
      "Stir in corn and the cashew cream during the last 30 minutes.",
      "Mash a ladleful of beans against the side to thicken the chili.",
      "Finish with lime juice and cilantro; serve with tortilla chips."
    ]
  },
  {
    id: "crockpot-sweet-potato-chili",
    category: "crockpot",
    title: "Sweet Potato & Black Bean Chili",
    time: "6–8 hrs low",
    servings: "8 servings",
    emoji: "🍠",
    img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=900&q=70",
    desc: "Sweet potatoes melt into smoky chipotle-spiked black bean chili for the perfect sweet-heat balance. A guaranteed crowd-pleaser.",
    ingredients: [
      "2 large sweet potatoes, peeled and cubed",
      "2 cans (15 oz) black beans, drained",
      "1 can (14 oz) fire-roasted diced tomatoes",
      "1 onion, diced + 3 cloves garlic, minced",
      "1–2 chipotle peppers in adobo, minced",
      "2 tbsp chili powder + 2 tsp cumin",
      "2 cups vegetable broth",
      "1 cup frozen corn",
      "Salt; pepitas and lime wedges for serving"
    ],
    steps: [
      "Add everything except corn to the crock pot and stir well.",
      "Cover and cook on LOW 6–8 hours until sweet potatoes are fork-tender.",
      "Stir in corn for the last 30 minutes.",
      "Lightly mash some of the sweet potato to thicken.",
      "Season and serve topped with pepitas and a squeeze of lime."
    ]
  },
  {
    id: "crockpot-minestrone",
    category: "crockpot",
    title: "Slow Cooker Minestrone",
    time: "6–7 hrs low",
    servings: "8 servings",
    emoji: "🍅",
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=70",
    desc: "An Italian classic packed with beans, zucchini, tomatoes, and tender pasta added right at the end. Don't skip the basil.",
    ingredients: [
      "1 can (15 oz) cannellini beans + 1 can kidney beans, drained",
      "1 can (28 oz) diced tomatoes",
      "2 carrots, sliced + 2 celery stalks, sliced",
      "1 onion, diced + 3 cloves garlic, minced",
      "1 zucchini, diced",
      "6 cups vegetable broth",
      "2 tsp Italian seasoning + 1 bay leaf",
      "1 cup small pasta (ditalini or elbows)",
      "2 cups chopped kale; fresh basil for serving"
    ],
    steps: [
      "Add beans, tomatoes, carrots, celery, onion, garlic, zucchini, broth, and seasonings to the crock pot.",
      "Cover and cook on LOW 6–7 hours.",
      "Stir in pasta and kale; cook on HIGH 20–30 minutes until the pasta is al dente.",
      "Discard the bay leaf and season well.",
      "Ladle into bowls and top with torn basil and a drizzle of olive oil."
    ]
  },
  {
    id: "crockpot-split-pea-soup",
    category: "crockpot",
    title: "Smoky Split Pea Soup",
    time: "8 hrs low",
    servings: "6 servings",
    emoji: "🥣",
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=70",
    desc: "Split peas cook down into a thick, smoky, stick-to-your-ribs soup — liquid smoke and smoked paprika stand in for the ham.",
    ingredients: [
      "1 lb (2 1/4 cups) green split peas, rinsed",
      "3 carrots, diced + 3 celery stalks, diced",
      "1 onion, diced + 4 cloves garlic, minced",
      "7 cups vegetable broth",
      "2 tsp smoked paprika",
      "1/2 tsp liquid smoke",
      "1 bay leaf + 1 tsp dried thyme",
      "Salt and black pepper to taste",
      "Croutons, for serving"
    ],
    steps: [
      "Add all ingredients except salt to the crock pot and stir.",
      "Cover and cook on LOW 8 hours until the peas have completely broken down.",
      "Discard the bay leaf and stir vigorously to make the soup creamy.",
      "Season with salt and plenty of black pepper.",
      "Serve hot with crunchy croutons."
    ]
  },
  {
    id: "crockpot-black-bean-soup",
    category: "crockpot",
    title: "Cuban-Style Black Bean Soup",
    time: "8–9 hrs low",
    servings: "8 servings",
    emoji: "🫘",
    img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=900&q=70",
    desc: "Dried black beans simmer all day with cumin, oregano, and bell pepper, then get brightened with lime and sherry vinegar.",
    ingredients: [
      "1 lb dried black beans, rinsed (no soak needed)",
      "1 onion, diced + 1 green bell pepper, diced",
      "5 cloves garlic, minced",
      "2 tsp cumin + 2 tsp dried oregano",
      "1 bay leaf",
      "8 cups vegetable broth",
      "1 tbsp sherry or red wine vinegar",
      "Juice of 1 lime",
      "Avocado, cilantro, and rice for serving"
    ],
    steps: [
      "Add beans, onion, bell pepper, garlic, spices, bay leaf, and broth to the crock pot.",
      "Cover and cook on LOW 8–9 hours until the beans are completely tender.",
      "Discard the bay leaf; blend 2 cups of the soup and stir back in for body.",
      "Stir in vinegar and lime juice, then season with salt.",
      "Serve over rice with avocado and cilantro."
    ]
  },
  {
    id: "crockpot-tortilla-soup",
    category: "crockpot",
    title: "Crock Pot Tortilla Soup",
    time: "6 hrs low",
    servings: "6 servings",
    emoji: "🌮",
    img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=70",
    desc: "A zesty tomato broth loaded with black beans, corn, and green chiles, crowned with crispy tortilla strips and avocado.",
    ingredients: [
      "2 cans (15 oz) black beans, drained",
      "1 can (14 oz) fire-roasted diced tomatoes",
      "1 can (4 oz) diced green chiles",
      "1 onion, diced + 3 cloves garlic, minced",
      "2 tsp cumin + 2 tsp chili powder",
      "5 cups vegetable broth",
      "1 1/2 cups frozen corn",
      "Juice of 1 lime",
      "Tortilla strips, avocado, and cilantro for serving"
    ],
    steps: [
      "Add beans, tomatoes, chiles, onion, garlic, spices, and broth to the crock pot.",
      "Cover and cook on LOW 6 hours (or HIGH 3 hours).",
      "Stir in corn for the last 30 minutes.",
      "Add lime juice and season with salt.",
      "Top each bowl with crispy tortilla strips, avocado, and cilantro."
    ]
  },
  {
    id: "crockpot-corn-chowder",
    category: "crockpot",
    title: "Creamy Corn Chowder",
    time: "6 hrs low",
    servings: "6 servings",
    emoji: "🌽",
    img: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=900&q=70",
    desc: "Sweet corn and potatoes in a velvety cashew-coconut broth with smoked paprika. Summer flavor, zero effort.",
    ingredients: [
      "5 cups corn kernels (fresh or frozen)",
      "1 lb Yukon Gold potatoes, diced",
      "1 onion, diced + 2 celery stalks, diced",
      "3 cloves garlic, minced",
      "4 cups vegetable broth",
      "1 tsp smoked paprika + 1/2 tsp dried thyme",
      "1/2 cup raw cashews",
      "1 cup unsweetened plant milk",
      "Chives and black pepper, for serving"
    ],
    steps: [
      "Add corn, potatoes, onion, celery, garlic, broth, and spices to the crock pot.",
      "Cover and cook on LOW 6 hours until potatoes are tender.",
      "Blend cashews with plant milk until smooth; stir into the chowder.",
      "Blend about a third of the soup and return it to the pot for creaminess.",
      "Season and serve topped with chives and cracked pepper."
    ]
  },
  {
    id: "crockpot-butternut-soup",
    category: "crockpot",
    title: "Butternut Squash & Apple Soup",
    time: "6 hrs low",
    servings: "6 servings",
    emoji: "🎃",
    img: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=900&q=70",
    desc: "Silky butternut squash blended with sweet apple, ginger, and a swirl of coconut milk. Autumn in a bowl.",
    ingredients: [
      "1 large butternut squash (about 3 lbs), peeled and cubed",
      "2 apples, peeled and chopped",
      "1 onion, diced",
      "1 tbsp grated fresh ginger",
      "1/2 tsp ground nutmeg + 1/2 tsp cinnamon",
      "4 cups vegetable broth",
      "1 can (14 oz) coconut milk",
      "Salt and pepper to taste",
      "Toasted pepitas, for serving"
    ],
    steps: [
      "Add squash, apples, onion, ginger, spices, and broth to the crock pot.",
      "Cover and cook on LOW 6 hours (or HIGH 3 hours) until the squash is very soft.",
      "Blend until completely smooth with an immersion blender.",
      "Stir in coconut milk, reserving a little for swirling on top.",
      "Season, ladle into bowls, and finish with coconut milk and pepitas."
    ]
  },
  {
    id: "crockpot-wild-rice-soup",
    category: "crockpot",
    title: "Creamy Wild Rice & Mushroom Soup",
    time: "7 hrs low",
    servings: "6 servings",
    emoji: "🍄",
    img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=70",
    desc: "Chewy wild rice and meaty mushrooms in an herby cashew cream broth — Minnesota's favorite soup gone fully plant-based.",
    ingredients: [
      "1 cup wild rice blend, rinsed",
      "8 oz cremini mushrooms, sliced",
      "3 carrots, sliced + 3 celery stalks, sliced",
      "1 onion, diced + 4 cloves garlic, minced",
      "6 cups vegetable broth",
      "1 tsp dried thyme + 1 tsp dried sage",
      "3/4 cup raw cashews",
      "1 cup unsweetened plant milk",
      "Salt and pepper to taste"
    ],
    steps: [
      "Add wild rice, mushrooms, carrots, celery, onion, garlic, broth, and herbs to the crock pot.",
      "Cover and cook on LOW 7 hours until the rice is tender and splitting.",
      "Blend cashews with plant milk until perfectly smooth.",
      "Stir the cashew cream into the soup and warm through 15 minutes.",
      "Season generously and serve with crusty bread."
    ]
  },
  {
    id: "crockpot-french-onion-soup",
    category: "crockpot",
    title: "Slow Cooker French Onion Soup",
    time: "8–10 hrs low",
    servings: "6 servings",
    emoji: "🧅",
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=70",
    desc: "Onions caramelize unattended for hours, then simmer in a rich thyme broth. Top with toasted baguette and melty vegan cheese.",
    ingredients: [
      "6 large yellow onions, thinly sliced",
      "3 tbsp olive oil or vegan butter",
      "1 tbsp brown sugar",
      "6 cups vegetable broth",
      "1/4 cup dry white wine (optional)",
      "2 tbsp soy sauce",
      "1 tsp dried thyme + 2 bay leaves",
      "1 baguette, sliced and toasted",
      "Shredded vegan mozzarella, for topping"
    ],
    steps: [
      "Toss onions with oil and brown sugar in the crock pot; cook on LOW 8–10 hours (or overnight) until deeply golden.",
      "Add broth, wine, soy sauce, thyme, and bay leaves; cook on HIGH 1 more hour.",
      "Discard bay leaves and season with salt and pepper.",
      "Ladle into oven-safe bowls; top with toasted baguette and vegan cheese.",
      "Broil 2–3 minutes until bubbling, then serve immediately."
    ]
  },
  {
    id: "crockpot-moroccan-stew",
    category: "crockpot",
    title: "Moroccan Chickpea Tagine",
    time: "6–7 hrs low",
    servings: "6 servings",
    emoji: "🍋",
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=70",
    desc: "Chickpeas, carrots, and dried apricots stewed with warm spices and finished with lemon — tagine flavor, crock pot ease.",
    ingredients: [
      "2 cans (15 oz) chickpeas, drained",
      "3 carrots, cut into chunks + 1 onion, diced",
      "1 can (14 oz) diced tomatoes",
      "1/2 cup dried apricots, halved",
      "2 tsp ras el hanout (or 1 tsp each cumin and cinnamon)",
      "1 tsp turmeric + 1 tsp smoked paprika",
      "2 cups vegetable broth",
      "Juice and zest of 1 lemon",
      "Couscous and chopped mint, for serving"
    ],
    steps: [
      "Add chickpeas, carrots, onion, tomatoes, apricots, spices, and broth to the crock pot.",
      "Cover and cook on LOW 6–7 hours until the carrots are tender.",
      "Stir in lemon juice and zest, then season with salt.",
      "Let rest 10 minutes for the flavors to settle.",
      "Serve over couscous, scattered with fresh mint."
    ]
  },
  {
    id: "crockpot-irish-stew",
    category: "crockpot",
    title: "Hearty Mushroom & Stout Stew",
    time: "7–8 hrs low",
    servings: "6 servings",
    emoji: "🍺",
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=70",
    desc: "Portobellos, potatoes, and carrots braised in a rich vegan stout gravy — an Irish pub classic without the lamb.",
    ingredients: [
      "1 lb portobello mushrooms, cut into chunks",
      "1 1/2 lbs baby potatoes, halved",
      "4 carrots, cut into chunks",
      "1 onion, diced + 4 cloves garlic, minced",
      "1 cup vegan stout beer (or extra broth)",
      "3 cups vegetable broth + 3 tbsp tomato paste",
      "2 tbsp soy sauce + 1 tsp dried rosemary",
      "3 tbsp flour or cornstarch",
      "Fresh parsley, for serving"
    ],
    steps: [
      "Toss mushrooms and vegetables with flour in the crock pot.",
      "Whisk stout, broth, tomato paste, soy sauce, and rosemary; pour over the top.",
      "Cover and cook on LOW 7–8 hours until the gravy is thick and potatoes are tender.",
      "Season with salt and plenty of black pepper.",
      "Serve in deep bowls with parsley and crusty bread."
    ]
  },
  {
    id: "crockpot-veggie-stew",
    category: "crockpot",
    title: "Old-Fashioned Vegetable Stew",
    time: "7–8 hrs low",
    servings: "8 servings",
    emoji: "🥕",
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=70",
    desc: "Potatoes, carrots, peas, and pearl onions in a savory herbed gravy — every bit as comforting as grandma's, no beef required.",
    ingredients: [
      "1 1/2 lbs potatoes, cut into chunks",
      "4 carrots, thickly sliced",
      "1 cup frozen pearl onions",
      "8 oz cremini mushrooms, quartered",
      "4 cups vegetable broth + 3 tbsp tomato paste",
      "2 tbsp soy sauce + 1 tsp dried thyme + 1 bay leaf",
      "3 tbsp cornstarch mixed with 3 tbsp cold water",
      "1 cup frozen peas",
      "Salt and pepper to taste"
    ],
    steps: [
      "Add potatoes, carrots, pearl onions, mushrooms, broth, tomato paste, soy sauce, and herbs to the crock pot.",
      "Cover and cook on LOW 7–8 hours until vegetables are tender.",
      "Stir in the cornstarch slurry and peas; cook on HIGH 20 minutes until thickened.",
      "Discard the bay leaf and season well.",
      "Serve hot with biscuits or crusty bread."
    ]
  },
  {
    id: "crockpot-goulash",
    category: "crockpot",
    title: "Hungarian Mushroom Goulash",
    time: "6–7 hrs low",
    servings: "6 servings",
    emoji: "🥘",
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=70",
    desc: "A paprika-rich goulash of mushrooms, potatoes, and peppers, swirled with vegan sour cream over wide noodles.",
    ingredients: [
      "1 lb mixed mushrooms, cut into chunks",
      "1 lb potatoes, cubed",
      "2 red bell peppers, sliced + 1 onion, diced",
      "3 tbsp sweet Hungarian paprika",
      "1 tsp caraway seeds",
      "1 can (14 oz) diced tomatoes",
      "3 cups vegetable broth",
      "1/2 cup vegan sour cream",
      "Cooked wide noodles and fresh dill, for serving"
    ],
    steps: [
      "Add mushrooms, potatoes, peppers, onion, paprika, caraway, tomatoes, and broth to the crock pot.",
      "Cover and cook on LOW 6–7 hours until potatoes are tender.",
      "Stir in the vegan sour cream during the last 15 minutes.",
      "Season with salt and pepper.",
      "Serve over wide noodles, topped with fresh dill."
    ]
  },
  {
    id: "crockpot-gumbo",
    category: "crockpot",
    title: "Vegan Gumbo with Okra",
    time: "6 hrs low",
    servings: "6 servings",
    emoji: "🍲",
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=70",
    desc: "A Louisiana-style gumbo with okra, kidney beans, and the holy trinity of pepper, onion, and celery in a smoky Cajun broth.",
    ingredients: [
      "1/4 cup flour, toasted in a dry pan until nutty brown",
      "2 cans (15 oz) kidney beans, drained",
      "2 cups sliced okra (fresh or frozen)",
      "1 onion, 1 green bell pepper, 3 celery stalks, all diced",
      "4 cloves garlic, minced",
      "1 can (14 oz) diced tomatoes",
      "4 cups vegetable broth",
      "2 tbsp Cajun seasoning + 2 bay leaves",
      "Cooked rice and hot sauce, for serving"
    ],
    steps: [
      "Whisk the toasted flour into the broth until smooth, then pour into the crock pot.",
      "Add beans, okra, vegetables, garlic, tomatoes, Cajun seasoning, and bay leaves.",
      "Cover and cook on LOW 6 hours until thick and stew-like.",
      "Discard bay leaves and adjust the seasoning.",
      "Serve over rice with a few dashes of hot sauce."
    ]
  },
  {
    id: "crockpot-jambalaya",
    category: "crockpot",
    title: "Crock Pot Jambalaya",
    time: "4–5 hrs low",
    servings: "6 servings",
    emoji: "🍚",
    img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=70",
    desc: "Smoky vegan sausage, beans, and the Cajun trinity simmered with tomatoes; the rice cooks right in the pot at the end.",
    ingredients: [
      "2 vegan andouille-style sausages, sliced",
      "1 can (15 oz) red beans, drained",
      "1 onion, 1 green bell pepper, 2 celery stalks, all diced",
      "3 cloves garlic, minced",
      "1 can (14 oz) diced tomatoes",
      "3 cups vegetable broth",
      "2 tsp Cajun seasoning + 1/2 tsp dried thyme",
      "1 1/4 cups long-grain white rice",
      "Sliced scallions and hot sauce, for serving"
    ],
    steps: [
      "Add sausage, beans, vegetables, garlic, tomatoes, broth, and seasonings to the crock pot.",
      "Cover and cook on LOW 4–5 hours.",
      "Stir in the rice and cook on HIGH 45–60 minutes until tender, stirring once.",
      "Fluff with a fork and season to taste.",
      "Top with scallions and serve with hot sauce."
    ]
  },
  {
    id: "crockpot-dal",
    category: "crockpot",
    title: "Slow Cooker Red Lentil Dal",
    time: "5–6 hrs low",
    servings: "6 servings",
    emoji: "🍛",
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=70",
    desc: "Red lentils melt into a golden, gingery dal finished with a sizzling cumin-garlic tempering. Spoon over rice with warm naan.",
    ingredients: [
      "2 cups red lentils, rinsed",
      "1 onion, diced + 1 tbsp grated fresh ginger",
      "4 cloves garlic, minced (divided)",
      "1 can (14 oz) diced tomatoes",
      "2 tsp turmeric + 2 tsp garam masala",
      "6 cups water or vegetable broth",
      "2 tbsp coconut oil",
      "1 tsp cumin seeds + pinch red pepper flakes",
      "Juice of 1/2 lemon; rice and cilantro for serving"
    ],
    steps: [
      "Add lentils, onion, ginger, half the garlic, tomatoes, turmeric, garam masala, and water to the crock pot.",
      "Cover and cook on LOW 5–6 hours until the lentils are completely soft.",
      "Just before serving, sizzle cumin seeds, remaining garlic, and pepper flakes in hot coconut oil for 30 seconds.",
      "Pour the tempering over the dal and stir in lemon juice.",
      "Season with salt and serve over rice with cilantro."
    ]
  },
  {
    id: "crockpot-chana-masala",
    category: "crockpot",
    title: "Crock Pot Chana Masala",
    time: "6 hrs low",
    servings: "6 servings",
    emoji: "🍛",
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=70",
    desc: "Chickpeas slow-braised in a deeply spiced tomato-onion gravy with garam masala and a final hit of fresh lemon.",
    ingredients: [
      "2 cans (15 oz) chickpeas, drained",
      "1 large onion, finely diced",
      "4 cloves garlic, minced + 1 tbsp grated ginger",
      "1 can (28 oz) crushed tomatoes",
      "1 tbsp garam masala + 2 tsp ground coriander",
      "1 tsp cumin + 1/2 tsp cayenne",
      "1 cup vegetable broth",
      "Juice of 1/2 lemon",
      "Basmati rice and fresh cilantro, for serving"
    ],
    steps: [
      "Add chickpeas, onion, garlic, ginger, tomatoes, spices, and broth to the crock pot; stir well.",
      "Cover and cook on LOW 6 hours (or HIGH 3 hours).",
      "Mash a few chickpeas against the side to thicken the gravy.",
      "Stir in lemon juice and season with salt.",
      "Serve over basmati rice with plenty of cilantro."
    ]
  },
  {
    id: "crockpot-tikka-masala",
    category: "crockpot",
    title: "Cauliflower Tikka Masala",
    time: "4–5 hrs low",
    servings: "6 servings",
    emoji: "🥦",
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=70",
    desc: "Cauliflower and chickpeas in a creamy, tomato-coconut tikka sauce that tastes straight out of your favorite curry house.",
    ingredients: [
      "1 large head cauliflower, cut into florets",
      "1 can (15 oz) chickpeas, drained",
      "1 onion, diced + 4 cloves garlic, minced",
      "1 tbsp grated fresh ginger",
      "2 tbsp tikka masala spice blend (or garam masala + paprika)",
      "1 can (28 oz) crushed tomatoes",
      "1 can (14 oz) full-fat coconut milk",
      "1 tbsp maple syrup",
      "Basmati rice and cilantro, for serving"
    ],
    steps: [
      "Add cauliflower, chickpeas, onion, garlic, ginger, spices, and tomatoes to the crock pot.",
      "Cover and cook on LOW 4–5 hours until the cauliflower is tender but not mushy.",
      "Stir in coconut milk and maple syrup; warm through 15 minutes.",
      "Season with salt and a squeeze of lemon if you like.",
      "Serve over basmati rice with cilantro and warm naan."
    ]
  },
  {
    id: "crockpot-thai-curry",
    category: "crockpot",
    title: "Thai Red Curry with Tofu",
    time: "4 hrs low",
    servings: "4 servings",
    emoji: "🥥",
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=70",
    desc: "Tofu, bell peppers, and bamboo shoots in a fragrant red coconut curry with lime and basil. Gentle heat, big flavor.",
    ingredients: [
      "14 oz extra-firm tofu, pressed and cubed",
      "3 tbsp Thai red curry paste (check vegan)",
      "2 cans (14 oz) coconut milk",
      "2 red bell peppers, sliced",
      "1 can (8 oz) bamboo shoots, drained",
      "1 tbsp soy sauce + 1 tbsp maple syrup",
      "1 cup snap peas",
      "Juice of 1 lime + fresh Thai basil",
      "Jasmine rice, for serving"
    ],
    steps: [
      "Whisk curry paste into the coconut milk in the crock pot.",
      "Add tofu, bell peppers, bamboo shoots, soy sauce, and maple syrup.",
      "Cover and cook on LOW 4 hours.",
      "Stir in snap peas for the last 20 minutes.",
      "Finish with lime juice and basil; serve over jasmine rice."
    ]
  },
  {
    id: "crockpot-pinto-beans",
    category: "crockpot",
    title: "From-Scratch Pinto Beans",
    time: "8–9 hrs low",
    servings: "8 servings",
    emoji: "🫘",
    img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=900&q=70",
    desc: "Dried pintos simmer to creamy perfection with onion, garlic, and cumin — better, cheaper, and tastier than any can.",
    ingredients: [
      "1 lb dried pinto beans, rinsed and picked over",
      "1 onion, quartered",
      "5 cloves garlic, smashed",
      "1 jalapeño, halved",
      "2 tsp cumin + 1 tsp dried oregano",
      "1 bay leaf",
      "8 cups water or vegetable broth",
      "2 tsp salt (added at the end)",
      "Lime and cilantro, for serving"
    ],
    steps: [
      "Add beans, onion, garlic, jalapeño, spices, bay leaf, and water to the crock pot.",
      "Cover and cook on LOW 8–9 hours (or HIGH 5–6) until the beans are creamy.",
      "Discard the bay leaf and stir in the salt.",
      "Simmer uncovered on HIGH 20 minutes if you want a thicker pot liquor.",
      "Serve with lime and cilantro, or use in burritos and bowls all week."
    ]
  },
  {
    id: "crockpot-refried-beans",
    category: "crockpot",
    title: "Slow Cooker Refried Beans",
    time: "8 hrs low",
    servings: "8 servings",
    emoji: "🌯",
    img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=70",
    desc: "No-fry refried beans: pintos cook until collapsing, then get mashed silky with their own broth. Taco night staple, lard-free.",
    ingredients: [
      "1 lb dried pinto beans, rinsed",
      "1 onion, diced",
      "4 cloves garlic, minced",
      "1 jalapeño, seeded and diced",
      "2 tsp cumin + 1 tsp chili powder",
      "8 cups water",
      "2 tbsp olive oil",
      "2 tsp salt, plus more to taste",
      "Juice of 1/2 lime"
    ],
    steps: [
      "Add beans, onion, garlic, jalapeño, spices, and water to the crock pot.",
      "Cover and cook on LOW 8 hours until the beans crush easily.",
      "Drain, reserving 2 cups of the cooking liquid.",
      "Mash the beans with olive oil, salt, and enough liquid to reach a creamy consistency.",
      "Stir in lime juice and serve in tacos, burritos, or with chips."
    ]
  },
  {
    id: "crockpot-boston-baked-beans",
    category: "crockpot",
    title: "Maple Boston Baked Beans",
    time: "8–10 hrs low",
    servings: "8 servings",
    emoji: "🫘",
    img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=900&q=70",
    desc: "Navy beans in a sticky maple-molasses-mustard sauce with a whisper of smoke. The ultimate cookout side, no pork needed.",
    ingredients: [
      "1 lb dried navy beans, soaked overnight and drained",
      "1 onion, diced",
      "1/3 cup maple syrup + 1/4 cup molasses",
      "1/4 cup tomato paste",
      "2 tbsp Dijon mustard",
      "1 tbsp apple cider vinegar",
      "1 tsp smoked paprika + 1/2 tsp liquid smoke",
      "4 cups water",
      "Salt and black pepper to taste"
    ],
    steps: [
      "Add the soaked beans and all remaining ingredients except salt to the crock pot; stir.",
      "Cover and cook on LOW 8–10 hours until beans are tender and the sauce is glossy.",
      "Remove the lid and cook on HIGH 30 minutes to thicken if needed.",
      "Season with salt and pepper.",
      "Serve warm alongside grilled veggies and cornbread."
    ]
  },
  {
    id: "crockpot-marinara",
    category: "crockpot",
    title: "All-Day Marinara Sauce",
    time: "6–8 hrs low",
    servings: "8 cups",
    emoji: "🍝",
    img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=70",
    desc: "Tomatoes, garlic, and herbs mellow into a sweet, rich marinara while you go about your day. Freeze it in batches for instant pasta nights.",
    ingredients: [
      "2 cans (28 oz) crushed tomatoes",
      "1 can (6 oz) tomato paste",
      "1 onion, finely diced",
      "6 cloves garlic, minced",
      "2 tbsp olive oil",
      "2 tsp dried oregano + 1 tsp dried basil",
      "1 tsp sugar + pinch red pepper flakes",
      "1 bay leaf",
      "Large handful fresh basil, torn"
    ],
    steps: [
      "Add everything except fresh basil to the crock pot and stir well.",
      "Cover and cook on LOW 6–8 hours, stirring once if you're around.",
      "Discard the bay leaf and stir in fresh basil.",
      "Season with salt and pepper; blend partially for a smoother sauce.",
      "Toss with pasta or cool and freeze in 2-cup portions."
    ]
  },
  {
    id: "crockpot-lentil-ragu",
    category: "crockpot",
    title: "Lentil Bolognese-Style Ragu",
    time: "7 hrs low",
    servings: "6 servings",
    emoji: "🍝",
    img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=70",
    desc: "Brown lentils and finely chopped mushrooms slow-cook into a meaty, savory ragu that clings to tagliatelle like a true bolognese.",
    ingredients: [
      "1 1/2 cups brown lentils, rinsed",
      "8 oz cremini mushrooms, finely chopped",
      "1 onion, 2 carrots, 2 celery stalks, all finely diced",
      "4 cloves garlic, minced",
      "1 can (28 oz) crushed tomatoes + 3 tbsp tomato paste",
      "3 cups vegetable broth",
      "1/2 cup red wine (optional, vegan)",
      "2 tsp dried oregano + 1 bay leaf",
      "Cooked tagliatelle and vegan parmesan, for serving"
    ],
    steps: [
      "Add all ingredients except pasta to the crock pot and stir.",
      "Cover and cook on LOW 7 hours until the lentils are tender and the ragu is thick.",
      "Discard the bay leaf; season generously with salt and pepper.",
      "Cook uncovered on HIGH 20 minutes if you want it thicker.",
      "Toss with hot tagliatelle and shower with vegan parmesan."
    ]
  },
  {
    id: "crockpot-stroganoff",
    category: "crockpot",
    title: "Mushroom Stroganoff",
    time: "5–6 hrs low",
    servings: "5 servings",
    emoji: "🍄",
    img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=70",
    desc: "Meaty mushrooms in a tangy, creamy cashew-Dijon sauce, ladled over egg-free noodles. Old-world comfort, fully plant-based.",
    ingredients: [
      "1 1/2 lbs mixed mushrooms, thickly sliced",
      "1 onion, diced + 4 cloves garlic, minced",
      "2 cups vegetable broth",
      "2 tbsp soy sauce + 1 tbsp Dijon mustard",
      "1 tsp smoked paprika + 1 tsp dried thyme",
      "3/4 cup raw cashews",
      "1 tbsp lemon juice",
      "12 oz wide eggless noodles, cooked",
      "Fresh parsley, for serving"
    ],
    steps: [
      "Add mushrooms, onion, garlic, broth, soy sauce, Dijon, and spices to the crock pot.",
      "Cover and cook on LOW 5–6 hours.",
      "Blend cashews with 3/4 cup water and the lemon juice until silky; stir into the pot.",
      "Cook on HIGH 15 minutes until the sauce coats a spoon.",
      "Serve over noodles with cracked pepper and parsley."
    ]
  },
  {
    id: "crockpot-risotto",
    category: "crockpot",
    title: "No-Stir Mushroom Risotto",
    time: "2.5 hrs high",
    servings: "4 servings",
    emoji: "🍚",
    img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=70",
    desc: "Creamy arborio risotto with mushrooms and white wine — no standing at the stove stirring, the crock pot does it all.",
    ingredients: [
      "1 1/2 cups arborio rice",
      "10 oz cremini mushrooms, sliced",
      "1 onion, finely diced + 3 cloves garlic, minced",
      "1/2 cup dry white wine (vegan)",
      "4 1/2 cups warm vegetable broth",
      "2 tbsp olive oil",
      "1 tsp dried thyme",
      "3 tbsp nutritional yeast + 1 tbsp vegan butter",
      "Salt, pepper, and fresh parsley"
    ],
    steps: [
      "Stir rice, mushrooms, onion, garlic, oil, and thyme in the crock pot to coat the grains.",
      "Pour in wine and warm broth; cover and cook on HIGH 2–2.5 hours.",
      "Check at 2 hours — the rice should be creamy with a slight bite.",
      "Stir in nutritional yeast and vegan butter until glossy.",
      "Season and serve immediately with parsley."
    ]
  },
  {
    id: "crockpot-stuffed-peppers",
    category: "crockpot",
    title: "Slow Cooker Stuffed Peppers",
    time: "5–6 hrs low",
    servings: "4 servings",
    emoji: "🫑",
    img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=900&q=70",
    desc: "Bell peppers steam-bake upright in the crock pot, stuffed with a savory rice, black bean, and corn filling.",
    ingredients: [
      "4 large bell peppers, tops cut off and seeded",
      "1 1/2 cups cooked rice",
      "1 can (15 oz) black beans, drained",
      "1 cup corn",
      "1 cup salsa, plus 1/2 cup for the pot",
      "1 tsp cumin + 1 tsp chili powder + 1/2 tsp garlic powder",
      "1/2 cup shredded vegan cheese (optional)",
      "1/2 cup vegetable broth",
      "Cilantro and lime, for serving"
    ],
    steps: [
      "Mix rice, beans, corn, 1 cup salsa, and spices; spoon into the peppers.",
      "Pour broth and remaining salsa into the crock pot; stand the peppers upright inside.",
      "Cover and cook on LOW 5–6 hours until the peppers are tender.",
      "Top with vegan cheese for the last 15 minutes, lid on, to melt.",
      "Serve drizzled with the pot sauce, plus cilantro and lime."
    ]
  },
  {
    id: "crockpot-cabbage-rolls",
    category: "crockpot",
    title: "Lazy Cabbage Roll Casserole",
    time: "6 hrs low",
    servings: "6 servings",
    emoji: "🥬",
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=70",
    desc: "All the sweet-and-sour comfort of stuffed cabbage rolls — unrolled. Cabbage, rice, and lentils layer up in a tangy tomato sauce.",
    ingredients: [
      "1 small head green cabbage, chopped",
      "1 cup brown lentils, rinsed",
      "3/4 cup long-grain rice",
      "1 onion, diced + 3 cloves garlic, minced",
      "1 can (28 oz) crushed tomatoes",
      "2 tbsp tomato paste + 1 tbsp brown sugar",
      "1 tbsp apple cider vinegar",
      "3 cups vegetable broth",
      "1 tsp smoked paprika + 1 tsp dried dill"
    ],
    steps: [
      "Layer half the cabbage in the crock pot; top with lentils, rice, onion, and garlic.",
      "Whisk tomatoes, tomato paste, sugar, vinegar, broth, and spices; pour over everything.",
      "Add remaining cabbage on top and press down gently.",
      "Cover and cook on LOW 6 hours until rice and lentils are tender.",
      "Stir gently, season, and serve with vegan sour cream and dill."
    ]
  },
  {
    id: "crockpot-enchilada-casserole",
    category: "crockpot",
    title: "Stacked Enchilada Casserole",
    time: "4 hrs low",
    servings: "6 servings",
    emoji: "🌮",
    img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=70",
    desc: "Corn tortillas layered lasagna-style with beans, corn, enchilada sauce, and vegan cheese — set it and forget taco Tuesday.",
    ingredients: [
      "12 corn tortillas",
      "2 cans (15 oz) black beans, drained",
      "1 1/2 cups frozen corn",
      "3 cups red enchilada sauce (check vegan)",
      "1 can (4 oz) diced green chiles",
      "1 1/2 cups shredded vegan cheese",
      "1 tsp cumin",
      "1/2 red onion, diced",
      "Avocado and cilantro, for serving"
    ],
    steps: [
      "Mix beans, corn, green chiles, onion, and cumin in a bowl.",
      "Spread a little sauce in the crock pot, then layer tortillas, bean mixture, sauce, and cheese; repeat for 3 layers.",
      "Finish with tortillas, sauce, and a final layer of cheese.",
      "Cover and cook on LOW 4 hours until bubbling at the edges.",
      "Rest 15 minutes, then scoop and top with avocado and cilantro."
    ]
  },
  {
    id: "crockpot-mac-and-cheese",
    category: "crockpot",
    title: "Crock Pot Butternut Mac & Cheese",
    time: "3 hrs low",
    servings: "6 servings",
    emoji: "🧀",
    img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=70",
    desc: "Velvety dairy-free mac with a sauce of butternut squash, cashews, and nutritional yeast that cooks down right in the pot.",
    ingredients: [
      "4 cups cubed butternut squash",
      "3/4 cup raw cashews",
      "3 cups vegetable broth",
      "1/3 cup nutritional yeast",
      "1 tsp garlic powder + 1 tsp onion powder",
      "1 tsp Dijon mustard + 1/2 tsp smoked paprika",
      "1 lb elbow pasta, cooked al dente",
      "1 cup unsweetened plant milk",
      "Salt and toasted breadcrumbs, for serving"
    ],
    steps: [
      "Add squash, cashews, and broth to the crock pot; cook on LOW 3 hours until very soft.",
      "Blend the pot contents with nutritional yeast, seasonings, and plant milk until silky.",
      "Return the sauce to the crock pot and stir in the cooked pasta.",
      "Warm on LOW 15–20 minutes, loosening with plant milk if needed.",
      "Season and serve topped with toasted breadcrumbs."
    ]
  },
  {
    id: "crockpot-baked-potatoes",
    category: "crockpot",
    title: "Slow Cooker Baked Potatoes",
    time: "8 hrs low",
    servings: "6 potatoes",
    emoji: "🥔",
    img: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=900&q=70",
    desc: "Foil-wrapped russets emerge fluffy and steakhouse-perfect after a day in the crock pot. Build your own loaded-potato bar.",
    ingredients: [
      "6 medium russet potatoes, scrubbed",
      "2 tbsp olive oil",
      "2 tsp coarse salt",
      "Vegan butter and vegan sour cream, for topping",
      "1 cup vegan cheese shreds",
      "4 scallions, sliced",
      "1 can (15 oz) vegan chili (or leftover crock pot chili)",
      "Smoky coconut bacon bits",
      "Black pepper to taste"
    ],
    steps: [
      "Prick each potato with a fork, rub with oil and salt, and wrap in foil.",
      "Stack the potatoes in the crock pot — no liquid needed.",
      "Cover and cook on LOW 8 hours (or HIGH 4) until completely tender.",
      "Unwrap, split, and fluff the insides with a fork.",
      "Load up with chili, vegan cheese, sour cream, scallions, and coconut bacon."
    ]
  },
  {
    id: "crockpot-ratatouille",
    category: "crockpot",
    title: "Slow Cooker Ratatouille",
    time: "5–6 hrs low",
    servings: "6 servings",
    emoji: "🍆",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=70",
    desc: "Eggplant, zucchini, peppers, and tomatoes melt together with herbes de Provence into a rustic French vegetable stew.",
    ingredients: [
      "1 medium eggplant, cubed",
      "2 zucchini, sliced into half-moons",
      "2 bell peppers, chopped",
      "1 onion, sliced + 4 cloves garlic, minced",
      "1 can (28 oz) diced tomatoes",
      "3 tbsp tomato paste",
      "2 tbsp olive oil",
      "2 tsp herbes de Provence + 1 bay leaf",
      "Fresh basil and crusty bread, for serving"
    ],
    steps: [
      "Add all the vegetables, tomatoes, tomato paste, oil, and herbs to the crock pot; toss to coat.",
      "Cover and cook on LOW 5–6 hours until everything is silky but not mushy.",
      "Discard the bay leaf; season with salt and pepper.",
      "Let rest uncovered 10 minutes to concentrate the juices.",
      "Serve warm with torn basil and crusty bread, or over polenta."
    ]
  },
  {
    id: "crockpot-bbq-soy-curls",
    category: "crockpot",
    title: "Pulled BBQ Soy Curls",
    time: "4 hrs low",
    servings: "6 sandwiches",
    emoji: "🍖",
    img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=70",
    desc: "Soy curls soak up smoky-sweet BBQ sauce until impossibly tender and shreddy — high-protein pulled \"pork\" for sandwiches and bowls.",
    ingredients: [
      "8 oz soy curls (about 4 cups dry)",
      "2 cups vegetable broth, hot",
      "1 1/2 cups BBQ sauce",
      "1 onion, thinly sliced",
      "1 tbsp apple cider vinegar",
      "2 tsp smoked paprika + 1 tsp garlic powder",
      "1 tbsp maple syrup",
      "6 buns, toasted",
      "Pickles and slaw, for serving"
    ],
    steps: [
      "Soak soy curls in hot broth 10 minutes, then squeeze out the excess.",
      "Add soy curls and onion to the crock pot; stir in BBQ sauce, vinegar, spices, and maple syrup.",
      "Cover and cook on LOW 4 hours, stirring once halfway.",
      "Cook uncovered on HIGH 15 minutes to caramelize the sauce.",
      "Pile onto toasted buns with pickles and slaw."
    ]
  },
  {
    id: "crockpot-korean-tacos",
    category: "crockpot",
    title: "Korean BBQ Jackfruit Tacos",
    time: "4–5 hrs low",
    servings: "8 tacos",
    emoji: "🌮",
    img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=70",
    desc: "Jackfruit braised in a gochujang-soy-sesame sauce, shredded and tucked into tortillas with quick-pickled cucumbers.",
    ingredients: [
      "2 cans (20 oz) young green jackfruit in brine, drained",
      "3 tbsp gochujang (check vegan)",
      "1/4 cup soy sauce + 2 tbsp rice vinegar",
      "2 tbsp brown sugar + 1 tbsp toasted sesame oil",
      "4 cloves garlic, minced + 1 tbsp grated ginger",
      "1/2 cup vegetable broth",
      "8 small tortillas, warmed",
      "1 cucumber, thinly sliced and tossed with rice vinegar",
      "Sesame seeds and scallions, for serving"
    ],
    steps: [
      "Rinse jackfruit, trim the cores, and add to the crock pot.",
      "Whisk gochujang, soy sauce, vinegar, sugar, sesame oil, garlic, ginger, and broth; pour over the jackfruit.",
      "Cover and cook on LOW 4–5 hours, then shred with two forks.",
      "Cook uncovered on HIGH 20 minutes until the sauce clings.",
      "Fill tortillas and top with pickled cucumber, sesame seeds, and scallions."
    ]
  },
  {
    id: "crockpot-peanut-stew",
    category: "crockpot",
    title: "West African Peanut Stew",
    time: "6–7 hrs low",
    servings: "6 servings",
    emoji: "🥜",
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=70",
    desc: "Sweet potatoes and collards in a rich tomato-peanut broth with ginger and a kick of cayenne. Deep, nutty, unforgettable.",
    ingredients: [
      "2 large sweet potatoes, cubed",
      "1 onion, diced + 4 cloves garlic, minced",
      "2 tbsp grated fresh ginger",
      "1 can (14 oz) diced tomatoes",
      "2/3 cup natural peanut butter",
      "5 cups vegetable broth",
      "1 tsp cumin + 1/4–1/2 tsp cayenne",
      "1 bunch collard greens, stemmed and sliced",
      "Roasted peanuts and rice, for serving"
    ],
    steps: [
      "Whisk peanut butter into 1 cup of the broth until smooth; add to the crock pot with remaining broth.",
      "Add sweet potatoes, onion, garlic, ginger, tomatoes, and spices; stir.",
      "Cover and cook on LOW 6–7 hours until sweet potatoes are tender.",
      "Stir in collard greens for the last 30 minutes.",
      "Season, then serve over rice with crushed roasted peanuts."
    ]
  },
  {
    id: "crockpot-pozole",
    category: "crockpot",
    title: "Red Pozole with Mushrooms",
    time: "6 hrs low",
    servings: "6 servings",
    emoji: "🌽",
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=70",
    desc: "Chewy hominy and shredded oyster mushrooms in a brick-red guajillo-spiced broth, with all the crunchy classic toppings.",
    ingredients: [
      "2 cans (25 oz) hominy, drained",
      "1 lb oyster mushrooms, torn into strips",
      "1 onion, diced + 5 cloves garlic, minced",
      "3 tbsp mild red chile powder (guajillo or ancho)",
      "2 tsp dried oregano + 2 tsp cumin",
      "8 cups vegetable broth",
      "1 bay leaf",
      "Juice of 2 limes",
      "Shredded cabbage, radishes, and tostadas, for serving"
    ],
    steps: [
      "Add hominy, mushrooms, onion, garlic, chile powder, oregano, cumin, broth, and bay leaf to the crock pot.",
      "Cover and cook on LOW 6 hours (or HIGH 3 hours).",
      "Discard the bay leaf and stir in lime juice; season with salt.",
      "Ladle into deep bowls.",
      "Pile on shredded cabbage, radishes, and serve with crispy tostadas."
    ]
  },
  {
    id: "crockpot-barley-stew",
    category: "crockpot",
    title: "Mushroom Barley Stew",
    time: "7 hrs low",
    servings: "6 servings",
    emoji: "🍄",
    img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=70",
    desc: "Pearl barley turns plump and creamy alongside two kinds of mushrooms in a deeply savory herb broth.",
    ingredients: [
      "1 cup pearl barley, rinsed",
      "8 oz cremini mushrooms, sliced",
      "1/2 oz dried porcini mushrooms, chopped",
      "3 carrots, sliced + 2 celery stalks, sliced",
      "1 onion, diced + 4 cloves garlic, minced",
      "7 cups vegetable broth",
      "2 tbsp soy sauce + 1 tsp dried thyme + 1 bay leaf",
      "2 cups chopped kale",
      "Salt and black pepper to taste"
    ],
    steps: [
      "Add barley, both mushrooms, carrots, celery, onion, garlic, broth, soy sauce, and herbs to the crock pot.",
      "Cover and cook on LOW 7 hours until the barley is plump and tender.",
      "Stir in kale until wilted, about 10 minutes.",
      "Discard the bay leaf and season generously.",
      "Serve hot — it thickens as it sits, so loosen leftovers with broth."
    ]
  },
  {
    id: "crockpot-tuscan-bean-stew",
    category: "crockpot",
    title: "Tuscan White Bean & Kale Stew",
    time: "6 hrs low",
    servings: "6 servings",
    emoji: "🌿",
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=70",
    desc: "Creamy cannellini beans, tomatoes, rosemary, and lacinato kale in a garlicky broth — finish with good olive oil.",
    ingredients: [
      "3 cans (15 oz) cannellini beans, drained",
      "1 can (14 oz) diced tomatoes",
      "1 onion, diced + 5 cloves garlic, minced",
      "2 carrots, diced",
      "5 cups vegetable broth",
      "1 sprig fresh rosemary + 1 tsp dried oregano",
      "1 bunch lacinato kale, stemmed and chopped",
      "Pinch red pepper flakes",
      "Good olive oil and crusty bread, for serving"
    ],
    steps: [
      "Add beans, tomatoes, onion, garlic, carrots, broth, and herbs to the crock pot.",
      "Cover and cook on LOW 6 hours.",
      "Mash a cupful of beans against the side to thicken the broth.",
      "Stir in kale and pepper flakes for the last 20 minutes; discard the rosemary stem.",
      "Season, drizzle each bowl with olive oil, and serve with crusty bread."
    ]
  },
  {
    id: "crockpot-bourguignon",
    category: "crockpot",
    title: "Mushroom Bourguignon",
    time: "7 hrs low",
    servings: "6 servings",
    emoji: "🍷",
    img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=70",
    desc: "Portobellos and pearl onions braised in red wine with thyme — a luxurious French stew for mashed potatoes or noodles.",
    ingredients: [
      "1 1/2 lbs portobello and cremini mushrooms, in chunks",
      "1 1/2 cups frozen pearl onions",
      "3 carrots, cut into chunks",
      "4 cloves garlic, minced",
      "1 1/2 cups dry red wine (vegan)",
      "2 cups vegetable broth + 3 tbsp tomato paste",
      "2 tbsp soy sauce + 1 tsp dried thyme + 1 bay leaf",
      "3 tbsp cornstarch mixed with 3 tbsp cold water",
      "Mashed potatoes and parsley, for serving"
    ],
    steps: [
      "Add mushrooms, pearl onions, carrots, garlic, wine, broth, tomato paste, soy sauce, and herbs to the crock pot.",
      "Cover and cook on LOW 7 hours.",
      "Stir in the cornstarch slurry; cook on HIGH 20 minutes until the sauce is glossy.",
      "Discard the bay leaf and season well.",
      "Serve over mashed potatoes with chopped parsley."
    ]
  },
  {
    id: "crockpot-applesauce",
    category: "crockpot",
    title: "Cinnamon Crock Pot Applesauce",
    time: "6 hrs low",
    servings: "6 cups",
    emoji: "🍎",
    img: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=900&q=70",
    desc: "Apples collapse into fragrant cinnamon applesauce all on their own — your house will smell like a fall festival.",
    ingredients: [
      "5 lbs mixed apples, peeled and chopped",
      "1/3 cup water or apple cider",
      "Juice of 1/2 lemon",
      "2 tsp ground cinnamon",
      "1/4 tsp ground nutmeg",
      "Pinch of salt",
      "2–3 tbsp maple syrup (optional, to taste)"
    ],
    steps: [
      "Add apples, water, lemon juice, spices, and salt to the crock pot.",
      "Cover and cook on LOW 6 hours, stirring once or twice if you're around.",
      "Mash for chunky sauce, or blend for smooth.",
      "Sweeten with maple syrup only if the apples need it.",
      "Serve warm, or cool and refrigerate up to a week."
    ]
  },
  {
    id: "crockpot-steel-cut-oats",
    category: "crockpot",
    title: "Overnight Apple Pie Steel-Cut Oats",
    time: "7–8 hrs low",
    servings: "6 servings",
    emoji: "🥣",
    img: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=900&q=70",
    desc: "Wake up to creamy steel-cut oats studded with cinnamon apples — breakfast cooks itself while you sleep.",
    ingredients: [
      "1 1/2 cups steel-cut oats (not rolled)",
      "2 apples, peeled and diced",
      "4 cups water + 2 cups almond milk",
      "1/4 cup maple syrup",
      "2 tsp cinnamon + 1/4 tsp nutmeg",
      "1 tsp vanilla extract",
      "Pinch of salt",
      "Chopped pecans and extra almond milk, for serving"
    ],
    steps: [
      "Lightly oil the crock pot insert to prevent sticking.",
      "Add oats, apples, water, almond milk, maple syrup, spices, vanilla, and salt; stir.",
      "Cover and cook on LOW 7–8 hours overnight.",
      "Stir well in the morning, loosening with extra almond milk.",
      "Serve topped with pecans and a drizzle of maple syrup."
    ]
  },
  {
    id: "crockpot-lasagna-soup",
    category: "crockpot",
    title: "Lasagna Soup with Cashew Ricotta",
    time: "5–6 hrs low",
    servings: "6 servings",
    emoji: "🍝",
    img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=70",
    desc: "All the layers of lasagna in ladle form — broken noodles, herby tomato broth, lentils, and dollops of lemony cashew ricotta.",
    ingredients: [
      "1 cup brown lentils, rinsed",
      "1 can (28 oz) crushed tomatoes + 3 tbsp tomato paste",
      "1 onion, diced + 4 cloves garlic, minced",
      "6 cups vegetable broth",
      "2 tsp Italian seasoning + pinch red pepper flakes",
      "8 lasagna noodles, broken into pieces",
      "1 cup raw cashews, soaked",
      "Juice of 1/2 lemon + 2 tbsp nutritional yeast",
      "Fresh basil, for serving"
    ],
    steps: [
      "Add lentils, tomatoes, tomato paste, onion, garlic, broth, and seasonings to the crock pot.",
      "Cover and cook on LOW 5–6 hours until lentils are tender.",
      "Stir in broken noodles; cook on HIGH 25–30 minutes until al dente.",
      "Blend cashews with lemon juice, nutritional yeast, 1/2 cup water, and salt into a ricotta.",
      "Ladle the soup into bowls and finish with ricotta dollops and basil."
    ]
  },
  {
    id: "crockpot-moroccan-lentils",
    category: "crockpot",
    title: "Harissa Braised Lentils & Squash",
    time: "6 hrs low",
    servings: "6 servings",
    emoji: "🌶️",
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=70",
    desc: "Green lentils and butternut squash braised with harissa, cumin, and tomato, finished with mint and a lemony tahini drizzle.",
    ingredients: [
      "1 1/2 cups green lentils, rinsed",
      "3 cups cubed butternut squash",
      "1 onion, diced + 4 cloves garlic, minced",
      "2 tbsp harissa paste",
      "2 tsp cumin + 1 tsp coriander",
      "1 can (14 oz) diced tomatoes",
      "4 cups vegetable broth",
      "3 tbsp tahini + juice of 1 lemon",
      "Fresh mint, for serving"
    ],
    steps: [
      "Add lentils, squash, onion, garlic, harissa, spices, tomatoes, and broth to the crock pot.",
      "Cover and cook on LOW 6 hours until lentils and squash are tender.",
      "Whisk tahini with lemon juice and 3 tbsp water into a drizzle.",
      "Season the lentils with salt.",
      "Serve drizzled with lemon-tahini and scattered with mint."
    ]
  }
];
