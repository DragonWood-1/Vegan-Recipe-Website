/*
 * Static page generator for The Green Table.
 * Run with:  node build-pages.js
 * Emits index.html plus one page per category / ingredient / diet, all sharing
 * the same header nav, AdSense snippet, recipe modal, and scripts. Re-run this
 * whenever the nav or shared layout changes.
 */
const fs = require("fs");
const path = require("path");
const ROOT = __dirname;

const ADSENSE =
  '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8788099801042098"\n' +
  '     crossorigin="anonymous"></script>';

// Live domain (no trailing slash). Drives the canonical tags, sitemap.xml, and
// robots.txt that Google needs to index the site. Re-run `node build-pages.js`
// after changing it.
const SITE_URL = "https://vegankitchenguide.com";

// Nav menus (label -> filename). Used to build the shared header on every page.
const CATEGORIES = [
  ["Breakfast", "breakfast.html"], ["Lunch", "lunch.html"], ["Dinner", "dinner.html"],
  ["Dessert", "dessert.html"], ["Snack", "snack.html"], ["Soup", "soup.html"],
  ["Smoothie", "smoothie.html"]
];
const INGREDIENTS = [
  ["Tofu", "tofu.html"], ["Chickpea", "chickpea.html"], ["Lentil", "lentil.html"],
  ["Mushroom", "mushroom.html"], ["Avocado", "avocado.html"]
];
const DIETS = [
  ["High Protein", "high-protein.html"], ["Gluten Free", "gluten-free.html"],
  ["Low Carb", "low-carb.html"], ["Oil Free", "oil-free.html"]
];

function dropdown(label, items) {
  const links = items.map(([t, h]) => `          <a href="${h}">${t}</a>`).join("\n");
  return (
    `      <div class="dropdown">\n` +
    `        <button class="dropbtn" type="button">${label} ▾</button>\n` +
    `        <div class="dropdown-menu">\n${links}\n        </div>\n` +
    `      </div>`
  );
}

const NAV =
  `  <header class="site-header">\n` +
  `    <nav class="nav">\n` +
  `      <a class="brand" href="index.html">🌿 The Green Table</a>\n` +
  `      <button class="nav-toggle" type="button" aria-label="Menu">☰</button>\n` +
  `      <div class="nav-links">\n` +
  dropdown("Categories", CATEGORIES) + "\n" +
  dropdown("Ingredients", INGREDIENTS) + "\n" +
  dropdown("Diets", DIETS) + "\n" +
  `        <a href="index.html">All Recipes</a>\n` +
  `      </div>\n` +
  `    </nav>\n` +
  `  </header>`;

const MODAL =
  `  <div class="modal-overlay" id="recipe-modal" hidden>\n` +
  `    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">\n` +
  `      <button class="modal-close" id="modal-close" aria-label="Close recipe">&times;</button>\n` +
  `      <img class="modal-img" id="modal-img" src="" alt="">\n` +
  `      <div class="modal-body">\n` +
  `        <h3 id="modal-title"></h3>\n` +
  `        <div class="modal-meta" id="modal-meta"></div>\n` +
  `        <p class="modal-desc" id="modal-desc"></p>\n` +
  `        <div class="modal-columns">\n` +
  `          <div><h4>Ingredients</h4><ul id="modal-ingredients"></ul></div>\n` +
  `          <div><h4>Directions</h4><ol id="modal-steps"></ol></div>\n` +
  `        </div>\n` +
  `      </div>\n` +
  `    </div>\n` +
  `  </div>`;

const DATA_SCRIPTS =
  `  <script src="recipes-quick.js"></script>\n` +
  `  <script src="recipes-crockpot.js"></script>\n` +
  `  <script src="recipes-favorites.js"></script>\n` +
  `  <script src="recipes-smoothies.js"></script>\n` +
  `  <script src="recipes-lowcarb.js"></script>\n` +
  `  <script src="recipes.js"></script>`;

const FOOTER =
  `  <footer class="site-footer">\n` +
  `    <p>🌿 The Green Table — plant-based recipes made simple.</p>\n` +
  `  </footer>`;

function head(title, desc, canonPath, ogImage) {
  // canonPath: "" for the homepage, or a filename like "breakfast.html".
  const canon = SITE_URL + "/" + (canonPath || "");
  const img = ogImage || "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=70";
  return (
    `<!DOCTYPE html>\n<html lang="en">\n<head>\n` +
    `  <meta charset="UTF-8">\n` +
    `  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n` +
    `  <meta name="description" content="${desc}">\n` +
    `  <meta name="robots" content="index, follow">\n` +
    `  <link rel="canonical" href="${canon}">\n` +
    `  <title>${title}</title>\n` +
    `  <meta property="og:type" content="website">\n` +
    `  <meta property="og:title" content="${title}">\n` +
    `  <meta property="og:description" content="${desc}">\n` +
    `  <meta property="og:url" content="${canon}">\n` +
    `  <meta property="og:image" content="${img}">\n` +
    `  <meta name="twitter:card" content="summary_large_image">\n` +
    `  ${ADSENSE}\n` +
    `  <link rel="preconnect" href="https://fonts.googleapis.com">\n` +
    `  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n` +
    `  <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">\n` +
    `  <link rel="stylesheet" href="styles.css">\n` +
    `</head>`
  );
}

