const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("[data-nav]");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

const requestForm = document.querySelector("#repair-form");
if (requestForm) {
  requestForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(requestForm);
    const name = String(formData.get("name") || "").trim();
    const issue = String(formData.get("issue") || "").trim();
    const zip = String(formData.get("zip") || "").trim();
    const status = document.querySelector("#request-status");

    if (!name || !issue || !zip) {
      if (status) {
        status.textContent = "Please fill in name, zip code, and issue details.";
        status.classList.add("show");
      }
      return;
    }

    if (status) {
      status.textContent =
        "Request received. You should get a confirmation response shortly.";
      status.classList.add("show");
    }

    requestForm.reset();
  });
}

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = document.querySelector("#contact-status");
    if (status) {
      status.textContent =
        "Message sent. We will get back to you as soon as possible.";
      status.classList.add("show");
    }
    contactForm.reset();
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
