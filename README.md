# 🌿 The Green Table — Vegan Recipe Website

A simple, fast, plant-based recipe website built with plain HTML, CSS, and JavaScript — no build step required.

## Sections — 150 recipes

- **⏱️ 30-Minute Meals (50)** — stir-fries, pastas, noodle bowls, tacos, quick curries, grain bowls, sandwiches, flatbread pizzas
- **🍲 Crock Pot Vegan Meals (50)** — chilis, stews, soups, dals, tagines, ragus, pulled BBQ, slow cooker breakfasts
- **🥗 Favorites & Vegan Desserts (50)** — breakfasts, appetizers, and sides plus cookies, cakes, cheesecake, pies, and more

Each recipe card shows a photo, cook time, and serving size, and opens a full recipe (ingredients + step-by-step directions) in a modal. The hero search box filters all 150 recipes live by name, description, or ingredient; each section previews 12 cards with a "Show all" button.

## Running locally

Just open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure

| File | Purpose |
|---|---|
| `index.html` | Page layout, sections, search box, and recipe modal |
| `styles.css` | All styling (responsive grid, cards, search, modal) |
| `recipes-quick.js` | 50 thirty-minute meal recipes (`RECIPES_QUICK`) |
| `recipes-crockpot.js` | 50 crock pot recipes (`RECIPES_CROCKPOT`) |
| `recipes-favorites.js` | 50 favorites & dessert recipes (`RECIPES_FAVORITES`) |
| `recipes.js` | Combines the three collections into `RECIPES` |
| `script.js` | Renders cards, search, show-more, and the modal |

## Adding a recipe

Add an object to the matching collection file (`recipes-quick.js`, `recipes-crockpot.js`, or `recipes-favorites.js`) with a `category` of `"quick"`, `"crockpot"`, or `"favorites"`. It will appear in the matching section automatically. Photos load from Unsplash; if an image URL ever breaks, the card automatically falls back to a styled emoji placeholder.