/* ---------------- Collection pages ---------------- */
const COLLECTIONS = [
  // kind, value, file, h1, emoji, subtitle, heroImg
  ["meals", "breakfast", "breakfast.html", "Vegan Breakfast Recipes", "🥞", "Pancakes, oats, scrambles, and smoothies to start the day right.", "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1600&q=70"],
  ["meals", "lunch", "lunch.html", "Vegan Lunch Recipes", "🥪", "Bowls, salads, wraps, and sandwiches for an easy midday meal.", "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1600&q=70"],
  ["meals", "dinner", "dinner.html", "Vegan Dinner Recipes", "🍽️", "Weeknight skillets, curries, and slow-cooked comfort food.", "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1600&q=70"],
  ["meals", "dessert", "dessert.html", "Vegan Dessert Recipes", "🍰", "Cookies, cakes, pies, and frozen treats — all dairy- and egg-free.", "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=1600&q=70"],
  ["meals", "snack", "snack.html", "Vegan Snack Recipes", "🍿", "Dips, bites, and finger foods for anytime cravings.", "https://images.unsplash.com/photo-1521986329282-0436c1f1e212?auto=format&fit=crop&w=1600&q=70"],
  ["meals", "soup", "soup.html", "Vegan Soup Recipes", "🍲", "Cozy soups, stews, chilis, and chowders, all plant-based.", "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1600&q=70"],
  ["meals", "smoothie", "smoothie.html", "Vegan Smoothie Recipes", "🥤", "Creamy, fruit-packed blends ready in five minutes.", "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=1600&q=70"],

  ["ingredients", "tofu", "tofu.html", "Vegan Tofu Recipes", "🧊", "Crispy, saucy, and protein-rich tofu dishes from around the world.", "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1600&q=70"],
  ["ingredients", "chickpea", "chickpea.html", "Vegan Chickpea Recipes", "🫛", "Hearty, high-protein meals built on the mighty chickpea.", "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1600&q=70"],
  ["ingredients", "lentil", "lentil.html", "Vegan Lentil Recipes", "🍛", "Filling, budget-friendly lentil soups, dals, and mains.", "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1600&q=70"],
  ["ingredients", "mushroom", "mushroom.html", "Vegan Mushroom Recipes", "🍄", "Meaty, umami-rich mushroom dishes for every craving.", "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1600&q=70"],
  ["ingredients", "avocado", "avocado.html", "Vegan Avocado Recipes", "🥑", "Creamy avocado in toasts, bowls, dips, and even dessert.", "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=1600&q=70"],

  ["diets", "high-protein", "high-protein.html", "High Protein Vegan Recipes", "💪", "Tofu, tempeh, beans, and lentils for plenty of plant protein.", "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1600&q=70"],
  ["diets", "gluten-free", "gluten-free.html", "Gluten Free Vegan Recipes", "🌾", "Naturally gluten-free plant-based meals — no wheat required.", "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1600&q=70"],
  ["diets", "low-carb", "low-carb.html", "Low Carb Vegan Recipes", "🥗", "Lighter, veggie-forward dishes that go easy on the carbs.", "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1600&q=70"],
  ["diets", "oil-free", "oil-free.html", "Oil Free Vegan Recipes", "🫧", "Wholesome recipes made without any added oil.", "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1600&q=70"]
];

function collectionPage(kind, value, file, h1, emoji, subtitle, heroImg) {
  const isDiet = kind === "diets";
  const disclaimer = isDiet
    ? `      <p class="diet-note">Recipes here are auto-sorted from our library by their ingredients — always double-check the ingredient list against your own dietary needs.</p>\n`
    : "";
  return (
    head("" + h1 + " — The Green Table", subtitle, file, heroImg) + "\n" +
    `<body>\n\n` +
    NAV + "\n\n" +
    `  <section class="collection-hero" style="--hero: url('${heroImg}')">\n` +
    `    <div class="hero-content">\n` +
    `      <h1>${emoji} ${h1}</h1>\n` +
    `      <p>${subtitle}</p>\n` +
    `      <span class="collection-count" id="collection-count"></span>\n` +
    `      <div class="search-wrap">\n` +
    `        <input type="search" id="recipe-search" placeholder="Search these recipes…" aria-label="Search recipes">\n` +
    `        <span id="search-count" aria-live="polite"></span>\n` +
    `      </div>\n` +
    `    </div>\n` +
    `  </section>\n\n` +
    `  <main>\n` +
    `    <section class="recipe-section">\n` +
    disclaimer +
    `      <div class="recipe-grid"></div>\n` +
    `    </section>\n` +
    `  </main>\n\n` +
    MODAL + "\n\n" +
    FOOTER + "\n\n" +
    DATA_SCRIPTS + "\n" +
    `  <script>window.COLLECTION = { kind: "${kind}", value: "${value}" };</script>\n` +
    `  <script src="tags.js"></script>\n` +
    `  <script src="app.js"></script>\n` +
    `</body>\n</html>\n`
  );
}

