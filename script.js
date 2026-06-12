// Renders recipe cards into each section, powers search, "show all", and the detail modal.
(function () {
  const PREVIEW_COUNT = 12;
  const grids = document.querySelectorAll(".recipe-grid");
  const overlay = document.getElementById("recipe-modal");
  const closeBtn = document.getElementById("modal-close");
  const searchInput = document.getElementById("recipe-search");
  const searchCount = document.getElementById("search-count");

  function buildCard(recipe) {
    const card = document.createElement("button");
    card.className = "recipe-card";
    card.type = "button";
    card.setAttribute("aria-label", `View recipe: ${recipe.title}`);
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

  // Render each section: first PREVIEW_COUNT visible, rest behind a "Show all" button.
  grids.forEach((grid) => {
    const category = grid.dataset.category;
    const recipes = RECIPES.filter((r) => r.category === category);

    recipes.forEach((recipe, i) => {
      const card = buildCard(recipe);
      if (i >= PREVIEW_COUNT) card.classList.add("extra", "collapsed");
      grid.appendChild(card);
    });

    if (recipes.length > PREVIEW_COUNT) {
      const moreBtn = document.createElement("button");
      moreBtn.className = "btn btn-secondary show-more";
      moreBtn.type = "button";
      moreBtn.textContent = `Show all ${recipes.length} recipes ↓`;
      moreBtn.addEventListener("click", () => {
        grid.querySelectorAll(".extra").forEach((c) => c.classList.remove("collapsed"));
        moreBtn.remove();
      });
      grid.insertAdjacentElement("afterend", moreBtn);
    }
  });

  // Live search across all sections.
  if (searchInput) {
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
          ? `${matches} recipe${matches === 1 ? "" : "s"} found`
          : "";
      }
    });
  }

  function openModal(recipe) {
    const img = document.getElementById("modal-img");
    img.src = recipe.img;
    img.alt = recipe.title;
    img.onerror = () => { img.style.display = "none"; };
    img.style.display = "";

    document.getElementById("modal-title").textContent = recipe.title;
    document.getElementById("modal-meta").textContent =
      `⏱ ${recipe.time}  ·  🍽 ${recipe.servings}`;
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

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.hidden) closeModal();
  });
})();
