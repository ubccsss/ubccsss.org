// TCF landing page (/tcf/): navbar state, company filter/sort, interactive floor plan.
document.addEventListener("DOMContentLoaded", () => {
  // Navbar: transparent over the hero, solid once scrolled or when the mobile menu is open.
  const nav = document.getElementById("tcfNav");
  const navLinks = document.getElementById("tcfNavLinks");
  if (nav) {
    const updateNav = () => nav.classList.toggle("tcf-nav--solid", window.scrollY > 40);
    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });
    if (navLinks) {
      navLinks.addEventListener("show.bs.collapse", () => nav.classList.add("is-open"));
      navLinks.addEventListener("hidden.bs.collapse", () => nav.classList.remove("is-open"));
      navLinks.querySelectorAll(".nav-link").forEach((link) =>
        link.addEventListener("click", () => {
          if (navLinks.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(navLinks).hide();
          }
        })
      );
    }
  }

  // Companies: filter by sector, sort, and show the first few until expanded.
  const grid = document.getElementById("tcfCompanyGrid");
  if (grid) {
    const PREVIEW_COUNT = 12;
    const cols = Array.from(grid.querySelectorAll(".tcf-company-col"));
    const chips = document.querySelectorAll(".tcf-chip");
    const sortSelect = document.getElementById("tcfSort");
    const showAllBtn = document.getElementById("tcfShowAll");
    const noResults = document.getElementById("tcfNoResults");
    let activeSector = "";
    let showAll = false;

    const render = () => {
      const sortBy = sortSelect ? sortSelect.value : "name";
      cols.sort((a, b) =>
        sortBy === "booth"
          ? Number(a.dataset.booth) - Number(b.dataset.booth)
          : a.dataset.name.localeCompare(b.dataset.name)
      );
      cols.forEach((col) => grid.appendChild(col));

      let shown = 0;
      cols.forEach((col) => {
        const matches = !activeSector || col.dataset.sectors.split("|").includes(activeSector);
        const visible = matches && (showAll || activeSector || shown < PREVIEW_COUNT);
        col.classList.toggle("is-hidden", !visible);
        if (visible) shown++;
      });

      if (noResults) noResults.hidden = shown > 0;
      if (showAllBtn) showAllBtn.hidden = Boolean(activeSector);
    };

    chips.forEach((chip) =>
      chip.addEventListener("click", () => {
        activeSector = chip.dataset.sector;
        chips.forEach((c) => {
          c.classList.toggle("is-active", c === chip);
          c.setAttribute("aria-pressed", c === chip ? "true" : "false");
        });
        render();
      })
    );
    if (sortSelect) sortSelect.addEventListener("change", render);
    if (showAllBtn) {
      const label = showAllBtn.innerHTML;
      showAllBtn.addEventListener("click", () => {
        showAll = !showAll;
        showAllBtn.setAttribute("aria-expanded", String(showAll));
        showAllBtn.innerHTML = showAll ? '<i class="bi-grid"></i> Show fewer companies' : label;
        render();
      });
    }
    render();
  }

  // Floor plan: clicking a booth pin shows that company's card.
  const floorplan = document.getElementById("tcfFloorplan");
  const boothCard = document.getElementById("tcfBoothCard");
  if (floorplan && boothCard) {
    const pins = floorplan.querySelectorAll(".tcf-pin");
    let activePin = null;

    const closeCard = () => {
      boothCard.hidden = true;
      boothCard.replaceChildren();
      if (activePin) {
        activePin.classList.remove("is-active");
        activePin.setAttribute("aria-expanded", "false");
        activePin.focus();
      }
      activePin = null;
    };

    pins.forEach((pin) => {
      pin.setAttribute("aria-expanded", "false");
      pin.addEventListener("click", () => {
        if (activePin === pin) {
          closeCard();
          return;
        }
        const template = document.getElementById(`tcf-booth-${pin.dataset.booth}`);
        if (!template) return;
        if (activePin) {
          activePin.classList.remove("is-active");
          activePin.setAttribute("aria-expanded", "false");
        }
        activePin = pin;
        pin.classList.add("is-active");
        pin.setAttribute("aria-expanded", "true");
        boothCard.replaceChildren(template.content.cloneNode(true));
        boothCard.hidden = false;
        boothCard.querySelector(".tcf-booth-card__close").addEventListener("click", closeCard);
        boothCard.scrollIntoView({ block: "nearest", behavior: "smooth" });
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && activePin) closeCard();
    });
  }
});
