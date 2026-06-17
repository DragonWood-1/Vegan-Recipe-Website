// Combines all recipe collections into the single RECIPES list used by app.js.
// Collections are loaded first via their own <script> tags on each page:
//   recipes-quick.js      -> RECIPES_QUICK      (50 thirty-minute meals)
//   recipes-crockpot.js   -> RECIPES_CROCKPOT   (50 crock pot meals)
//   recipes-favorites.js  -> RECIPES_FAVORITES  (50 favorites & desserts)
//   recipes-smoothies.js  -> RECIPES_SMOOTHIES  (smoothies)
//   recipes-lowcarb.js    -> RECIPES_LOWCARB    (curated low-carb dishes)
const RECIPES = [
  ...RECIPES_QUICK,
  ...RECIPES_CROCKPOT,
  ...RECIPES_FAVORITES,
  ...RECIPES_SMOOTHIES,
  ...RECIPES_LOWCARB
];
