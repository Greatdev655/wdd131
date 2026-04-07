const navLinks = document.querySelector("nav ul"); // ✅ single element
const nav = document.querySelector("nav"); // ✅ defined
const contactBtn = document.getElementById("contact_btn");
const portfolioBtn = document.getElementById("portfolio_btn");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active"); // ✅ now works on a single element
});

contactBtn.addEventListener("click", () => {
  window.location.href = "contact.html";
});

portfolioBtn.addEventListener("click", () => {
  window.location.href = "portfolio.html";
});

nav.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (!link) return;
  document
    .querySelectorAll("nav ul li a")
    .forEach((a) => a.classList.remove("active_link"));
  link.classList.add("active_link"); // ✅ matches your CSS class name
});
