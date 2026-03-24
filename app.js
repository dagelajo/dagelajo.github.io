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

const formsWithRequiredFields = document.querySelectorAll("form");

formsWithRequiredFields.forEach((form) => {
  form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      form.classList.add("show-invalid");
      form.reportValidity();
    }
  });

  form.addEventListener("input", () => {
    if (form.classList.contains("show-invalid")) {
      form.checkValidity();
    }
  });
});

const modalTriggers = document.querySelectorAll("[data-modal-open]");
const modalCloseButtons = document.querySelectorAll("[data-modal-close]");
let activeModal = null;

const closeActiveModal = () => {
  if (!activeModal) {
    return;
  }
  activeModal.setAttribute("hidden", "");
  document.body.classList.remove("modal-open");
  activeModal = null;
};

modalTriggers.forEach((trigger) => {
  const openModal = () => {
    const modalId = trigger.getAttribute("data-modal-open");
    const modal = document.getElementById(modalId);
    if (!modal) {
      return;
    }
    modal.removeAttribute("hidden");
    document.body.classList.add("modal-open");
    activeModal = modal;
  };

  trigger.addEventListener("click", openModal);
  trigger.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal();
    }
  });
});

modalCloseButtons.forEach((button) => {
  button.addEventListener("click", closeActiveModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeActiveModal();
  }
});
