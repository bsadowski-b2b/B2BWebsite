const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("is-open", !isOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navToggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    }
  });
}

document.querySelectorAll(".faq button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq");
    if (!item) return;

    const isOpen = item.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});

const partnerFilters = document.querySelectorAll(".partner-filter button");
const partnerCards = document.querySelectorAll(".partner-card");
const partnerDetailName = document.querySelector("#partner-detail-name");
const partnerDetailCopy = document.querySelector("#partner-detail-copy");

function updatePartnerDetail(card) {
  if (!card || !partnerDetailName || !partnerDetailCopy) return;

  partnerCards.forEach((item) => {
    item.classList.toggle("is-selected", item === card);
  });

  const name = card.dataset.name || card.textContent.trim();
  const documents = card.dataset.documents || "EDI documents, labels, and shipping workflows";

  partnerDetailName.textContent = name;
  partnerDetailCopy.textContent = `Build a Sage 100 workflow for ${name} requirements, including ${documents}, plus exception handling.`;
}

function applyPartnerFilter(filter) {
  let firstVisible = null;

  partnerCards.forEach((card) => {
    const categories = (card.dataset.category || "").split(" ");
    const isVisible = filter === "all" || categories.includes(filter);

    card.classList.toggle("is-hidden", !isVisible);
    card.setAttribute("aria-hidden", String(!isVisible));

    if (isVisible && !firstVisible) {
      firstVisible = card;
    }
  });

  const selected = document.querySelector(".partner-card.is-selected");
  if (!selected || selected.classList.contains("is-hidden")) {
    updatePartnerDetail(firstVisible);
  }
}

if (partnerFilters.length && partnerCards.length) {
  partnerFilters.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter || "all";

      partnerFilters.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });

      applyPartnerFilter(filter);
    });
  });

  partnerCards.forEach((card) => {
    card.addEventListener("click", () => updatePartnerDetail(card));
  });
}
