# 🌿 The Green Table — Vegan Recipe Website

A fast, plant-based recipe website built with plain HTML, CSS, and JavaScript.
**210 recipes** across a homepage plus 16 browsable category / ingredient / diet pages.

## Pages

**Homepage** (`index.html`) — hero, sitewide search, "browse by" links, and the three
original sections: 30-Minute Meals, Crock Pot Meals, and Favorites & Vegan Desserts.

**Categories** — `breakfast` · `lunch` · `dinner` · `dessert` · `snack` · `soup` · `smoothie`
**Ingredients** — `tofu` · `chickpea` · `lentil` · `mushroom` · `avocado`
**Diets** — `high-protein` · `gluten-free` · `low-carb` · `oil-free`

Each recipe card shows a photo, cook time, and servings, and opens a full recipe
(ingredients + directions) in a modal. Every page has live search and a "Show all"
button once a section grows past 12 cards.

## How the category / ingredient / diet pages work

Recipes are **not** manually tagged. `tags.js` derives meal, ingredient, and diet
tags from each recipe's title and ingredient list at page load, and `app.js`
filters the shared `RECIPES` array against the tag declared by each page
(`window.COLLECTION`). This means a recipe automatically shows up on every page it
qualifies for.

Diet tagging is conservative (e.g. soy sauce counts as gluten unless tamari is
specified). Diet pages display a note reminding readers to verify ingredients for
their own needs. The auto-derived **low-carb** set was nearly empty for this
grain/legume-heavy library, so a small curated low-carb collection
(`recipes-lowcarb.js`, category `"lowcarb"`) is force-tagged as low-carb.

## Running locally

```sh
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Regenerating the pages

The homepage and all 16 collection pages are generated from one template so the
nav, AdSense snippet, and modal stay identical everywhere. After changing the nav
or shared layout, regenerate:

```sh
node build-pages.js
```

## Structure

| File | Purpose |
|---|---|
| `build-pages.js` | Generates `index.html` + the 16 collection pages |
| `styles.css` | All styling (nav dropdowns, grid, cards, hero, modal) |
| `tags.js` | Derives meal/ingredient/diet tags (shared by browser + tests) |
| `app.js` | Renders cards, search, show-more, modal, and mobile nav |
| `recipes.js` | Combines all collections into `RECIPES` |
| `recipes-quick.js` | 50 thirty-minute meals (`RECIPES_QUICK`) |
| `recipes-crockpot.js` | 50 crock pot meals (`RECIPES_CROCKPOT`) |
| `recipes-favorites.js` | 50 favorites & desserts (`RECIPES_FAVORITES`) |
| `recipes-smoothies.js` | 50 smoothies (`RECIPES_SMOOTHIES`) |
| `recipes-lowcarb.js` | Curated low-carb dishes (`RECIPES_LOWCARB`) |
| `ads.txt` | Google AdSense authorization |
| `robots.txt` | Generated — allows crawling, points to the sitemap |
| `sitemap.xml` | Generated — lists all 17 pages for search engines |

## SEO / search indexing

`build-pages.js` sets `SITE_URL` (the live domain) and stamps every page with a
canonical tag, `robots` meta, and Open Graph tags, and writes `robots.txt` +
`sitemap.xml`. If the domain changes, update `SITE_URL` and re-run
`node build-pages.js`. After deploying, submit `https://<domain>/sitemap.xml` in
Google Search Console and use URL Inspection → Request Indexing on key pages.

## Adding a recipe

Add an object to the matching collection file (`category`: `"quick"`, `"crockpot"`,
`"favorites"`, `"smoothie"`, or `"lowcarb"`). It will appear on the homepage and on
every category/ingredient/diet page it qualifies for automatically. Photos load
from Unsplash; a broken image URL falls back to a styled emoji placeholder.
