// Renders recipe cards into each section and wires up the detail modal.
(function () {
  const grids = document.querySelectorAll(".recipe-grid");
  const overlay = document.getElementById("recipe-modal");
  const closeBtn = document.getElementById("modal-close");

  function buildCard(recipe) {
    const card = document.createElement("button");
    card.className = "recipe-card";
    card.type = "button";
    card.setAttribute("aria-label", `View recipe: ${recipe.title}`);

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

  grids.forEach((grid) => {
    const category = grid.dataset.category;
    RECIPES.filter((r) => r.category === category).forEach((recipe) => {
      grid.appendChild(buildCard(recipe));
    });
  });

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
