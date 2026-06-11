# 🌿 The Green Table — Vegan Recipe Website

A simple, fast, plant-based recipe website built with plain HTML, CSS, and JavaScript — no build step required.

## Sections

- **⏱️ 30-Minute Meals** — quick weeknight dinners (stir-fries, tacos, pasta, noodles, bowls, fried rice)
- **🍲 Crock Pot Vegan Meals** — slow cooker chili, lentil soup, coconut curry, sloppy joes, potato soup, BBQ jackfruit
- **🥗 More Favorites** — breakfast, sides, and dessert

Each recipe card shows a photo, cook time, and serving size, and opens a full recipe (ingredients + step-by-step directions) in a modal.

## Running locally

Just open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure

| File | Purpose |
|---|---|
| `index.html` | Page layout, sections, and recipe modal |
| `styles.css` | All styling (responsive grid, cards, modal) |
| `recipes.js` | Recipe data — add new recipes here |
| `script.js` | Renders cards into sections and powers the modal |

## Adding a recipe

Add an object to the `RECIPES` array in `recipes.js` with a `category` of `"quick"`, `"crockpot"`, or `"favorites"`. It will appear in the matching section automatically. Photos load from Unsplash; if an image URL ever breaks, the card automatically falls back to a styled emoji placeholder.
