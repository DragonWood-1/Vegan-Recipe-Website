// Combines all recipe collections into the single RECIPES list used by script.js.
// Collections are loaded first via their own <script> tags in index.html:
//   recipes-quick.js     -> RECIPES_QUICK     (50 thirty-minute meals)
//   recipes-crockpot.js  -> RECIPES_CROCKPOT  (50 crock pot meals)
//   recipes-favorites.js -> RECIPES_FAVORITES (50 favorites & desserts)
const RECIPES = [...RECIPES_QUICK, ...RECIPES_CROCKPOT, ...RECIPES_FAVORITES];
