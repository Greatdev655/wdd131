// hamburger
const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");
const getStartedBtn = document.querySelector(".btn-primary");
const portfolioBtn = document.querySelector(".btn-outline");

getStartedBtn.addEventListener("click", () => {
  window.location.href = "contact.html";
});

portfolioBtn.addEventListener("click", () => {
  window.location.href = "portfolio.html";
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
});
navList.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
  });
});

// filter tabs
const tabs = document.querySelectorAll(".filter-tab");
const cards = document.querySelectorAll(".service-card");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    const filter = tab.dataset.filter;
    cards.forEach((card) => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// FAQ accordion
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    const isOpen = item.classList.contains("open");
    document
      .querySelectorAll(".faq-item")
      .forEach((i) => i.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  });
});