/* ---------------- Homepage ---------------- */
function chipRow(items) {
  return items.map(([t, h]) => `        <a class="chip" href="${h}">${t}</a>`).join("\n");
}

function homePage() {
  return (
    head("The Green Table — Vegan Recipes", "Delicious plant-based recipes — quick 30-minute meals, easy crock pot dinners, desserts, and more.", "", "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=70") + "\n" +
    `<body>\n\n` +
    NAV + "\n\n" +
    `  <section class="hero" id="top">\n` +
    `    <div class="hero-content">\n` +
    `      <h1>100% Plant-Based.<br>100% Delicious.</h1>\n` +
    `      <p>Over 200 easy vegan recipes — quick weeknight dinners, slow-cooker comfort food, desserts, smoothies, and more.</p>\n` +
    `      <div class="hero-buttons">\n` +
    `        <a class="btn btn-primary" href="#thirty-minute">⏱️ 30-Minute Meals</a>\n` +
    `        <a class="btn btn-secondary" href="#crock-pot">🍲 Crock Pot Meals</a>\n` +
    `        <a class="btn btn-secondary" href="dessert.html">🍰 Desserts</a>\n` +
    `      </div>\n` +
    `      <div class="search-wrap">\n` +
    `        <input type="search" id="recipe-search" placeholder="Search NNN recipes — try “curry”, “chocolate”, “tacos”…" aria-label="Search recipes">\n` +
    `        <span id="search-count" aria-live="polite"></span>\n` +
    `      </div>\n` +
    `    </div>\n` +
    `  </section>\n\n` +
    `  <section class="browse">\n` +
    `    <div class="browse-inner">\n` +
    `      <h2>Browse by Category</h2>\n      <div class="chips">\n${chipRow(CATEGORIES)}\n      </div>\n` +
    `      <h2>Browse by Ingredient</h2>\n      <div class="chips">\n${chipRow(INGREDIENTS)}\n      </div>\n` +
    `      <h2>Browse by Diet</h2>\n      <div class="chips">\n${chipRow(DIETS)}\n      </div>\n` +
    `    </div>\n` +
    `  </section>\n\n` +
    `  <main>\n` +
    `    <section class="recipe-section" id="thirty-minute">\n` +
    `      <div class="section-head">\n        <h2>⏱️ 30-Minute Meals</h2>\n        <p>Weeknight winners — on the table fast, no shortcuts on flavor.</p>\n      </div>\n` +
    `      <div class="recipe-grid" data-category="quick"></div>\n    </section>\n\n` +
    `    <section class="recipe-section alt" id="crock-pot">\n` +
    `      <div class="section-head">\n        <h2>🍲 Crock Pot Vegan Meals</h2>\n        <p>Set it, forget it, and come home to dinner. Slow cooker comfort food, all plants.</p>\n      </div>\n` +
    `      <div class="recipe-grid" data-category="crockpot"></div>\n    </section>\n\n` +
    `    <section class="recipe-section" id="all-recipes">\n` +
    `      <div class="section-head">\n        <h2>🥗 Favorites &amp; Vegan Desserts</h2>\n        <p>Reader favorites from breakfast to dessert — including 100% plant-based sweets.</p>\n      </div>\n` +
    `      <div class="recipe-grid" data-category="favorites"></div>\n    </section>\n` +
    `  </main>\n\n` +
    MODAL + "\n\n" +
    FOOTER + "\n\n" +
    DATA_SCRIPTS + "\n" +
    `  <script src="tags.js"></script>\n` +
    `  <script src="app.js"></script>\n` +
    `</body>\n</html>\n`
  );
}

/* ---------------- Sitemap + robots.txt ---------------- */
function writeSitemap() {
  const pages = [""].concat(COLLECTIONS.map((c) => c[2])); // "" = homepage
  const urls = pages
    .map((p) => `  <url>\n    <loc>${SITE_URL}/${p}</loc>\n    <changefreq>weekly</changefreq>\n  </url>`)
    .join("\n");
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls + "\n</urlset>\n";
  fs.writeFileSync(path.join(ROOT, "sitemap.xml"), xml);
}

function writeRobots() {
  const txt =
    `User-agent: *\n` +
    `Allow: /\n\n` +
    `Sitemap: ${SITE_URL}/sitemap.xml\n`;
  fs.writeFileSync(path.join(ROOT, "robots.txt"), txt);
}

/* ---------------- Write everything ---------------- */
let written = 0;
fs.writeFileSync(path.join(ROOT, "index.html"), homePage());
written++;
COLLECTIONS.forEach((c) => {
  fs.writeFileSync(path.join(ROOT, c[2]), collectionPage(...c));
  written++;
});
writeSitemap();
writeRobots();
console.log("Generated " + written + " pages, plus sitemap.xml and robots.txt.");
