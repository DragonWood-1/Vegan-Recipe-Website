// Shared app for The Green Table — runs on the homepage and every collection page.
// Responsibilities: derive meal/ingredient/diet tags, render recipe cards,
// power the detail modal, live search, "show all", and the mobile nav.
(function () {
  "use strict";

  // Attach meal/ingredient/diet tags (from tags.js) to every recipe once.
  RECIPES.forEach((r) => { r.tags = deriveTags(r); });

  /* ---------------------------------------------------------------
   * 2. Card + grid rendering
   * ------------------------------------------------------------- */
  const PREVIEW_COUNT = 12;
  const overlay = document.getElementById("recipe-modal");
  const closeBtn = document.getElementById("modal-close");

  function buildCard(recipe) {
    const card = document.createElement("button");
    card.className = "recipe-card";
    card.type = "button";
    card.setAttribute("aria-label", "View recipe: " + recipe.title);
    card.dataset.search = (
      recipe.title + " " + recipe.desc + " " + recipe.ingredients.join(" ")
    ).toLowerCase();

    const imgWrap = document.createElement("div");
    imgWrap.className = "card-img-wrap";

    const img = document.createElement("img");
    img.src = recipe.img;
    img.alt = recipe.title;
    img.loading = "lazy";
    img.addEventListener("error", () => {
      const fallback = document.createElement("div");
      fallback.className = "img-fallback";
      fallback.textContent = recipe.emoji;
      img.replaceWith(fallback);
    });

    const badge = document.createElement("span");
    badge.className = "time-badge";
    badge.textContent = "⏱ " + recipe.time;

    imgWrap.append(img, badge);

    const body = document.createElement("div");
    body.className = "card-body";

    const title = document.createElement("h3");
    title.textContent = recipe.title;

    const desc = document.createElement("p");
    desc.textContent = recipe.desc;

    const meta = document.createElement("span");
    meta.className = "card-meta";
    meta.textContent = recipe.servings;

    body.append(title, desc, meta);
    card.append(imgWrap, body);
    card.addEventListener("click", () => openModal(recipe));
    return card;
  }

  // Render recipes into a grid; collapse beyond PREVIEW_COUNT behind a button.
  function renderGrid(grid, recipes) {
    if (!recipes.length) {
      const empty = document.createElement("p");
      empty.className = "empty-msg";
      empty.textContent = "No recipes here yet — check back soon!";
      grid.replaceWith(empty);
      return;
    }
    recipes.forEach((recipe, i) => {
      const card = buildCard(recipe);
      if (i >= PREVIEW_COUNT) card.classList.add("extra", "collapsed");
      grid.appendChild(card);
    });
    if (recipes.length > PREVIEW_COUNT) {
      const moreBtn = document.createElement("button");
      moreBtn.className = "btn btn-secondary show-more";
      moreBtn.type = "button";
      moreBtn.textContent = "Show all " + recipes.length + " recipes ↓";
      moreBtn.addEventListener("click", () => {
        grid.querySelectorAll(".extra").forEach((c) => c.classList.remove("collapsed"));
        moreBtn.remove();
      });
      grid.insertAdjacentElement("afterend", moreBtn);
    }
  }

  // Homepage mode: one grid per category. Collection mode: a single filtered grid.
  if (window.COLLECTION) {
    const grid = document.querySelector(".recipe-grid");
    const { kind, value } = window.COLLECTION; // kind: meals|ingredients|diets
    const matches = RECIPES.filter((r) => r.tags[kind].includes(value));
    if (grid) renderGrid(grid, matches);
    const countEl = document.getElementById("collection-count");
    if (countEl) countEl.textContent = matches.length + " recipes";
  } else {
    document.querySelectorAll(".recipe-grid[data-category]").forEach((grid) => {
      renderGrid(grid, RECIPES.filter((r) => r.category === grid.dataset.category));
    });
  }

  /* ---------------------------------------------------------------
   * 3. Live search (scoped to whatever cards are on the page)
   * ------------------------------------------------------------- */
  const searchInput = document.getElementById("recipe-search");
  const searchCount = document.getElementById("search-count");
  if (searchInput) {
    const total = document.querySelectorAll(".recipe-card").length;
    if (/\bNNN\b/.test(searchInput.placeholder)) {
      searchInput.placeholder = searchInput.placeholder.replace("NNN", total);
    }
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();
      const searching = query.length > 0;
      document.body.classList.toggle("searching", searching);
      let matches = 0;
      document.querySelectorAll(".recipe-card").forEach((card) => {
        const hit = !searching || card.dataset.search.includes(query);
        card.classList.toggle("search-miss", !hit);
        if (searching && hit) matches++;
      });
      if (searchCount) {
        searchCount.textContent = searching
          ? matches + " recipe" + (matches === 1 ? "" : "s") + " found"
          : "";
      }
    });
  }

  /* ---------------------------------------------------------------
   * 4. Detail modal
   * ------------------------------------------------------------- */
  function openModal(recipe) {
    const img = document.getElementById("modal-img");
    img.src = recipe.img;
    img.alt = recipe.title;
    img.onerror = () => { img.style.display = "none"; };
    img.style.display = "";

    document.getElementById("modal-title").textContent = recipe.title;
    document.getElementById("modal-meta").textContent =
      "⏱ " + recipe.time + "  ·  🍽 " + recipe.servings;
    document.getElementById("modal-desc").textContent = recipe.desc;

    const ingredients = document.getElementById("modal-ingredients");
    ingredients.innerHTML = "";
    recipe.ingredients.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      ingredients.appendChild(li);
    });

    const steps = document.getElementById("modal-steps");
    steps.innerHTML = "";
    recipe.steps.forEach((step) => {
      const li = document.createElement("li");
      li.textContent = step;
      steps.appendChild(li);
    });

    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeModal() {
    overlay.hidden = true;
    document.body.style.overflow = "";
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (overlay) overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay && !overlay.hidden) closeModal();
  });

  /* ---------------------------------------------------------------
   * 5. Mobile nav toggle
   * ------------------------------------------------------------- */
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  }
})();
