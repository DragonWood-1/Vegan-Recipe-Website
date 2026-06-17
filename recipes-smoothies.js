// Smoothies — drinkable vegan blends. Tagged "smoothie" so they power smoothie.html.
const RECIPES_SMOOTHIES = [
  {
    id: "green-power-smoothie",
    category: "smoothie",
    title: "Green Power Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🥬",
    img: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=900&q=70",
    desc: "Spinach, banana, and pineapple blitzed into a bright, naturally sweet green smoothie you'd never guess was loaded with greens.",
    ingredients: [
      "2 cups fresh spinach",
      "1 frozen banana",
      "1 cup frozen pineapple",
      "1/2 green apple, cored",
      "1 tbsp chia seeds",
      "1 cup almond milk",
      "1/2 cup cold water or coconut water"
    ],
    steps: [
      "Add the almond milk, water, and spinach to a blender and blend until smooth.",
      "Add banana, pineapple, apple, and chia seeds.",
      "Blend on high 45–60 seconds until completely creamy.",
      "Pour into glasses and serve immediately."
    ]
  },
  {
    id: "berry-blast-smoothie",
    category: "smoothie",
    title: "Triple Berry Blast Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🫐",
    img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=70",
    desc: "A thick, antioxidant-packed blend of strawberries, blueberries, and raspberries with a creamy banana base.",
    ingredients: [
      "1 cup frozen strawberries",
      "1/2 cup frozen blueberries",
      "1/2 cup frozen raspberries",
      "1 frozen banana",
      "1 tbsp ground flaxseed",
      "1 cup oat milk",
      "1/2 cup water"
    ],
    steps: [
      "Combine oat milk and water in the blender first.",
      "Add the frozen berries, banana, and flaxseed.",
      "Blend until thick and smooth, scraping down as needed.",
      "Serve right away in chilled glasses."
    ]
  },
  {
    id: "peanut-butter-banana-smoothie",
    category: "smoothie",
    title: "Peanut Butter Banana Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🍌",
    img: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=900&q=70",
    desc: "Creamy, milkshake-thick, and packed with plant protein — tastes like a peanut butter banana shake for breakfast.",
    ingredients: [
      "2 frozen bananas",
      "2 tbsp natural peanut butter",
      "1 tbsp cocoa powder (optional)",
      "1 medjool date, pitted",
      "1 1/4 cups soy milk",
      "1/2 tsp vanilla extract",
      "Pinch of cinnamon"
    ],
    steps: [
      "Add soy milk to the blender, then the bananas, peanut butter, date, vanilla, and cinnamon.",
      "Blend on high until thick and creamy.",
      "Add cocoa powder for a chocolate version, if using, and blend again.",
      "Pour and enjoy immediately."
    ]
  },
  {
    id: "mango-turmeric-smoothie",
    category: "smoothie",
    title: "Mango Turmeric Sunrise Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🥭",
    img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=900&q=70",
    desc: "Tropical mango and orange brightened with anti-inflammatory turmeric and ginger for a glowing golden glass.",
    ingredients: [
      "1 1/2 cups frozen mango chunks",
      "1 orange, peeled",
      "1/2 tsp ground turmeric",
      "1/2 tsp grated fresh ginger",
      "1 frozen banana",
      "1 cup coconut milk beverage",
      "Squeeze of lime"
    ],
    steps: [
      "Add coconut milk and orange to the blender and blend smooth.",
      "Add mango, banana, turmeric, and ginger.",
      "Blend until creamy and bright gold.",
      "Finish with a squeeze of lime and serve."
    ]
  },
  {
    id: "chocolate-cherry-smoothie",
    category: "smoothie",
    title: "Chocolate Cherry Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🍒",
    img: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&w=900&q=70",
    desc: "Dark cherries and cocoa make this taste like dessert, while hemp seeds and oats keep you full for hours.",
    ingredients: [
      "1 1/2 cups frozen dark cherries",
      "2 tbsp cocoa powder",
      "2 tbsp rolled oats",
      "1 tbsp hemp seeds",
      "1 frozen banana",
      "1 1/4 cups almond milk",
      "1 tsp maple syrup (optional)"
    ],
    steps: [
      "Blend almond milk and oats first until the oats break down.",
      "Add cherries, banana, cocoa, and hemp seeds.",
      "Blend until rich and smooth.",
      "Taste, sweeten with maple syrup if needed, and serve."
    ]
  },
  {
    id: "tropical-green-smoothie",
    category: "smoothie",
    title: "Tropical Mango-Kale Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🌴",
    img: "https://images.unsplash.com/photo-1638176067000-9e2a5a8a8b2e?auto=format&fit=crop&w=900&q=70",
    desc: "Kale disappears into a creamy tropical blend of mango, pineapple, and coconut — a vacation in a glass.",
    ingredients: [
      "1 cup chopped kale, stems removed",
      "1 cup frozen mango",
      "1/2 cup frozen pineapple",
      "1/2 avocado",
      "1 tbsp shredded coconut",
      "1 cup coconut water",
      "1/2 cup almond milk"
    ],
    steps: [
      "Blend coconut water, almond milk, and kale until no flecks remain.",
      "Add mango, pineapple, avocado, and coconut.",
      "Blend on high until silky and thick.",
      "Pour into glasses and serve cold."
    ]
  },
  {
    id: "strawberry-banana-smoothie",
    category: "smoothie",
    title: "Classic Strawberry Banana Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🍓",
    img: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=900&q=70",
    desc: "The timeless favorite, made dairy-free and ultra creamy with frozen fruit and a splash of vanilla.",
    ingredients: [
      "1 1/2 cups frozen strawberries",
      "2 frozen bananas",
      "1 tbsp almond butter",
      "1/2 tsp vanilla extract",
      "1 1/4 cups oat milk",
      "1 tsp maple syrup (optional)"
    ],
    steps: [
      "Add oat milk to the blender, then strawberries, bananas, almond butter, and vanilla.",
      "Blend until thick and smooth.",
      "Adjust thickness with a splash more oat milk if needed.",
      "Serve immediately."
    ]
  },
  {
    id: "blueberry-oat-smoothie",
    category: "smoothie",
    title: "Blueberry Oatmeal Breakfast Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🥣",
    img: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=900&q=70",
    desc: "Like a bowl of blueberry oatmeal you can drink — hearty rolled oats and flax make it a full breakfast.",
    ingredients: [
      "1 1/2 cups frozen blueberries",
      "1/3 cup rolled oats",
      "1 tbsp ground flaxseed",
      "1 frozen banana",
      "1/2 tsp cinnamon",
      "1 1/4 cups soy milk",
      "1 tsp maple syrup"
    ],
    steps: [
      "Blend soy milk and oats until smooth and thickened.",
      "Add blueberries, banana, flaxseed, and cinnamon.",
      "Blend on high until creamy.",
      "Sweeten with maple syrup to taste and serve."
    ]
  },
  {
    id: "pina-colada-smoothie",
    category: "smoothie",
    title: "Piña Colada Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🍍",
    img: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=70",
    desc: "Pineapple and coconut blended into a frosty, naturally sweet mocktail-style smoothie.",
    ingredients: [
      "2 cups frozen pineapple",
      "1/2 cup full-fat coconut milk",
      "1 frozen banana",
      "2 tbsp shredded coconut",
      "1 cup coconut water",
      "Squeeze of lime"
    ],
    steps: [
      "Add coconut water and coconut milk to the blender.",
      "Add pineapple, banana, and shredded coconut.",
      "Blend until frosty and smooth.",
      "Finish with lime and serve in chilled glasses."
    ]
  },
  {
    id: "chocolate-protein-smoothie",
    category: "smoothie",
    title: "Chocolate Peanut Protein Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "💪",
    img: "https://images.unsplash.com/photo-1594488541269-abe0d7cd3a64?auto=format&fit=crop&w=900&q=70",
    desc: "A post-workout favorite with soy milk, peanut butter, and cocoa for serious plant protein and rich chocolate flavor.",
    ingredients: [
      "2 frozen bananas",
      "2 tbsp peanut butter",
      "2 tbsp cocoa powder",
      "2 tbsp hemp seeds",
      "1 tbsp ground flaxseed",
      "1 1/2 cups soy milk",
      "2 medjool dates, pitted"
    ],
    steps: [
      "Blend soy milk and dates until no chunks remain.",
      "Add bananas, peanut butter, cocoa, hemp, and flax.",
      "Blend on high until thick and creamy.",
      "Pour and drink right after blending."
    ]
  },
  {
    id: "matcha-pear-smoothie",
    category: "smoothie",
    title: "Matcha Pear Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🍵",
    img: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=900&q=70",
    desc: "Earthy ceremonial matcha meets sweet ripe pear and banana for a gently energizing green glass.",
    ingredients: [
      "1 ripe pear, cored",
      "1 frozen banana",
      "1 tsp matcha powder",
      "1/2 cup baby spinach",
      "1 tbsp cashew butter",
      "1 1/4 cups almond milk",
      "1 tsp maple syrup"
    ],
    steps: [
      "Whisk matcha into a splash of the almond milk to dissolve any clumps.",
      "Add remaining milk, spinach, pear, banana, and cashew butter to the blender.",
      "Pour in the matcha mixture and blend until silky.",
      "Sweeten with maple syrup and serve cold."
    ]
  },
  {
    id: "iced-mocha-smoothie",
    category: "smoothie",
    title: "Iced Mocha Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "☕",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=70",
    desc: "Cold brew and cocoa whirled with frozen banana for a chocolatey coffeehouse pick-me-up in a glass.",
    ingredients: [
      "3/4 cup cold brew coffee",
      "2 frozen bananas",
      "2 tbsp cocoa powder",
      "1 tbsp almond butter",
      "1 medjool date, pitted",
      "3/4 cup oat milk",
      "Handful of ice"
    ],
    steps: [
      "Pour cold brew and oat milk into the blender.",
      "Add bananas, cocoa, almond butter, date, and ice.",
      "Blend on high until frothy and smooth.",
      "Pour over a little extra ice and serve."
    ]
  },
  {
    id: "pumpkin-spice-smoothie",
    category: "smoothie",
    title: "Pumpkin Spice Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🎃",
    img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=900&q=70",
    desc: "All the cozy flavors of fall — real pumpkin, warm spices, and maple — blended into a creamy autumn treat.",
    ingredients: [
      "3/4 cup pure pumpkin puree",
      "2 frozen bananas",
      "1/2 tsp pumpkin pie spice",
      "1 tbsp almond butter",
      "1 tbsp maple syrup",
      "1 1/4 cups almond milk",
      "1/3 cup rolled oats"
    ],
    steps: [
      "Blend almond milk and oats until thickened.",
      "Add pumpkin, bananas, almond butter, spice, and maple syrup.",
      "Blend on high until smooth and creamy.",
      "Dust with extra spice and serve."
    ]
  },
  {
    id: "apple-cinnamon-smoothie",
    category: "smoothie",
    title: "Apple Cinnamon Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🍎",
    img: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=900&q=70",
    desc: "Tastes like apple pie in a glass with sweet apples, cinnamon, and a hearty oat base.",
    ingredients: [
      "2 sweet apples, cored and chopped",
      "1 frozen banana",
      "1/2 tsp cinnamon",
      "1/3 cup rolled oats",
      "1 tbsp ground flaxseed",
      "1 1/4 cups oat milk",
      "1 medjool date, pitted"
    ],
    steps: [
      "Blend oat milk, oats, and date until smooth.",
      "Add apples, banana, cinnamon, and flaxseed.",
      "Blend on high until creamy.",
      "Pour into glasses and dust with cinnamon."
    ]
  },
  {
    id: "beet-berry-smoothie",
    category: "smoothie",
    title: "Beet Berry Recovery Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🫛",
    img: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=900&q=70",
    desc: "Earthy roasted beet meets sweet berries for a vibrant ruby smoothie that's great after a workout.",
    ingredients: [
      "1 small cooked beet, chopped",
      "1 cup frozen mixed berries",
      "1 frozen banana",
      "1 tbsp chia seeds",
      "1 tsp grated ginger",
      "1 cup almond milk",
      "1/2 cup pomegranate juice"
    ],
    steps: [
      "Add almond milk, pomegranate juice, and beet to the blender.",
      "Blend until the beet is fully broken down.",
      "Add berries, banana, chia, and ginger.",
      "Blend until smooth and serve cold."
    ]
  },
  {
    id: "carrot-cake-smoothie",
    category: "smoothie",
    title: "Carrot Cake Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🥕",
    img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=900&q=70",
    desc: "Sweet carrots, warm spices, and walnuts blended into a dessert-like glass that drinks like carrot cake.",
    ingredients: [
      "1 cup chopped carrots",
      "2 frozen bananas",
      "1/2 tsp cinnamon",
      "1/4 tsp nutmeg",
      "2 tbsp walnuts",
      "1/3 cup rolled oats",
      "1 1/4 cups almond milk"
    ],
    steps: [
      "Blend almond milk, carrots, oats, and walnuts until smooth.",
      "Add bananas, cinnamon, and nutmeg.",
      "Blend on high until creamy and thick.",
      "Top with a sprinkle of cinnamon and serve."
    ]
  },
  {
    id: "avocado-lime-smoothie",
    category: "smoothie",
    title: "Creamy Avocado Lime Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🥑",
    img: "https://images.unsplash.com/photo-1638176067000-9e2a5a8a8b2e?auto=format&fit=crop&w=900&q=70",
    desc: "Velvety avocado and zesty lime make an ultra-creamy, lightly sweet green smoothie packed with good fats.",
    ingredients: [
      "1 ripe avocado",
      "1 frozen banana",
      "Juice of 1 lime",
      "1 cup baby spinach",
      "2 tbsp agave or maple syrup",
      "1 1/4 cups coconut milk beverage",
      "Handful of ice"
    ],
    steps: [
      "Add coconut milk and spinach to the blender and blend smooth.",
      "Add avocado, banana, lime juice, sweetener, and ice.",
      "Blend on high until silky and thick.",
      "Pour and serve immediately."
    ]
  },
  {
    id: "acai-berry-smoothie",
    category: "smoothie",
    title: "Açaí Berry Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🫐",
    img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=70",
    desc: "Antioxidant-rich açaí blended with mixed berries and banana into a deep purple, drinkable treat.",
    ingredients: [
      "1 frozen açaí packet (100 g)",
      "1 cup frozen mixed berries",
      "1 frozen banana",
      "1 tbsp almond butter",
      "1 cup apple juice",
      "1/2 cup almond milk"
    ],
    steps: [
      "Run the açaí packet under warm water to loosen, then break into the blender.",
      "Add apple juice and almond milk first.",
      "Add berries, banana, and almond butter.",
      "Blend until smooth and drinkably thick, then serve."
    ]
  },
  {
    id: "dragon-fruit-smoothie",
    category: "smoothie",
    title: "Pink Dragon Fruit Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🐉",
    img: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=900&q=70",
    desc: "Vibrant magenta pitaya blended with mango and coconut water for a refreshing tropical glass.",
    ingredients: [
      "1 cup frozen dragon fruit (pitaya)",
      "1 cup frozen mango",
      "1 frozen banana",
      "1 tbsp lime juice",
      "1 cup coconut water",
      "1/2 cup coconut milk beverage"
    ],
    steps: [
      "Add coconut water and coconut milk to the blender.",
      "Add dragon fruit, mango, banana, and lime juice.",
      "Blend on high until smooth and bright pink.",
      "Pour into glasses and serve cold."
    ]
  },
  {
    id: "watermelon-mint-smoothie",
    category: "smoothie",
    title: "Watermelon Mint Cooler Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🍉",
    img: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=70",
    desc: "Pure summer refreshment — juicy watermelon, lime, and fresh mint blended frosty cold.",
    ingredients: [
      "3 cups cubed frozen watermelon",
      "Juice of 1 lime",
      "8 fresh mint leaves",
      "1/2 cup strawberries",
      "1/2 cup coconut water",
      "1 tsp agave (optional)"
    ],
    steps: [
      "Add coconut water and mint to the blender.",
      "Add watermelon, strawberries, and lime juice.",
      "Blend until frosty and smooth.",
      "Taste, sweeten if needed, and serve immediately."
    ]
  },
  {
    id: "peach-ginger-smoothie",
    category: "smoothie",
    title: "Peach Ginger Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🍑",
    img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=900&q=70",
    desc: "Sweet summer peaches with a warming kick of fresh ginger and a creamy banana base.",
    ingredients: [
      "2 cups frozen peach slices",
      "1 frozen banana",
      "1 tsp grated fresh ginger",
      "1 tbsp ground flaxseed",
      "1 1/4 cups oat milk",
      "1 tsp maple syrup",
      "Squeeze of lemon"
    ],
    steps: [
      "Add oat milk and ginger to the blender.",
      "Add peaches, banana, and flaxseed.",
      "Blend on high until creamy and smooth.",
      "Finish with lemon and maple syrup, then serve."
    ]
  },
  {
    id: "raspberry-coconut-smoothie",
    category: "smoothie",
    title: "Raspberry Coconut Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🍇",
    img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=70",
    desc: "Tart raspberries balanced by rich coconut milk for a creamy, dreamy pink smoothie.",
    ingredients: [
      "1 1/2 cups frozen raspberries",
      "1 frozen banana",
      "1/2 cup full-fat coconut milk",
      "2 tbsp shredded coconut",
      "1 cup almond milk",
      "1 tsp maple syrup"
    ],
    steps: [
      "Pour almond milk and coconut milk into the blender.",
      "Add raspberries, banana, and shredded coconut.",
      "Blend until smooth and creamy.",
      "Sweeten to taste and serve cold."
    ]
  },
  {
    id: "kiwi-spinach-smoothie",
    category: "smoothie",
    title: "Kiwi Spinach Green Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🥝",
    img: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=900&q=70",
    desc: "Tangy kiwi and sweet pineapple keep this spinach smoothie bright, zippy, and refreshing.",
    ingredients: [
      "2 ripe kiwis, peeled",
      "1 cup frozen pineapple",
      "2 cups fresh spinach",
      "1 frozen banana",
      "1 tbsp chia seeds",
      "1 cup coconut water",
      "1/2 cup almond milk"
    ],
    steps: [
      "Blend coconut water, almond milk, and spinach until smooth.",
      "Add kiwis, pineapple, banana, and chia seeds.",
      "Blend on high until creamy and green.",
      "Pour and serve right away."
    ]
  },
  {
    id: "vanilla-date-smoothie",
    category: "smoothie",
    title: "Vanilla Date Shake Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🌟",
    img: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=900&q=70",
    desc: "Caramel-sweet medjool dates and real vanilla blended into a thick dairy-free shake-style smoothie.",
    ingredients: [
      "4 medjool dates, pitted",
      "2 frozen bananas",
      "1 tsp vanilla extract",
      "2 tbsp cashew butter",
      "1 1/2 cups soy milk",
      "Pinch of cinnamon",
      "Handful of ice"
    ],
    steps: [
      "Soak dates in warm water 5 minutes if firm, then drain.",
      "Blend soy milk and dates until completely smooth.",
      "Add bananas, vanilla, cashew butter, cinnamon, and ice.",
      "Blend until thick and creamy, then serve."
    ]
  },
  {
    id: "orange-creamsicle-smoothie",
    category: "smoothie",
    title: "Orange Creamsicle Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🍊",
    img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=900&q=70",
    desc: "Bright citrus and vanilla blended into a nostalgic creamy orange treat the whole family loves.",
    ingredients: [
      "2 oranges, peeled",
      "1 frozen banana",
      "1/2 tsp vanilla extract",
      "1/2 cup vanilla coconut yogurt",
      "1 cup almond milk",
      "Handful of ice"
    ],
    steps: [
      "Add almond milk and oranges to the blender and blend smooth.",
      "Add banana, vanilla, coconut yogurt, and ice.",
      "Blend on high until creamy and frothy.",
      "Pour into glasses and serve immediately."
    ]
  },
  {
    id: "cucumber-detox-smoothie",
    category: "smoothie",
    title: "Cucumber Detox Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🥒",
    img: "https://images.unsplash.com/photo-1638176067000-9e2a5a8a8b2e?auto=format&fit=crop&w=900&q=70",
    desc: "Hydrating cucumber, green apple, and lemon make a light, cleansing smoothie that feels like a fresh start.",
    ingredients: [
      "1/2 cucumber, chopped",
      "1 green apple, cored",
      "2 cups fresh spinach",
      "Juice of 1/2 lemon",
      "1/2 tsp grated ginger",
      "1 frozen banana",
      "1 cup cold water"
    ],
    steps: [
      "Blend water, spinach, and cucumber until smooth.",
      "Add apple, banana, lemon juice, and ginger.",
      "Blend on high until light and green.",
      "Serve over ice for an extra-refreshing cleanse."
    ]
  },
  {
    id: "almond-joy-smoothie",
    category: "smoothie",
    title: "Almond Joy Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🍫",
    img: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&w=900&q=70",
    desc: "Chocolate, coconut, and almond come together to taste exactly like the candy bar — without the dairy.",
    ingredients: [
      "2 frozen bananas",
      "2 tbsp cocoa powder",
      "2 tbsp almond butter",
      "2 tbsp shredded coconut",
      "1/2 cup coconut milk",
      "1 cup almond milk",
      "1 medjool date, pitted"
    ],
    steps: [
      "Blend almond milk, coconut milk, and date until smooth.",
      "Add bananas, cocoa, almond butter, and shredded coconut.",
      "Blend on high until rich and creamy.",
      "Top with extra coconut and serve."
    ]
  },
  {
    id: "blackberry-sage-smoothie",
    category: "smoothie",
    title: "Blackberry Sage Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🫐",
    img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=70",
    desc: "Deep, jammy blackberries with a whisper of fresh sage for a sophisticated berry blend.",
    ingredients: [
      "1 1/2 cups frozen blackberries",
      "1 frozen banana",
      "4 fresh sage leaves",
      "1 tbsp hemp seeds",
      "1 cup oat milk",
      "1/2 cup coconut water",
      "1 tsp maple syrup"
    ],
    steps: [
      "Add oat milk, coconut water, and sage to the blender.",
      "Add blackberries, banana, and hemp seeds.",
      "Blend on high until smooth and deep purple.",
      "Sweeten to taste and serve cold."
    ]
  },
  {
    id: "ginger-pear-green-smoothie",
    category: "smoothie",
    title: "Ginger Pear Green Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🍐",
    img: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=900&q=70",
    desc: "Juicy pear and zingy ginger lift a leafy green base into something crisp and energizing.",
    ingredients: [
      "2 ripe pears, cored",
      "2 cups fresh spinach",
      "1 tsp grated fresh ginger",
      "1 frozen banana",
      "1 tbsp chia seeds",
      "1 cup coconut water",
      "1/2 cup almond milk"
    ],
    steps: [
      "Blend coconut water, almond milk, and spinach until smooth.",
      "Add pears, banana, ginger, and chia.",
      "Blend on high until creamy.",
      "Pour into glasses and serve."
    ]
  },
  {
    id: "cherry-almond-smoothie",
    category: "smoothie",
    title: "Cherry Almond Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🍒",
    img: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&w=900&q=70",
    desc: "Sweet dark cherries and nutty almond come together in a smooth, dessert-like glass.",
    ingredients: [
      "1 1/2 cups frozen dark cherries",
      "1 frozen banana",
      "2 tbsp almond butter",
      "1/4 tsp almond extract",
      "1 1/4 cups almond milk",
      "1 tsp maple syrup"
    ],
    steps: [
      "Add almond milk to the blender.",
      "Add cherries, banana, almond butter, and almond extract.",
      "Blend on high until smooth and creamy.",
      "Sweeten with maple syrup and serve."
    ]
  },
  {
    id: "mango-coconut-smoothie",
    category: "smoothie",
    title: "Mango Coconut Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🥭",
    img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=900&q=70",
    desc: "Lush ripe mango and creamy coconut blended into a tropical glass that drinks like sunshine.",
    ingredients: [
      "2 cups frozen mango chunks",
      "1/2 cup full-fat coconut milk",
      "1 frozen banana",
      "1 tbsp lime juice",
      "1 cup coconut water",
      "2 tbsp shredded coconut"
    ],
    steps: [
      "Add coconut water and coconut milk to the blender.",
      "Add mango, banana, lime juice, and shredded coconut.",
      "Blend on high until smooth and frosty.",
      "Pour and serve immediately."
    ]
  },
  {
    id: "banana-bread-smoothie",
    category: "smoothie",
    title: "Banana Bread Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🍞",
    img: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=900&q=70",
    desc: "Warm cinnamon, walnuts, and oats make this taste just like a slice of fresh banana bread.",
    ingredients: [
      "3 frozen bananas",
      "1/3 cup rolled oats",
      "2 tbsp walnuts",
      "1/2 tsp cinnamon",
      "1/2 tsp vanilla extract",
      "1 1/4 cups oat milk",
      "1 medjool date, pitted"
    ],
    steps: [
      "Blend oat milk, oats, walnuts, and date until smooth.",
      "Add bananas, cinnamon, and vanilla.",
      "Blend on high until thick and creamy.",
      "Serve with a sprinkle of cinnamon."
    ]
  },
  {
    id: "green-detox-smoothie",
    category: "smoothie",
    title: "Deep Green Detox Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🌿",
    img: "https://images.unsplash.com/photo-1638176067000-9e2a5a8a8b2e?auto=format&fit=crop&w=900&q=70",
    desc: "A powerhouse of kale, celery, cucumber, and parsley sweetened just enough with green apple and lemon.",
    ingredients: [
      "1 cup chopped kale",
      "1 celery stalk, chopped",
      "1/2 cucumber, chopped",
      "Small handful parsley",
      "1 green apple, cored",
      "Juice of 1/2 lemon",
      "1 1/4 cups cold water"
    ],
    steps: [
      "Blend water, kale, celery, cucumber, and parsley until smooth.",
      "Add apple and lemon juice.",
      "Blend on high until completely smooth.",
      "Serve over ice for a refreshing cleanse."
    ]
  },
  {
    id: "strawberry-mango-smoothie",
    category: "smoothie",
    title: "Strawberry Mango Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🍓",
    img: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=900&q=70",
    desc: "Sweet strawberries and tropical mango swirl together for a sunny, crowd-pleasing fruit smoothie.",
    ingredients: [
      "1 cup frozen strawberries",
      "1 cup frozen mango",
      "1 frozen banana",
      "1 tbsp chia seeds",
      "1 cup coconut water",
      "1/2 cup almond milk",
      "Squeeze of lime"
    ],
    steps: [
      "Add coconut water and almond milk to the blender.",
      "Add strawberries, mango, banana, and chia.",
      "Blend on high until smooth.",
      "Finish with lime and serve cold."
    ]
  },
  {
    id: "chai-spice-smoothie",
    category: "smoothie",
    title: "Chai Spice Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🍂",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=70",
    desc: "Warming cinnamon, cardamom, and ginger give this creamy banana smoothie cozy chai-latte flavor.",
    ingredients: [
      "2 frozen bananas",
      "1/2 tsp cinnamon",
      "1/4 tsp ground cardamom",
      "1/4 tsp ground ginger",
      "Pinch of cloves",
      "2 tbsp cashew butter",
      "1 1/2 cups oat milk"
    ],
    steps: [
      "Add oat milk to the blender, then bananas and cashew butter.",
      "Add cinnamon, cardamom, ginger, and cloves.",
      "Blend on high until creamy and smooth.",
      "Dust with cinnamon and serve."
    ]
  },
  {
    id: "kids-purple-smoothie",
    category: "smoothie",
    title: "Kids' Purple Monster Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🟣",
    img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=70",
    desc: "A fun purple smoothie that sneaks in spinach behind sweet berries and banana — kids never notice.",
    ingredients: [
      "1 cup frozen blueberries",
      "1/2 cup frozen strawberries",
      "1 frozen banana",
      "1 cup fresh spinach",
      "1/2 cup vanilla coconut yogurt",
      "1 cup oat milk"
    ],
    steps: [
      "Blend oat milk and spinach until no green flecks remain.",
      "Add blueberries, strawberries, banana, and yogurt.",
      "Blend on high until smooth and purple.",
      "Serve in fun cups with reusable straws."
    ]
  },
  {
    id: "pineapple-ginger-smoothie",
    category: "smoothie",
    title: "Pineapple Ginger Glow Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🍍",
    img: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=70",
    desc: "Bright pineapple and fresh ginger team up for a soothing, immunity-friendly tropical glass.",
    ingredients: [
      "2 cups frozen pineapple",
      "1 frozen banana",
      "1 tsp grated fresh ginger",
      "1/2 tsp ground turmeric",
      "Juice of 1/2 lime",
      "1 cup coconut water",
      "1/2 cup orange juice"
    ],
    steps: [
      "Add coconut water and orange juice to the blender.",
      "Add pineapple, banana, ginger, and turmeric.",
      "Blend on high until smooth and bright.",
      "Finish with lime and serve cold."
    ]
  },
  {
    id: "oatmeal-cookie-smoothie",
    category: "smoothie",
    title: "Oatmeal Cookie Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🍪",
    img: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=900&q=70",
    desc: "Oats, cinnamon, dates, and a hint of vanilla make this drink taste like a freshly baked oatmeal cookie.",
    ingredients: [
      "1/2 cup rolled oats",
      "2 frozen bananas",
      "2 medjool dates, pitted",
      "1/2 tsp cinnamon",
      "1/2 tsp vanilla extract",
      "1 tbsp almond butter",
      "1 1/2 cups oat milk"
    ],
    steps: [
      "Blend oat milk, oats, and dates until smooth.",
      "Add bananas, cinnamon, vanilla, and almond butter.",
      "Blend on high until thick and creamy.",
      "Pour and enjoy like a cookie in a glass."
    ]
  },
  {
    id: "raspberry-lemon-smoothie",
    category: "smoothie",
    title: "Raspberry Lemon Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🍋",
    img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=70",
    desc: "Tart raspberries and zesty lemon make a bright, refreshing pink smoothie that tastes like lemonade.",
    ingredients: [
      "1 1/2 cups frozen raspberries",
      "1 frozen banana",
      "Juice and zest of 1 lemon",
      "1 tbsp chia seeds",
      "1 cup almond milk",
      "1/2 cup coconut water",
      "1 tbsp maple syrup"
    ],
    steps: [
      "Add almond milk and coconut water to the blender.",
      "Add raspberries, banana, lemon juice, zest, and chia.",
      "Blend on high until smooth.",
      "Sweeten with maple syrup and serve."
    ]
  },
  {
    id: "cacao-mint-smoothie",
    category: "smoothie",
    title: "Cacao Mint Chip Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🌱",
    img: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&w=900&q=70",
    desc: "Cool fresh mint, rich cacao, and a green hue from spinach — like mint chip ice cream you can sip.",
    ingredients: [
      "2 frozen bananas",
      "2 tbsp cacao powder",
      "8 fresh mint leaves",
      "1 cup fresh spinach",
      "1 tbsp cacao nibs",
      "1 1/4 cups almond milk",
      "1 medjool date, pitted"
    ],
    steps: [
      "Blend almond milk, spinach, mint, and date until smooth.",
      "Add bananas and cacao powder.",
      "Blend on high until creamy.",
      "Stir in cacao nibs and serve."
    ]
  },
  {
    id: "tropical-turmeric-smoothie",
    category: "smoothie",
    title: "Tropical Turmeric Glow Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🌺",
    img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=900&q=70",
    desc: "Mango, pineapple, and golden turmeric blend into a sunny anti-inflammatory tropical drink.",
    ingredients: [
      "1 cup frozen mango",
      "1 cup frozen pineapple",
      "1/2 tsp ground turmeric",
      "1/4 tsp black pepper",
      "1 frozen banana",
      "1 cup coconut milk beverage",
      "1/2 cup orange juice"
    ],
    steps: [
      "Add coconut milk and orange juice to the blender.",
      "Add mango, pineapple, banana, turmeric, and pepper.",
      "Blend on high until smooth and golden.",
      "Pour into glasses and serve."
    ]
  },
  {
    id: "post-workout-vanilla-smoothie",
    category: "smoothie",
    title: "Vanilla Recovery Protein Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🏋️",
    img: "https://images.unsplash.com/photo-1594488541269-abe0d7cd3a64?auto=format&fit=crop&w=900&q=70",
    desc: "A protein-packed vanilla smoothie with soy milk, hemp, and peanut butter to rebuild after a hard workout.",
    ingredients: [
      "2 frozen bananas",
      "3 tbsp hemp seeds",
      "1 tbsp peanut butter",
      "1 tsp vanilla extract",
      "2 medjool dates, pitted",
      "1 1/2 cups soy milk",
      "Handful of ice"
    ],
    steps: [
      "Blend soy milk, dates, and hemp seeds until smooth.",
      "Add bananas, peanut butter, vanilla, and ice.",
      "Blend on high until thick and creamy.",
      "Drink within 30 minutes of finishing your workout."
    ]
  },
  {
    id: "blueberry-lavender-smoothie",
    category: "smoothie",
    title: "Blueberry Lavender Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "💜",
    img: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=900&q=70",
    desc: "Sweet blueberries with a calming hint of culinary lavender for an elegant, soothing glass.",
    ingredients: [
      "1 1/2 cups frozen blueberries",
      "1 frozen banana",
      "1/4 tsp dried culinary lavender",
      "1 tbsp cashew butter",
      "1 1/4 cups oat milk",
      "1 tsp maple syrup"
    ],
    steps: [
      "Steep lavender in warm oat milk for 3 minutes, then strain.",
      "Pour infused milk into the blender.",
      "Add blueberries, banana, and cashew butter.",
      "Blend until smooth, sweeten, and serve."
    ]
  },
  {
    id: "carrot-orange-smoothie",
    category: "smoothie",
    title: "Carrot Orange Sunshine Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🥕",
    img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=900&q=70",
    desc: "Sweet carrots and bright oranges blended with ginger for a vitamin-rich golden morning drink.",
    ingredients: [
      "1 cup chopped carrots",
      "2 oranges, peeled",
      "1 frozen banana",
      "1/2 tsp grated ginger",
      "1 tbsp chia seeds",
      "1 cup almond milk",
      "Handful of ice"
    ],
    steps: [
      "Blend almond milk and carrots until smooth.",
      "Add oranges, banana, ginger, chia, and ice.",
      "Blend on high until creamy and bright.",
      "Pour into glasses and serve cold."
    ]
  },
  {
    id: "coffee-banana-smoothie",
    category: "smoothie",
    title: "Coffee Banana Energizer Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "☕",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=70",
    desc: "Smooth cold brew and banana with a touch of maple for a creamy caffeinated breakfast in a glass.",
    ingredients: [
      "3/4 cup cold brew coffee",
      "2 frozen bananas",
      "1 tbsp almond butter",
      "1/3 cup rolled oats",
      "1/2 tsp cinnamon",
      "1 cup oat milk",
      "1 tsp maple syrup"
    ],
    steps: [
      "Blend cold brew, oat milk, and oats until smooth.",
      "Add bananas, almond butter, cinnamon, and maple.",
      "Blend on high until creamy.",
      "Serve over ice and enjoy."
    ]
  },
  {
    id: "strawberry-beet-smoothie",
    category: "smoothie",
    title: "Strawberry Beet Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🍓",
    img: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=900&q=70",
    desc: "Sweet strawberries mellow earthy beet into a gorgeous ruby-red, energizing smoothie.",
    ingredients: [
      "1 small cooked beet, chopped",
      "1 1/2 cups frozen strawberries",
      "1 frozen banana",
      "1 tbsp ground flaxseed",
      "1 cup almond milk",
      "1/2 cup orange juice",
      "1 tsp maple syrup"
    ],
    steps: [
      "Blend almond milk, orange juice, and beet until fully smooth.",
      "Add strawberries, banana, and flaxseed.",
      "Blend on high until creamy and bright red.",
      "Sweeten to taste and serve."
    ]
  },
  {
    id: "papaya-lime-smoothie",
    category: "smoothie",
    title: "Papaya Lime Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🥭",
    img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=900&q=70",
    desc: "Silky papaya brightened with lime and a creamy banana base for a soothing tropical sipper.",
    ingredients: [
      "2 cups frozen papaya chunks",
      "1 frozen banana",
      "Juice of 1 lime",
      "1 tbsp chia seeds",
      "1 cup coconut water",
      "1/2 cup coconut milk beverage"
    ],
    steps: [
      "Add coconut water and coconut milk to the blender.",
      "Add papaya, banana, lime juice, and chia.",
      "Blend on high until smooth and creamy.",
      "Pour and serve immediately."
    ]
  },
  {
    id: "matcha-coconut-smoothie",
    category: "smoothie",
    title: "Matcha Coconut Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🍵",
    img: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=900&q=70",
    desc: "Creamy coconut tames bold matcha for a smooth, gently caffeinated green energizer.",
    ingredients: [
      "2 frozen bananas",
      "1 1/2 tsp matcha powder",
      "1/2 cup full-fat coconut milk",
      "2 tbsp shredded coconut",
      "1 cup almond milk",
      "1 tsp maple syrup",
      "Handful of ice"
    ],
    steps: [
      "Whisk matcha into a splash of almond milk until smooth.",
      "Add the rest of the almond milk, coconut milk, bananas, and coconut to the blender.",
      "Pour in matcha, add ice, and blend until creamy.",
      "Sweeten to taste and serve cold."
    ]
  },
  {
    id: "spiced-pear-smoothie",
    category: "smoothie",
    title: "Spiced Pear Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🍐",
    img: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=900&q=70",
    desc: "Ripe pears with cinnamon and nutmeg make a cozy, lightly sweet smoothie perfect for cool mornings.",
    ingredients: [
      "2 ripe pears, cored",
      "1 frozen banana",
      "1/2 tsp cinnamon",
      "1/4 tsp nutmeg",
      "1/3 cup rolled oats",
      "1 1/4 cups oat milk",
      "1 medjool date, pitted"
    ],
    steps: [
      "Blend oat milk, oats, and date until smooth.",
      "Add pears, banana, cinnamon, and nutmeg.",
      "Blend on high until creamy.",
      "Dust with cinnamon and serve."
    ]
  },
  {
    id: "mixed-melon-smoothie",
    category: "smoothie",
    title: "Mixed Melon Refresher Smoothie",
    time: "5 min",
    servings: "2 glasses",
    emoji: "🍈",
    img: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=70",
    desc: "Cool cantaloupe and honeydew with a squeeze of lime for a hydrating, summery glass.",
    ingredients: [
      "1 1/2 cups frozen cantaloupe",
      "1 cup frozen honeydew",
      "1 frozen banana",
      "Juice of 1/2 lime",
      "6 fresh mint leaves",
      "1 cup coconut water"
    ],
    steps: [
      "Add coconut water and mint to the blender.",
      "Add cantaloupe, honeydew, banana, and lime juice.",
      "Blend on high until smooth and frosty.",
      "Serve immediately over ice."
    ]
  }
];
