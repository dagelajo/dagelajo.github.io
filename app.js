const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("[data-nav]");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

const filterButtons = document.querySelectorAll("[data-filter]");
const bikeCards = document.querySelectorAll("[data-bike-type]");

if (filterButtons.length > 0 && bikeCards.length > 0) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.getAttribute("data-filter");

      filterButtons.forEach((node) => node.classList.remove("active"));
      button.classList.add("active");

      bikeCards.forEach((card) => {
        const type = card.getAttribute("data-bike-type");
        if (selected === "all" || selected === type) {
          card.removeAttribute("hidden");
        } else {
          card.setAttribute("hidden", "");
        }
      });
    });
  });
}
