// Favorites & Vegan Desserts — 50 recipes.
const RECIPES_FAVORITES = [
  {
    "id": "overnight-oats",
    "category": "favorites",
    "title": "Berry Overnight Oats",
    "time": "5 min + overnight",
    "servings": "2 jars",
    "emoji": "🫐",
    "img": "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=900&q=70",
    "desc": "Make-ahead breakfast jars with rolled oats, chia, almond milk, and a pile of fresh berries.",
    "ingredients": [
      "1 cup rolled oats",
      "2 tbsp chia seeds",
      "1 1/4 cups almond milk",
      "1 tbsp maple syrup",
      "1/2 tsp vanilla extract",
      "1 cup mixed berries",
      "2 tbsp almond butter"
    ],
    "steps": [
      "Divide oats, chia, almond milk, maple syrup, and vanilla between two jars; stir well.",
      "Refrigerate overnight (or at least 4 hours).",
      "Top with berries and a swirl of almond butter before serving."
    ]
  },
  {
    "id": "avocado-toast",
    "category": "favorites",
    "title": "Loaded Avocado Toast",
    "time": "10 min",
    "servings": "2 toasts",
    "emoji": "🥑",
    "img": "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=900&q=70",
    "desc": "Crusty sourdough, smashed lemony avocado, chili flakes, and quick-pickled radishes.",
    "ingredients": [
      "2 thick slices sourdough, toasted",
      "1 ripe avocado",
      "Juice of 1/2 lemon",
      "2 radishes, thinly sliced",
      "1 tsp red wine vinegar",
      "Red pepper flakes, flaky salt, olive oil"
    ],
    "steps": [
      "Toss radish slices with vinegar and a pinch of salt.",
      "Smash avocado with lemon juice and salt; spread thickly on toast.",
      "Top with radishes, pepper flakes, flaky salt, and a drizzle of olive oil."
    ]
  },
  {
    "id": "stuffed-peppers",
    "category": "favorites",
    "title": "Quinoa-Stuffed Bell Peppers",
    "time": "50 min",
    "servings": "4 servings",
    "emoji": "🫑",
    "img": "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=900&q=70",
    "desc": "Sweet bell peppers baked with a savory quinoa, black bean, and corn filling.",
    "ingredients": [
      "4 large bell peppers, halved and seeded",
      "1 cup quinoa, cooked (about 3 cups)",
      "1 can (15 oz) black beans, drained",
      "1 cup corn",
      "1 cup salsa",
      "1 tsp cumin + 1 tsp chili powder",
      "Fresh cilantro and lime, for serving"
    ],
    "steps": [
      "Heat oven to 400°F (200°C). Arrange pepper halves in a baking dish.",
      "Mix quinoa, beans, corn, salsa, and spices; spoon into the peppers.",
      "Cover with foil and bake 30 minutes; uncover and bake 10 more.",
      "Finish with cilantro and a squeeze of lime."
    ]
  },
  {
    "id": "chocolate-mousse",
    "category": "favorites",
    "title": "Chocolate Avocado Mousse",
    "time": "10 min + chill",
    "servings": "4 servings",
    "emoji": "🍫",
    "img": "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=900&q=70",
    "desc": "Rich, silky chocolate mousse blended from ripe avocados, cocoa, and maple — no one will guess the secret ingredient.",
    "ingredients": [
      "2 ripe avocados",
      "1/3 cup unsweetened cocoa powder",
      "1/3 cup maple syrup",
      "1/4 cup plant milk",
      "1 tsp vanilla extract",
      "Pinch of salt",
      "Berries and shaved dark chocolate, for topping"
    ],
    "steps": [
      "Blend all ingredients until completely smooth, scraping down the sides.",
      "Taste and adjust sweetness.",
      "Chill 30 minutes, then serve topped with berries and shaved chocolate."
    ]
  },
  {
    "id": "chocolate-chip-cookies",
    "category": "favorites",
    "title": "Classic Vegan Chocolate Chip Cookies",
    "time": "25 min",
    "servings": "18 cookies",
    "emoji": "🍪",
    "img": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=70",
    "desc": "Crispy-edged, chewy-centered cookies studded with melty dark chocolate. No one will believe they're dairy- and egg-free.",
    "ingredients": [
      "1/2 cup vegan butter, softened",
      "1/2 cup brown sugar",
      "1/4 cup granulated sugar",
      "1 flax egg (1 tbsp ground flax + 3 tbsp water)",
      "1 tsp vanilla extract",
      "1 1/4 cups all-purpose flour",
      "1/2 tsp baking soda",
      "1/2 tsp salt",
      "3/4 cup vegan dark chocolate chips"
    ],
    "steps": [
      "Heat oven to 350°F (175°C) and line a baking sheet with parchment.",
      "Stir the flax egg together and let it gel for 5 minutes.",
      "Cream vegan butter with both sugars until fluffy; beat in flax egg and vanilla.",
      "Fold in flour, baking soda, and salt, then the chocolate chips.",
      "Scoop 2-tbsp mounds onto the sheet and bake 10–12 minutes until golden at the edges.",
      "Cool on the pan 5 minutes before transferring — they firm up as they cool."
    ]
  },
  {
    "id": "fudgy-brownies",
    "category": "favorites",
    "title": "Fudgy Vegan Brownies",
    "time": "45 min",
    "servings": "16 brownies",
    "emoji": "🍫",
    "img": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=70",
    "desc": "Deep, dark, and intensely fudgy brownies with crackly tops, made rich with melted chocolate and strong coffee.",
    "ingredients": [
      "1 cup all-purpose flour",
      "3/4 cup unsweetened cocoa powder",
      "1 cup sugar",
      "1/2 tsp baking powder",
      "1/2 tsp salt",
      "1/2 cup melted coconut oil",
      "3/4 cup unsweetened plant milk",
      "1/4 cup strong brewed coffee, cooled",
      "1/2 cup vegan chocolate chips, melted",
      "1 tsp vanilla extract"
    ],
    "steps": [
      "Heat oven to 350°F (175°C); line an 8x8-inch pan with parchment.",
      "Whisk flour, cocoa, sugar, baking powder, and salt in a large bowl.",
      "Stir in coconut oil, plant milk, coffee, melted chocolate, and vanilla until just combined.",
      "Spread into the pan and bake 30–35 minutes, until a toothpick comes out with moist crumbs.",
      "Cool completely in the pan before slicing into 16 squares."
    ]
  },
  {
    "id": "banana-bread",
    "category": "favorites",
    "title": "Best-Ever Vegan Banana Bread",
    "time": "1 hr 10 min",
    "servings": "1 loaf (10 slices)",
    "emoji": "🍌",
    "img": "https://images.unsplash.com/photo-1605090930904-83ed20a45f1d?auto=format&fit=crop&w=900&q=70",
    "desc": "Moist, cinnamon-scented banana bread that uses up those spotty bananas — with an optional handful of walnuts or chocolate chips.",
    "ingredients": [
      "3 very ripe bananas, mashed",
      "1/3 cup melted coconut oil",
      "1/2 cup brown sugar",
      "1/4 cup unsweetened plant milk",
      "1 tsp vanilla extract",
      "2 cups all-purpose flour",
      "1 tsp baking soda",
      "1 tsp cinnamon",
      "1/2 tsp salt",
      "1/2 cup chopped walnuts or chocolate chips"
    ],
    "steps": [
      "Heat oven to 350°F (175°C); grease a 9x5-inch loaf pan.",
      "Whisk mashed bananas, coconut oil, brown sugar, plant milk, and vanilla.",
      "Fold in flour, baking soda, cinnamon, and salt until just combined; stir in walnuts.",
      "Pour into the pan and bake 55–60 minutes, until a skewer comes out clean.",
      "Cool 15 minutes in the pan, then turn out onto a rack before slicing."
    ]
  },
  {
    "id": "cinnamon-rolls",
    "category": "favorites",
    "title": "Gooey Vegan Cinnamon Rolls",
    "time": "2 hrs 30 min",
    "servings": "12 rolls",
    "emoji": "🥐",
    "img": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=900&q=70",
    "desc": "Pillowy yeast rolls swirled with cinnamon sugar and draped in a simple vanilla glaze — a weekend project worth every minute.",
    "ingredients": [
      "1 cup warm oat milk (110°F)",
      "2 1/4 tsp active dry yeast (1 packet)",
      "1/4 cup sugar",
      "1/3 cup vegan butter, melted",
      "3 cups all-purpose flour",
      "1/2 tsp salt",
      "1/2 cup brown sugar + 2 tbsp cinnamon (filling)",
      "3 tbsp vegan butter, softened (filling)",
      "1 cup powdered sugar + 2 tbsp plant milk (glaze)"
    ],
    "steps": [
      "Stir warm oat milk, yeast, and 1 tbsp of the sugar; let foam 10 minutes.",
      "Mix in remaining sugar, melted vegan butter, flour, and salt; knead 8 minutes until smooth. Rise 1 hour, until doubled.",
      "Roll into a 14x9-inch rectangle, spread with softened vegan butter, and sprinkle with cinnamon sugar.",
      "Roll up tightly, slice into 12, and arrange in a greased 9x13-inch pan. Rise 30 minutes.",
      "Bake at 350°F (175°C) for 22–25 minutes until golden.",
      "Whisk the glaze and drizzle over the warm rolls."
    ]
  },
  {
    "id": "vanilla-cupcakes",
    "category": "favorites",
    "title": "Fluffy Vanilla Cupcakes",
    "time": "40 min",
    "servings": "12 cupcakes",
    "emoji": "🧁",
    "img": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=70",
    "desc": "Light, tender vanilla cupcakes topped with a swirl of vegan buttercream — perfect for birthdays and bake sales alike.",
    "ingredients": [
      "1 cup unsweetened soy milk",
      "1 tsp apple cider vinegar",
      "1 2/3 cups all-purpose flour",
      "3/4 cup sugar",
      "1 tsp baking powder + 1/2 tsp baking soda",
      "1/2 tsp salt",
      "1/3 cup neutral oil",
      "1 tbsp vanilla extract",
      "1/2 cup vegan butter + 2 cups powdered sugar (frosting)"
    ],
    "steps": [
      "Heat oven to 350°F (175°C); line a 12-cup muffin tin.",
      "Stir soy milk and vinegar; rest 5 minutes to curdle into vegan buttermilk.",
      "Whisk flour, sugar, baking powder, baking soda, and salt; stir in the buttermilk, oil, and vanilla until just smooth.",
      "Divide among liners and bake 18–20 minutes, until a toothpick comes out clean. Cool completely.",
      "Beat vegan butter with powdered sugar and a splash of vanilla until fluffy; pipe onto cooled cupcakes."
    ]
  },
  {
    "id": "chocolate-cake",
    "category": "favorites",
    "title": "One-Bowl Chocolate Layer Cake",
    "time": "1 hr",
    "servings": "10 slices",
    "emoji": "🎂",
    "img": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=70",
    "desc": "A deeply chocolatey, impossibly moist layer cake stacked with whipped chocolate ganache frosting. The vinegar-and-baking-soda trick keeps it featherlight.",
    "ingredients": [
      "2 cups all-purpose flour",
      "3/4 cup unsweetened cocoa powder",
      "1 1/2 cups sugar",
      "2 tsp baking soda + 1/2 tsp salt",
      "1 1/2 cups cold brewed coffee or water",
      "1/2 cup neutral oil",
      "2 tbsp apple cider vinegar",
      "2 tsp vanilla extract",
      "1 1/2 cups vegan chocolate chips + 1 cup coconut cream (frosting)"
    ],
    "steps": [
      "Heat oven to 350°F (175°C); grease two 8-inch round pans and line with parchment.",
      "Whisk flour, cocoa, sugar, baking soda, and salt in one big bowl.",
      "Add coffee, oil, vinegar, and vanilla; whisk until just smooth and divide between pans.",
      "Bake 28–32 minutes; cool completely on a rack.",
      "Melt chocolate chips into warm coconut cream, chill until thick, then whip into a fluffy frosting.",
      "Stack and frost the cooled layers."
    ]
  },
  {
    "id": "cashew-cheesecake",
    "category": "favorites",
    "title": "No-Bake Cashew Cheesecake",
    "time": "30 min + 4 hrs chill",
    "servings": "10 slices",
    "emoji": "🍰",
    "img": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=70",
    "desc": "A creamy, tangy cheesecake blended from soaked cashews and coconut cream over a date-walnut crust. Top with berry compote.",
    "ingredients": [
      "1 1/2 cups raw walnuts",
      "1 cup pitted Medjool dates",
      "Pinch of salt",
      "2 cups raw cashews, soaked 4 hours and drained",
      "1/2 cup coconut cream",
      "1/2 cup maple syrup",
      "1/3 cup lemon juice",
      "1/3 cup melted coconut oil",
      "1 tsp vanilla extract",
      "1 1/2 cups mixed berries, for compote"
    ],
    "steps": [
      "Pulse walnuts, dates, and salt into a sticky crumb; press into a parchment-lined 8-inch springform pan.",
      "Blend cashews, coconut cream, maple syrup, lemon juice, coconut oil, and vanilla until completely silky.",
      "Pour the filling over the crust and smooth the top.",
      "Freeze 4 hours or until set; thaw 15 minutes before slicing.",
      "Simmer berries with a spoonful of maple syrup for 5 minutes and spoon over each slice."
    ]
  },
  {
    "id": "banana-nice-cream",
    "category": "favorites",
    "title": "Peanut Butter Banana Nice Cream",
    "time": "10 min + frozen bananas",
    "servings": "2 servings",
    "emoji": "🍦",
    "img": "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=900&q=70",
    "desc": "Soft-serve made from nothing but frozen bananas, peanut butter, and a splash of plant milk. Dessert in ten minutes flat.",
    "ingredients": [
      "4 ripe bananas, sliced and frozen",
      "3 tbsp natural peanut butter",
      "2–4 tbsp plant milk",
      "1 tsp vanilla extract",
      "Pinch of salt",
      "1 tbsp cacao nibs or chocolate chips",
      "Crushed peanuts, for topping"
    ],
    "steps": [
      "Add frozen bananas to a food processor and pulse into crumbs.",
      "Add peanut butter, vanilla, salt, and 2 tbsp plant milk; blend until creamy, adding more milk only if needed.",
      "Fold in cacao nibs.",
      "Serve immediately as soft-serve, or freeze 1 hour for scoopable texture, topped with crushed peanuts."
    ]
  },
  {
    "id": "energy-balls",
    "category": "favorites",
    "title": "Chocolate Oat Energy Balls",
    "time": "15 min + chill",
    "servings": "16 balls",
    "emoji": "⚡",
    "img": "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=900&q=70",
    "desc": "No-bake bites of oats, dates, cocoa, and almond butter — a sweet snack that doubles as pre-workout fuel.",
    "ingredients": [
      "1 cup rolled oats",
      "1 cup pitted Medjool dates",
      "1/3 cup almond butter",
      "2 tbsp unsweetened cocoa powder",
      "2 tbsp ground flaxseed",
      "1 tbsp maple syrup",
      "1/2 tsp vanilla extract",
      "Pinch of salt",
      "2 tbsp mini vegan chocolate chips"
    ],
    "steps": [
      "Pulse dates in a food processor into a paste.",
      "Add oats, almond butter, cocoa, flax, maple syrup, vanilla, and salt; process until the mixture holds together when pinched.",
      "Pulse in the chocolate chips.",
      "Roll into 16 balls and chill 30 minutes. Keep refrigerated up to 1 week."
    ]
  },
  {
    "id": "apple-crumble",
    "category": "favorites",
    "title": "Cinnamon Apple Crumble",
    "time": "55 min",
    "servings": "6 servings",
    "emoji": "🍎",
    "img": "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=900&q=70",
    "desc": "Tender cinnamon apples bubbling under a golden oat-pecan crumble. Serve warm with a scoop of vanilla nice cream.",
    "ingredients": [
      "6 apples, peeled and sliced",
      "Juice of 1/2 lemon",
      "1/4 cup brown sugar + 1 tbsp cornstarch (filling)",
      "2 tsp cinnamon",
      "1 cup rolled oats",
      "1/2 cup all-purpose flour",
      "1/2 cup brown sugar (topping)",
      "1/2 cup cold vegan butter, cubed",
      "1/3 cup chopped pecans"
    ],
    "steps": [
      "Heat oven to 375°F (190°C).",
      "Toss apples with lemon juice, brown sugar, cornstarch, and 1 tsp cinnamon; spread in a 9x9-inch baking dish.",
      "Rub oats, flour, brown sugar, remaining cinnamon, and vegan butter together into clumps; stir in pecans.",
      "Scatter the topping over the apples.",
      "Bake 40–45 minutes until golden and bubbling; rest 10 minutes before serving."
    ]
  },
  {
    "id": "peach-cobbler",
    "category": "favorites",
    "title": "Southern-Style Peach Cobbler",
    "time": "1 hr",
    "servings": "8 servings",
    "emoji": "🍑",
    "img": "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=900&q=70",
    "desc": "Juicy peaches baked under a buttery, biscuit-like batter that rises up golden around the fruit.",
    "ingredients": [
      "6 cups sliced peaches (fresh or frozen)",
      "1/3 cup brown sugar + 1 tbsp lemon juice",
      "1 tsp cinnamon + 1/4 tsp nutmeg",
      "1 cup all-purpose flour",
      "3/4 cup sugar",
      "2 tsp baking powder",
      "1/2 tsp salt",
      "1 cup unsweetened oat milk",
      "1/2 cup melted vegan butter"
    ],
    "steps": [
      "Heat oven to 375°F (190°C).",
      "Toss peaches with brown sugar, lemon juice, cinnamon, and nutmeg.",
      "Pour melted vegan butter into a 9x13-inch baking dish.",
      "Whisk flour, sugar, baking powder, salt, and oat milk; pour the batter over the butter without stirring.",
      "Spoon the peaches evenly over the batter.",
      "Bake 40–45 minutes until puffed and golden. Serve warm."
    ]
  },
  {
    "id": "chocolate-truffles",
    "category": "favorites",
    "title": "Dark Chocolate Truffles",
    "time": "20 min + 2 hrs chill",
    "servings": "20 truffles",
    "emoji": "🍬",
    "img": "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=900&q=70",
    "desc": "Two-ingredient ganache truffles made with coconut cream and dark chocolate, rolled in cocoa, nuts, or coconut.",
    "ingredients": [
      "10 oz vegan dark chocolate, finely chopped",
      "2/3 cup full-fat coconut cream",
      "1 tbsp maple syrup",
      "1 tsp vanilla extract",
      "Pinch of sea salt",
      "1/4 cup cocoa powder, for rolling",
      "1/4 cup finely chopped toasted hazelnuts, for rolling",
      "1/4 cup shredded coconut, for rolling"
    ],
    "steps": [
      "Warm coconut cream until steaming; pour over the chopped chocolate and rest 2 minutes.",
      "Stir until glossy, then mix in maple syrup, vanilla, and salt.",
      "Chill the ganache 2 hours, until scoopable.",
      "Scoop tablespoon-sized portions and roll into balls with cool hands.",
      "Roll in cocoa, hazelnuts, or coconut. Store chilled up to 2 weeks."
    ]
  },
  {
    "id": "chia-pudding",
    "category": "favorites",
    "title": "Vanilla Chia Pudding Parfaits",
    "time": "5 min + 4 hrs chill",
    "servings": "4 servings",
    "emoji": "🥥",
    "img": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=70",
    "desc": "Creamy vanilla chia pudding layered with mango and toasted coconut — a dessert that moonlights as breakfast.",
    "ingredients": [
      "1/2 cup chia seeds",
      "2 cups coconut milk (carton)",
      "3 tbsp maple syrup",
      "1 tsp vanilla extract",
      "Pinch of salt",
      "1 ripe mango, diced",
      "1/4 cup toasted coconut flakes",
      "Fresh mint, for garnish"
    ],
    "steps": [
      "Whisk chia seeds, coconut milk, maple syrup, vanilla, and salt; rest 10 minutes and whisk again to break up clumps.",
      "Refrigerate at least 4 hours or overnight, until thick.",
      "Layer pudding and diced mango in glasses.",
      "Top with toasted coconut and mint just before serving."
    ]
  },
  {
    "id": "blondies",
    "category": "favorites",
    "title": "Brown Sugar Blondies",
    "time": "40 min",
    "servings": "16 squares",
    "emoji": "🟨",
    "img": "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=900&q=70",
    "desc": "Chewy, caramel-flavored blondies with pockets of chocolate and a sprinkle of flaky salt on top.",
    "ingredients": [
      "1/2 cup vegan butter, melted",
      "1 cup brown sugar",
      "1 flax egg (1 tbsp ground flax + 3 tbsp water)",
      "2 tsp vanilla extract",
      "1 1/4 cups all-purpose flour",
      "1/2 tsp baking powder",
      "1/2 tsp salt",
      "3/4 cup vegan chocolate chunks",
      "Flaky salt, for the top"
    ],
    "steps": [
      "Heat oven to 350°F (175°C); line an 8x8-inch pan with parchment.",
      "Stir the flax egg and rest 5 minutes.",
      "Whisk melted vegan butter and brown sugar, then beat in the flax egg and vanilla.",
      "Fold in flour, baking powder, and salt, then the chocolate chunks.",
      "Spread into the pan, sprinkle with flaky salt, and bake 22–25 minutes until just set in the center.",
      "Cool completely before slicing."
    ]
  },
  {
    "id": "blueberry-muffins",
    "category": "favorites",
    "title": "Bakery-Style Blueberry Muffins",
    "time": "35 min",
    "servings": "12 muffins",
    "emoji": "🫐",
    "img": "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=900&q=70",
    "desc": "Tall, golden-domed muffins bursting with blueberries and finished with crunchy sugar tops.",
    "ingredients": [
      "2 cups all-purpose flour",
      "3/4 cup sugar",
      "2 1/2 tsp baking powder",
      "1/2 tsp salt",
      "1 cup unsweetened soy milk + 1 tsp apple cider vinegar",
      "1/3 cup neutral oil",
      "1 tsp vanilla extract",
      "1 1/2 cups fresh or frozen blueberries",
      "2 tbsp turbinado sugar, for topping"
    ],
    "steps": [
      "Heat oven to 400°F (200°C); line a 12-cup muffin tin.",
      "Stir soy milk and vinegar; rest 5 minutes.",
      "Whisk flour, sugar, baking powder, and salt; fold in the milk mixture, oil, and vanilla until just combined.",
      "Gently fold in blueberries and divide among the cups; sprinkle with turbinado sugar.",
      "Bake 20–22 minutes, until tops spring back. Cool 10 minutes before removing."
    ]
  },
  {
    "id": "baked-donuts",
    "category": "favorites",
    "title": "Baked Chocolate-Glazed Donuts",
    "time": "30 min",
    "servings": "10 donuts",
    "emoji": "🍩",
    "img": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=70",
    "desc": "Soft baked vanilla donuts dunked in a shiny chocolate glaze and showered with sprinkles — no fryer required.",
    "ingredients": [
      "1 1/2 cups all-purpose flour",
      "1/2 cup sugar",
      "1 1/2 tsp baking powder",
      "1/2 tsp salt",
      "3/4 cup unsweetened almond milk",
      "1/4 cup melted vegan butter",
      "1 tsp vanilla extract",
      "3/4 cup vegan chocolate chips + 1 tbsp coconut oil (glaze)",
      "Vegan sprinkles, for decorating"
    ],
    "steps": [
      "Heat oven to 350°F (175°C); grease a donut pan.",
      "Whisk flour, sugar, baking powder, and salt; stir in almond milk, melted vegan butter, and vanilla.",
      "Pipe the batter into the donut pan, filling each ring 3/4 full.",
      "Bake 10–12 minutes until springy; cool 5 minutes, then turn out onto a rack.",
      "Melt chocolate chips with coconut oil; dip each donut top in the glaze and add sprinkles."
    ]
  },
  {
    "id": "pumpkin-pie",
    "category": "favorites",
    "title": "Silky Pumpkin Pie",
    "time": "1 hr 15 min + chill",
    "servings": "8 slices",
    "emoji": "🥧",
    "img": "https://images.unsplash.com/photo-1509461399763-ae67a981b254?auto=format&fit=crop&w=900&q=70",
    "desc": "A classic holiday pumpkin pie made silky with coconut milk and cornstarch — no eggs, no evaporated milk, all the spice.",
    "ingredients": [
      "1 unbaked 9-inch vegan pie crust",
      "1 can (15 oz) pumpkin puree",
      "3/4 cup full-fat coconut milk",
      "2/3 cup brown sugar",
      "1/4 cup cornstarch",
      "2 tsp pumpkin pie spice",
      "1 tsp cinnamon",
      "1 tsp vanilla extract",
      "1/2 tsp salt"
    ],
    "steps": [
      "Heat oven to 350°F (175°C).",
      "Whisk pumpkin, coconut milk, brown sugar, cornstarch, spices, vanilla, and salt until smooth.",
      "Pour the filling into the unbaked crust and smooth the top.",
      "Bake 55–60 minutes, until the edges are set and the center jiggles slightly.",
      "Cool to room temperature, then chill at least 3 hours before slicing."
    ]
  },
  {
    "id": "lemon-bars",
    "category": "favorites",
    "title": "Tangy Lemon Bars",
    "time": "50 min + chill",
    "servings": "12 bars",
    "emoji": "🍋",
    "img": "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=70",
    "desc": "A buttery shortbread base topped with bright, custardy lemon filling set with coconut milk and cornstarch.",
    "ingredients": [
      "1 1/4 cups all-purpose flour",
      "1/4 cup sugar (crust)",
      "1/2 cup cold vegan butter, cubed",
      "3/4 cup fresh lemon juice (about 4 lemons)",
      "Zest of 2 lemons",
      "3/4 cup sugar (filling)",
      "1 cup full-fat coconut milk",
      "1/4 cup cornstarch",
      "1/4 tsp turmeric (for color)",
      "Powdered sugar, for dusting"
    ],
    "steps": [
      "Heat oven to 350°F (175°C); line an 8x8-inch pan with parchment.",
      "Rub flour, sugar, and vegan butter into a crumbly dough; press into the pan and bake 18 minutes until lightly golden.",
      "Whisk lemon juice, zest, sugar, coconut milk, cornstarch, and turmeric in a saucepan; cook over medium, whisking, until very thick (about 5 minutes).",
      "Spread the filling over the warm crust.",
      "Chill at least 2 hours, then dust with powdered sugar and slice."
    ]
  },
  {
    "id": "strawberry-shortcake",
    "category": "favorites",
    "title": "Strawberry Shortcakes with Coconut Whip",
    "time": "45 min",
    "servings": "6 shortcakes",
    "emoji": "🍓",
    "img": "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=900&q=70",
    "desc": "Flaky vegan biscuits split and piled with macerated strawberries and clouds of whipped coconut cream.",
    "ingredients": [
      "2 cups all-purpose flour",
      "1/4 cup sugar + 1 tbsp for the berries",
      "1 tbsp baking powder",
      "1/2 tsp salt",
      "1/2 cup cold vegan butter, cubed",
      "3/4 cup cold unsweetened soy milk",
      "1 lb strawberries, hulled and sliced",
      "1 can (14 oz) coconut cream, chilled overnight",
      "1 tsp vanilla extract + 2 tbsp powdered sugar"
    ],
    "steps": [
      "Heat oven to 425°F (220°C). Toss strawberries with 1 tbsp sugar; set aside to macerate.",
      "Whisk flour, sugar, baking powder, and salt; cut in cold vegan butter until pea-sized.",
      "Stir in soy milk just until a shaggy dough forms; pat 1 inch thick and cut 6 rounds.",
      "Bake on a parchment-lined sheet 14–16 minutes until golden; cool slightly.",
      "Whip the chilled coconut cream solids with powdered sugar and vanilla until fluffy.",
      "Split the biscuits and layer with berries and coconut whip."
    ]
  },
  {
    "id": "mango-sorbet",
    "category": "favorites",
    "title": "3-Ingredient Mango Sorbet",
    "time": "10 min + frozen mango",
    "servings": "4 servings",
    "emoji": "🥭",
    "img": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=900&q=70",
    "desc": "Sunshine in a bowl: frozen mango, lime, and a touch of maple blended into a scoopable sorbet — no churning required.",
    "ingredients": [
      "4 cups frozen mango chunks",
      "Juice and zest of 1 lime",
      "3 tbsp maple syrup",
      "2–4 tbsp coconut water or plain water",
      "Pinch of salt",
      "Fresh mint, for serving"
    ],
    "steps": [
      "Pulse frozen mango in a food processor until crumbly.",
      "Add lime juice, zest, maple syrup, salt, and 2 tbsp liquid; blend until smooth, adding more liquid only as needed.",
      "Serve immediately for soft-serve texture, or freeze 1–2 hours for firm scoops.",
      "Garnish with mint and extra lime zest."
    ]
  },
  {
    "id": "pb-chocolate-cups",
    "category": "favorites",
    "title": "Peanut Butter Chocolate Cups",
    "time": "25 min + chill",
    "servings": "12 cups",
    "emoji": "🥜",
    "img": "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=900&q=70",
    "desc": "Homemade dark chocolate cups with a creamy salted peanut butter center — better than the store-bought kind.",
    "ingredients": [
      "2 cups vegan dark chocolate chips",
      "1 tbsp coconut oil",
      "2/3 cup natural peanut butter",
      "2 tbsp maple syrup",
      "2 tbsp powdered sugar",
      "1/2 tsp vanilla extract",
      "1/4 tsp salt",
      "Flaky salt, for topping"
    ],
    "steps": [
      "Line a muffin tin with 12 paper liners. Melt chocolate with coconut oil.",
      "Spoon a layer of chocolate into each liner; freeze 10 minutes.",
      "Stir peanut butter, maple syrup, powdered sugar, vanilla, and salt; drop a spoonful onto each chocolate base and flatten slightly.",
      "Cover with the remaining melted chocolate and sprinkle with flaky salt.",
      "Chill 30 minutes until set. Store in the fridge."
    ]
  },
  {
    "id": "carrot-cake",
    "category": "favorites",
    "title": "Carrot Cake with Cashew Cream Frosting",
    "time": "1 hr 15 min",
    "servings": "12 slices",
    "emoji": "🥕",
    "img": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=70",
    "desc": "A spiced, walnut-studded carrot cake topped with a tangy cashew \"cream cheese\" frosting.",
    "ingredients": [
      "2 cups all-purpose flour",
      "1 cup brown sugar",
      "2 tsp baking powder + 1 tsp baking soda",
      "2 tsp cinnamon + 1/2 tsp nutmeg + 1/2 tsp salt",
      "1 cup unsweetened applesauce",
      "1/2 cup neutral oil",
      "1/2 cup oat milk",
      "3 cups grated carrots",
      "3/4 cup chopped walnuts",
      "1 1/2 cups soaked cashews + 1/4 cup maple syrup + 3 tbsp lemon juice (frosting)"
    ],
    "steps": [
      "Heat oven to 350°F (175°C); grease a 9x13-inch pan.",
      "Whisk flour, sugar, leaveners, spices, and salt; stir in applesauce, oil, and oat milk.",
      "Fold in carrots and walnuts; spread in the pan.",
      "Bake 35–40 minutes until a toothpick comes out clean; cool completely.",
      "Blend soaked cashews, maple syrup, lemon juice, and a splash of water until silky; chill, then spread over the cooled cake."
    ]
  },
  {
    "id": "berry-galette",
    "category": "favorites",
    "title": "Rustic Mixed Berry Galette",
    "time": "1 hr 10 min",
    "servings": "8 slices",
    "emoji": "🥧",
    "img": "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=900&q=70",
    "desc": "A free-form berry pie with a flaky vegan-butter crust — all the pie flavor with none of the crimping stress.",
    "ingredients": [
      "1 1/2 cups all-purpose flour",
      "1 tbsp sugar + 1/4 tsp salt (crust)",
      "1/2 cup cold vegan butter, cubed",
      "4–6 tbsp ice water",
      "4 cups mixed berries",
      "1/3 cup sugar (filling)",
      "3 tbsp cornstarch",
      "1 tbsp lemon juice + zest of 1 lemon",
      "2 tbsp plant milk + 1 tbsp turbinado sugar (for the crust)"
    ],
    "steps": [
      "Cut cold vegan butter into the flour, sugar, and salt until pea-sized; add ice water until the dough just holds. Chill 30 minutes.",
      "Heat oven to 400°F (200°C). Toss berries with sugar, cornstarch, lemon juice, and zest.",
      "Roll the dough into a 12-inch round on parchment; pile the berries in the center, leaving a 2-inch border.",
      "Fold the edges over, pleating as you go; brush the crust with plant milk and sprinkle with turbinado sugar.",
      "Bake 40–45 minutes until deep golden and bubbling; cool 20 minutes before slicing."
    ]
  },
  {
    "id": "fluffy-pancakes",
    "category": "favorites",
    "title": "Fluffy Sunday Pancakes",
    "time": "20 min",
    "servings": "10 pancakes",
    "emoji": "🥞",
    "img": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=900&q=70",
    "desc": "Tall, golden pancakes made with vegan buttermilk — stack them high with maple syrup and fresh fruit.",
    "ingredients": [
      "1 1/2 cups all-purpose flour",
      "2 tbsp sugar",
      "1 tbsp baking powder",
      "1/2 tsp salt",
      "1 1/4 cups soy milk + 1 tbsp apple cider vinegar",
      "2 tbsp melted vegan butter, plus more for the pan",
      "1 tsp vanilla extract",
      "Maple syrup and berries, for serving"
    ],
    "steps": [
      "Stir soy milk and vinegar; rest 5 minutes to curdle.",
      "Whisk flour, sugar, baking powder, and salt.",
      "Stir the milk mixture, melted vegan butter, and vanilla into the dry ingredients — a few lumps are fine.",
      "Cook 1/4-cup scoops on a buttered griddle over medium heat, 2–3 minutes per side, flipping when bubbles pop.",
      "Stack with maple syrup and berries."
    ]
  },
  {
    "id": "crispy-waffles",
    "category": "favorites",
    "title": "Crispy Belgian Waffles",
    "time": "25 min",
    "servings": "6 waffles",
    "emoji": "🧇",
    "img": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=900&q=70",
    "desc": "Crackly-crisp outside, fluffy inside — cornstarch is the secret to these golden vegan waffles.",
    "ingredients": [
      "1 3/4 cups all-purpose flour",
      "1/4 cup cornstarch",
      "2 tbsp sugar",
      "1 tbsp baking powder",
      "1/2 tsp salt",
      "1 3/4 cups oat milk",
      "1/3 cup neutral oil",
      "1 tsp vanilla extract",
      "Maple syrup and sliced strawberries, for serving"
    ],
    "steps": [
      "Preheat a waffle iron to medium-high.",
      "Whisk flour, cornstarch, sugar, baking powder, and salt.",
      "Stir in oat milk, oil, and vanilla until just combined; rest the batter 5 minutes.",
      "Cook waffles until deeply golden and crisp, about 4–5 minutes each.",
      "Serve hot with maple syrup and strawberries."
    ]
  },
  {
    "id": "tofu-scramble",
    "category": "favorites",
    "title": "Sunday Tofu Scramble",
    "time": "15 min",
    "servings": "3 servings",
    "emoji": "🍳",
    "img": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=70",
    "desc": "Turmeric-golden tofu scramble with sautéed peppers and spinach — kala namak gives it that eggy magic.",
    "ingredients": [
      "1 block (14 oz) firm tofu, drained",
      "2 tbsp olive oil",
      "1/2 onion, diced",
      "1 red bell pepper, diced",
      "1/2 tsp turmeric",
      "1/2 tsp garlic powder",
      "2 tbsp nutritional yeast",
      "1/4 tsp kala namak (black salt), or sea salt",
      "2 cups baby spinach",
      "Toast and hot sauce, for serving"
    ],
    "steps": [
      "Sauté onion and bell pepper in olive oil over medium heat for 4 minutes.",
      "Crumble in the tofu with your hands, leaving some larger curds.",
      "Sprinkle with turmeric, garlic powder, and nutritional yeast; cook 5 minutes, stirring occasionally.",
      "Stir in spinach until wilted; season with kala namak and pepper off the heat.",
      "Serve hot with toast and hot sauce."
    ]
  },
  {
    "id": "smoothie-bowl",
    "category": "favorites",
    "title": "Berry Acai Smoothie Bowl",
    "time": "10 min",
    "servings": "2 bowls",
    "emoji": "🍓",
    "img": "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=900&q=70",
    "desc": "A thick, spoonable berry smoothie topped with granola, banana coins, and a drizzle of almond butter.",
    "ingredients": [
      "2 frozen acai packets (or 1 cup frozen berries)",
      "1 frozen banana",
      "1 cup frozen mixed berries",
      "1/2 cup almond milk",
      "1 tbsp maple syrup",
      "1/2 cup granola",
      "1 fresh banana, sliced",
      "2 tbsp almond butter",
      "1 tbsp hemp or chia seeds"
    ],
    "steps": [
      "Blend acai, frozen banana, frozen berries, almond milk, and maple syrup until thick — scrape down and use a tamper if needed.",
      "Divide between two chilled bowls.",
      "Arrange granola, banana slices, and seeds on top.",
      "Finish with a drizzle of almond butter and eat immediately."
    ]
  },
  {
    "id": "breakfast-burritos",
    "category": "favorites",
    "title": "Loaded Breakfast Burritos",
    "time": "30 min",
    "servings": "4 burritos",
    "emoji": "🌯",
    "img": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=70",
    "desc": "Big flour tortillas stuffed with tofu scramble, crispy potatoes, black beans, and salsa — freezer-friendly for busy mornings.",
    "ingredients": [
      "2 cups diced potatoes",
      "2 tbsp olive oil",
      "1 block (14 oz) firm tofu, crumbled",
      "1/2 tsp turmeric + 1 tsp smoked paprika",
      "2 tbsp nutritional yeast",
      "1 can (15 oz) black beans, drained",
      "4 large flour tortillas",
      "1 avocado, sliced",
      "1/2 cup salsa",
      "Salt and pepper to taste"
    ],
    "steps": [
      "Pan-fry potatoes in 1 tbsp oil over medium-high, 12–15 minutes until crispy; season and set aside.",
      "In the same skillet, cook crumbled tofu with remaining oil, turmeric, paprika, and nutritional yeast for 5 minutes.",
      "Warm beans and tortillas.",
      "Layer potatoes, scramble, beans, avocado, and salsa down each tortilla.",
      "Fold in the sides and roll tightly; sear seam-side down 1 minute for a sealed, golden burrito."
    ]
  },
  {
    "id": "french-toast",
    "category": "favorites",
    "title": "Vegan French Toast",
    "time": "20 min",
    "servings": "6 slices",
    "emoji": "🍞",
    "img": "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=900&q=70",
    "desc": "Thick bread soaked in a cinnamon-chickpea custard and griddled until golden — crisp edges, custardy middle.",
    "ingredients": [
      "6 thick slices day-old sourdough or brioche-style bread",
      "1 cup oat milk",
      "3 tbsp chickpea flour",
      "1 tbsp maple syrup, plus more for serving",
      "1 tsp cinnamon",
      "1 tsp vanilla extract",
      "Pinch of salt",
      "Vegan butter, for the pan",
      "Powdered sugar and berries, for serving"
    ],
    "steps": [
      "Whisk oat milk, chickpea flour, maple syrup, cinnamon, vanilla, and salt until smooth.",
      "Soak each bread slice in the custard 20 seconds per side.",
      "Melt vegan butter in a skillet over medium heat.",
      "Cook slices 3–4 minutes per side until deeply golden.",
      "Dust with powdered sugar and serve with berries and maple syrup."
    ]
  },
  {
    "id": "classic-hummus",
    "category": "favorites",
    "title": "Silky Classic Hummus",
    "time": "10 min",
    "servings": "2 cups",
    "emoji": "🧆",
    "img": "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=900&q=70",
    "desc": "Ultra-creamy hummus whipped with good tahini, lemon, and ice water — the restaurant-smooth texture at home.",
    "ingredients": [
      "1 can (15 oz) chickpeas, drained (liquid reserved)",
      "1/3 cup tahini",
      "Juice of 1 large lemon",
      "1 clove garlic",
      "1/2 tsp cumin",
      "3–4 tbsp ice water",
      "1/2 tsp salt",
      "Olive oil, paprika, and parsley, for serving"
    ],
    "steps": [
      "Blend tahini, lemon juice, and garlic for 1 minute until pale and creamy.",
      "Add chickpeas, cumin, and salt; blend, streaming in ice water, until completely smooth — about 3 minutes.",
      "Taste and adjust lemon and salt.",
      "Swoosh into a bowl, drizzle with olive oil, and dust with paprika and parsley.",
      "Serve with warm pita and crunchy veggies."
    ]
  },
  {
    "id": "chunky-guacamole",
    "category": "favorites",
    "title": "Chunky Lime Guacamole",
    "time": "10 min",
    "servings": "4 servings",
    "emoji": "🥑",
    "img": "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?auto=format&fit=crop&w=900&q=70",
    "desc": "Classic guac with plenty of lime, jalapeño, and cilantro, kept chunky the way it should be.",
    "ingredients": [
      "3 ripe avocados",
      "Juice of 2 limes",
      "1/4 red onion, finely diced",
      "1 jalapeño, seeded and minced",
      "1 Roma tomato, diced",
      "1/4 cup chopped cilantro",
      "1/2 tsp salt",
      "1/4 tsp cumin"
    ],
    "steps": [
      "Halve and pit the avocados; scoop into a bowl and mash coarsely with a fork.",
      "Stir in lime juice immediately to keep it green.",
      "Fold in onion, jalapeño, tomato, and cilantro.",
      "Season with salt and cumin; taste and add more lime if needed.",
      "Serve right away with tortilla chips."
    ]
  },
  {
    "id": "fresh-spring-rolls",
    "category": "favorites",
    "title": "Rainbow Summer Rolls with Peanut Sauce",
    "time": "30 min",
    "servings": "8 rolls",
    "emoji": "🥢",
    "img": "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=900&q=70",
    "desc": "Fresh rice-paper rolls packed with crisp vegetables, herbs, and rice noodles, with a creamy peanut dipping sauce.",
    "ingredients": [
      "8 rice paper wrappers",
      "4 oz rice vermicelli noodles, cooked",
      "1 cup shredded carrots",
      "1 cucumber, julienned",
      "1 red bell pepper, thinly sliced",
      "1 avocado, sliced",
      "Fresh mint and cilantro leaves",
      "1/3 cup peanut butter + 2 tbsp soy sauce + 1 tbsp lime juice + 1 tbsp maple syrup (sauce)",
      "2–3 tbsp warm water, to thin the sauce"
    ],
    "steps": [
      "Whisk peanut butter, soy sauce, lime juice, maple syrup, and warm water into a smooth dipping sauce.",
      "Dip one rice paper in warm water 10 seconds and lay on a damp board.",
      "Layer herbs, noodles, and vegetables on the lower third.",
      "Fold the sides in and roll tightly from the bottom.",
      "Repeat with remaining wrappers; slice in half and serve with the peanut sauce."
    ]
  },
  {
    "id": "loaded-nachos",
    "category": "favorites",
    "title": "Loaded Cashew Queso Nachos",
    "time": "30 min",
    "servings": "4 servings",
    "emoji": "🧀",
    "img": "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=900&q=70",
    "desc": "A sheet pan of crispy chips smothered in warm cashew queso, spiced black beans, and all the toppings.",
    "ingredients": [
      "1 large bag tortilla chips",
      "1 cup raw cashews, soaked or boiled 10 minutes",
      "3/4 cup water",
      "1/4 cup nutritional yeast",
      "1 tsp smoked paprika + 1/2 tsp garlic powder",
      "2 tbsp pickled jalapeño brine + sliced jalapeños",
      "1 can (15 oz) black beans, warmed with 1 tsp cumin",
      "1 avocado, diced",
      "1/2 cup pico de gallo",
      "Cilantro and lime, for serving"
    ],
    "steps": [
      "Blend cashews, water, nutritional yeast, paprika, garlic powder, jalapeño brine, and salt until pourably smooth; warm in a saucepan until thick.",
      "Heat oven to 400°F (200°C); spread chips on a sheet pan and warm 5 minutes.",
      "Spoon the spiced beans over the chips, then drizzle generously with queso.",
      "Top with avocado, pico de gallo, and pickled jalapeños.",
      "Shower with cilantro and lime; serve straight from the pan."
    ]
  },
  {
    "id": "crispy-smashed-potatoes",
    "category": "favorites",
    "title": "Crispy Smashed Potatoes with Garlic Aioli",
    "time": "50 min",
    "servings": "4 servings",
    "emoji": "🥔",
    "img": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=70",
    "desc": "Boiled baby potatoes smashed flat and roasted until shatteringly crisp, served with a lemony vegan garlic aioli.",
    "ingredients": [
      "1 1/2 lbs baby potatoes",
      "3 tbsp olive oil",
      "1 tsp garlic powder",
      "1 tsp smoked paprika",
      "Salt and black pepper",
      "1/2 cup vegan mayo",
      "2 cloves garlic, grated",
      "Juice of 1/2 lemon",
      "Chopped chives, for serving"
    ],
    "steps": [
      "Boil potatoes in salted water 15–18 minutes until fork-tender; drain and steam-dry 5 minutes.",
      "Heat oven to 450°F (230°C). Arrange potatoes on an oiled sheet pan and smash each flat with a glass.",
      "Brush with olive oil and season with garlic powder, paprika, salt, and pepper.",
      "Roast 25–30 minutes until deeply golden and crisp at the edges.",
      "Stir vegan mayo with grated garlic and lemon juice; serve the potatoes hot with the aioli and chives."
    ]
  },
  {
    "id": "buffalo-cauliflower",
    "category": "favorites",
    "title": "Buffalo Cauliflower Wings",
    "time": "45 min",
    "servings": "4 servings",
    "emoji": "🌶️",
    "img": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=70",
    "desc": "Crispy battered cauliflower tossed in buttery buffalo sauce — game-day snacking with a vegan ranch dip.",
    "ingredients": [
      "1 large head cauliflower, cut into florets",
      "3/4 cup all-purpose flour",
      "3/4 cup unsweetened plant milk",
      "1 tsp garlic powder + 1 tsp paprika",
      "1/2 tsp salt",
      "1 cup panko breadcrumbs",
      "2/3 cup buffalo hot sauce",
      "2 tbsp melted vegan butter",
      "Vegan ranch and celery sticks, for serving"
    ],
    "steps": [
      "Heat oven to 450°F (230°C); line a sheet pan with parchment.",
      "Whisk flour, plant milk, garlic powder, paprika, and salt into a batter.",
      "Dip florets in the batter, roll in panko, and space out on the pan.",
      "Bake 20 minutes until crisp.",
      "Toss with buffalo sauce mixed with melted vegan butter; bake 8–10 more minutes.",
      "Serve hot with vegan ranch and celery."
    ]
  },
  {
    "id": "garlic-knots",
    "category": "favorites",
    "title": "Buttery Garlic Knots",
    "time": "1 hr 45 min",
    "servings": "12 knots",
    "emoji": "🥖",
    "img": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=70",
    "desc": "Soft, golden knots of homemade dough brushed with garlicky vegan butter and parsley — irresistible with marinara.",
    "ingredients": [
      "2 1/4 tsp active dry yeast (1 packet)",
      "1 cup warm water (110°F)",
      "1 tbsp sugar",
      "2 3/4 cups all-purpose flour",
      "1 tsp salt",
      "2 tbsp olive oil",
      "4 tbsp vegan butter, melted",
      "3 cloves garlic, minced",
      "2 tbsp chopped parsley",
      "Marinara sauce, for dipping"
    ],
    "steps": [
      "Stir yeast, warm water, and sugar; let foam 10 minutes.",
      "Mix in flour, salt, and olive oil; knead 8 minutes until smooth. Rise 1 hour, until doubled.",
      "Divide into 12 ropes and tie each into a knot; place on a parchment-lined sheet and rest 15 minutes.",
      "Bake at 400°F (200°C) for 15–18 minutes until golden.",
      "Stir melted vegan butter with garlic and parsley; brush over the hot knots and serve with marinara."
    ]
  },
  {
    "id": "stuffed-mushrooms",
    "category": "favorites",
    "title": "Herbed Stuffed Mushrooms",
    "time": "40 min",
    "servings": "20 mushrooms",
    "emoji": "🍄",
    "img": "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=900&q=70",
    "desc": "Party-perfect mushrooms stuffed with a garlicky walnut-breadcrumb filling and baked until golden.",
    "ingredients": [
      "20 cremini mushrooms, stems removed and reserved",
      "2 tbsp olive oil",
      "3 cloves garlic, minced",
      "1/2 cup walnuts, finely chopped",
      "3/4 cup panko breadcrumbs",
      "3 tbsp nutritional yeast",
      "1 tsp dried thyme",
      "2 tbsp chopped parsley",
      "Salt and pepper to taste"
    ],
    "steps": [
      "Heat oven to 375°F (190°C). Arrange mushroom caps on a baking sheet, gill-side up.",
      "Finely chop the reserved stems and sauté in olive oil with garlic for 3 minutes.",
      "Stir in walnuts, panko, nutritional yeast, thyme, salt, and pepper; cook 2 minutes until toasty.",
      "Mound the filling into the caps.",
      "Bake 18–20 minutes until the mushrooms are tender and tops are golden; sprinkle with parsley."
    ]
  },
  {
    "id": "sweet-potato-fries",
    "category": "favorites",
    "title": "Crispy Baked Sweet Potato Fries",
    "time": "40 min",
    "servings": "4 servings",
    "emoji": "🍟",
    "img": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=70",
    "desc": "Oven fries with crisp edges and creamy centers — the cornstarch toss is the trick. Serve with smoky chipotle mayo.",
    "ingredients": [
      "2 large sweet potatoes, cut into 1/4-inch sticks",
      "1 tbsp cornstarch",
      "2 tbsp olive oil",
      "1 tsp smoked paprika",
      "1/2 tsp garlic powder",
      "1/2 tsp salt",
      "1/2 cup vegan mayo",
      "1 tsp chipotle in adobo, minced",
      "Juice of 1/2 lime"
    ],
    "steps": [
      "Heat oven to 425°F (220°C); line two sheet pans with parchment.",
      "Toss dry sweet potato sticks with cornstarch until lightly coated.",
      "Toss with oil, paprika, garlic powder, and salt; spread in a single layer without crowding.",
      "Bake 25–30 minutes, flipping halfway, until browned and crisp at the edges.",
      "Whisk vegan mayo, chipotle, and lime juice; serve alongside the hot fries."
    ]
  },
  {
    "id": "granola-clusters",
    "category": "favorites",
    "title": "Maple-Pecan Granola Clusters",
    "time": "40 min",
    "servings": "6 cups",
    "emoji": "🥣",
    "img": "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=900&q=70",
    "desc": "Big, crunchy clusters of oats, pecans, and coconut bound with maple syrup — perfect over plant yogurt or by the handful.",
    "ingredients": [
      "3 cups rolled oats",
      "1 cup pecans, roughly chopped",
      "1/2 cup shredded coconut",
      "1/4 cup ground flaxseed",
      "1/2 tsp cinnamon + 1/2 tsp salt",
      "1/2 cup maple syrup",
      "1/3 cup melted coconut oil",
      "1 tsp vanilla extract",
      "1/2 cup dried cranberries"
    ],
    "steps": [
      "Heat oven to 325°F (165°C); line a sheet pan with parchment.",
      "Mix oats, pecans, coconut, flax, cinnamon, and salt.",
      "Stir in maple syrup, coconut oil, and vanilla until everything is coated.",
      "Press firmly into an even layer and bake 28–32 minutes until golden, rotating once but not stirring.",
      "Cool completely on the pan, then break into clusters and toss with cranberries."
    ]
  },
  {
    "id": "corn-fritters",
    "category": "favorites",
    "title": "Crispy Sweet Corn Fritters",
    "time": "25 min",
    "servings": "10 fritters",
    "emoji": "🌽",
    "img": "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=900&q=70",
    "desc": "Golden, lacy-edged corn fritters with scallions and a squeeze of lime — a snack, side, or brunch hero.",
    "ingredients": [
      "3 cups corn kernels (fresh or thawed frozen)",
      "3/4 cup all-purpose flour",
      "1/4 cup chickpea flour",
      "1 tsp baking powder",
      "1/2 tsp smoked paprika + 1/2 tsp salt",
      "1/2 cup unsweetened plant milk",
      "3 scallions, sliced",
      "Neutral oil, for pan-frying",
      "Lime wedges and vegan sour cream, for serving"
    ],
    "steps": [
      "Whisk flours, baking powder, paprika, and salt; stir in plant milk to make a thick batter.",
      "Fold in corn and scallions.",
      "Heat a thin layer of oil in a skillet over medium-high.",
      "Drop 1/4-cup scoops and flatten slightly; fry 3 minutes per side until deep golden.",
      "Drain on paper towels and serve with lime and vegan sour cream."
    ]
  },
  {
    "id": "caprese-crostini",
    "category": "favorites",
    "title": "Tomato-Basil Crostini",
    "time": "20 min",
    "servings": "16 crostini",
    "emoji": "🍅",
    "img": "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=900&q=70",
    "desc": "Garlic-rubbed toasts topped with juicy marinated tomatoes, basil, and a balsamic drizzle — summer on a baguette.",
    "ingredients": [
      "1 baguette, sliced into 16 rounds",
      "3 tbsp olive oil",
      "2 cloves garlic, 1 halved and 1 minced",
      "2 cups cherry tomatoes, quartered",
      "1 tbsp balsamic vinegar, plus more for drizzling",
      "1/4 cup fresh basil, sliced",
      "1/2 tsp salt",
      "Black pepper and flaky salt, to finish"
    ],
    "steps": [
      "Heat oven to 400°F (200°C). Brush baguette slices with olive oil and toast 8–10 minutes until golden.",
      "Rub each warm toast with the halved garlic clove.",
      "Toss tomatoes with minced garlic, balsamic, basil, salt, and a drizzle of olive oil.",
      "Spoon the tomatoes onto the toasts just before serving.",
      "Finish with black pepper, flaky salt, and an extra balsamic drizzle."
    ]
  },
  {
    "id": "white-bean-dip",
    "category": "favorites",
    "title": "Rosemary White Bean Dip",
    "time": "10 min",
    "servings": "2 cups",
    "emoji": "🫘",
    "img": "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=900&q=70",
    "desc": "A garlicky, lemony cannellini dip blitzed with rosemary-infused olive oil — ready before the crackers hit the table.",
    "ingredients": [
      "2 cans (15 oz) cannellini beans, drained and rinsed",
      "1/4 cup olive oil",
      "1 sprig fresh rosemary",
      "2 cloves garlic, smashed",
      "Juice of 1 lemon",
      "2 tbsp tahini",
      "1/2 tsp salt",
      "Red pepper flakes, for serving"
    ],
    "steps": [
      "Warm olive oil with rosemary and garlic in a small pan over low heat for 3 minutes; cool slightly and discard the rosemary stem.",
      "Blend beans, the infused oil and garlic, lemon juice, tahini, and salt until very smooth.",
      "Thin with a tablespoon of water if needed.",
      "Swirl into a bowl, top with red pepper flakes and a drizzle of oil, and serve with crackers and crudités."
    ]
  },
  {
    "id": "banana-baked-oatmeal",
    "category": "favorites",
    "title": "Banana Walnut Baked Oatmeal",
    "time": "50 min",
    "servings": "6 servings",
    "emoji": "🍌",
    "img": "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=900&q=70",
    "desc": "A cozy casserole of oats, bananas, and walnuts that bakes up like soft oatmeal cake — meal-prep gold for the week.",
    "ingredients": [
      "2 1/2 cups rolled oats",
      "1 tsp baking powder",
      "1 1/2 tsp cinnamon",
      "1/2 tsp salt",
      "2 ripe bananas, mashed, plus 1 sliced for the top",
      "2 cups oat milk",
      "1/3 cup maple syrup",
      "2 tbsp ground flaxseed",
      "1 tsp vanilla extract",
      "1/2 cup chopped walnuts"
    ],
    "steps": [
      "Heat oven to 375°F (190°C); grease an 8x8-inch baking dish.",
      "Stir oats, baking powder, cinnamon, and salt.",
      "Whisk mashed bananas, oat milk, maple syrup, flax, and vanilla; combine with the oats and half the walnuts.",
      "Pour into the dish and top with banana slices and remaining walnuts.",
      "Bake 35–40 minutes until set and golden. Serve warm with a splash of oat milk."
    ]
  },
  {
    "id": "pesto-pinwheels",
    "category": "favorites",
    "title": "Spinach Pesto Pinwheels",
    "time": "35 min",
    "servings": "16 pinwheels",
    "emoji": "🌀",
    "img": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=70",
    "desc": "Flaky puff pastry spirals filled with a vibrant spinach-basil pesto — a five-ingredient party trick.",
    "ingredients": [
      "1 sheet vegan puff pastry, thawed",
      "2 cups fresh basil",
      "1 cup baby spinach",
      "1/3 cup walnuts",
      "2 tbsp nutritional yeast",
      "1 clove garlic",
      "1/4 cup olive oil",
      "1/2 tsp salt",
      "2 tbsp plant milk, for brushing"
    ],
    "steps": [
      "Heat oven to 400°F (200°C); line a baking sheet with parchment.",
      "Blend basil, spinach, walnuts, nutritional yeast, garlic, olive oil, and salt into a thick pesto.",
      "Spread the pesto over the puff pastry sheet, leaving a 1/2-inch border.",
      "Roll into a tight log, slice into 16 rounds, and arrange cut-side up on the sheet.",
      "Brush with plant milk and bake 18–20 minutes until puffed and golden."
    ]
  },
  {
    "id": "edamame-dumplings",
    "category": "favorites",
    "title": "Pan-Fried Veggie Dumplings",
    "time": "50 min",
    "servings": "24 dumplings",
    "emoji": "🥟",
    "img": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=900&q=70",
    "desc": "Crispy-bottomed dumplings filled with cabbage, shiitake, and ginger, with a soy-black-vinegar dipping sauce.",
    "ingredients": [
      "24 round vegan dumpling wrappers",
      "2 cups finely shredded napa cabbage",
      "1 cup shiitake mushrooms, minced",
      "1 cup shelled edamame, chopped",
      "2 scallions, minced",
      "1 tbsp grated ginger + 2 cloves garlic, minced",
      "2 tbsp soy sauce + 1 tsp toasted sesame oil",
      "2 tbsp neutral oil, for frying",
      "3 tbsp soy sauce + 1 tbsp black vinegar (dipping sauce)"
    ],
    "steps": [
      "Salt the cabbage, rest 10 minutes, and squeeze dry.",
      "Mix cabbage, shiitakes, edamame, scallions, ginger, garlic, soy sauce, and sesame oil.",
      "Spoon filling onto each wrapper, wet the edge, and pleat closed.",
      "Heat oil in a lidded skillet; fry dumplings 2 minutes until the bottoms brown.",
      "Add 1/3 cup water, cover, and steam 6 minutes until the wrappers are tender.",
      "Uncover to re-crisp the bottoms; serve with the dipping sauce."
    ]
  },
  {
    "id": "scones-with-jam",
    "category": "favorites",
    "title": "Flaky Vanilla Scones with Jam",
    "time": "35 min",
    "servings": "8 scones",
    "emoji": "🍓",
    "img": "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=900&q=70",
    "desc": "Tender, golden scones made with cold vegan butter and coconut cream, served warm with strawberry jam.",
    "ingredients": [
      "2 cups all-purpose flour",
      "1/3 cup sugar",
      "1 tbsp baking powder",
      "1/2 tsp salt",
      "1/2 cup cold vegan butter, cubed",
      "2/3 cup cold coconut cream",
      "1 tsp vanilla extract",
      "2 tbsp plant milk + 1 tbsp turbinado sugar (topping)",
      "Strawberry jam, for serving"
    ],
    "steps": [
      "Heat oven to 400°F (200°C); line a baking sheet with parchment.",
      "Whisk flour, sugar, baking powder, and salt; cut in cold vegan butter until pea-sized.",
      "Stir in coconut cream and vanilla just until the dough comes together.",
      "Pat into a 1-inch-thick circle, cut into 8 wedges, and space out on the sheet.",
      "Brush with plant milk, sprinkle with turbinado sugar, and bake 18–20 minutes until golden.",
      "Serve warm with jam."
    ]
  }
];
