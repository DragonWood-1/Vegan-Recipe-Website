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
  }
];
