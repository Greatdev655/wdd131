const navLinks = document.querySelector("nav ul"); // ✅ single element
const nav = document.querySelector("nav"); // ✅ defined
const contactBtn = document.getElementById("contact_btn");
const portfolioBtn = document.getElementById("portfolio_btn");
const hamburger = document.querySelector(".hamburger");
const heroText = document.getElementById("hero_text");
const learnMoreBtn = document.getElementById("learn_more_btn");
const contactSubmitBtn = document.getElementById("contact_submit_btn");
const contactForm = document.getElementById("contact-form");
const currentYear = document.getElementById("current-year");
const modifiedData = document.getElementById("lastModified");

const today = new Date();

currentYear.innerHTML = today.getFullYear();
modifiedData.innerHTML = ` <span class="highlight">${today.toLocaleDateString()}</span>`;

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

learnMoreBtn.addEventListener("click", () => {
  window.location.href = "about.html";
});

nav.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (!link) return;
  document
    .querySelectorAll("nav ul li a")
    .forEach((a) => a.classList.remove("active_link"));
  link.classList.add("active_link"); // ✅ matches your CSS class name
});

// contact form submission
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    date: new Date().toLocaleString(),
  };
  // get existing submissions from localStorage or initialize an empty array
  let submissions =
    JSON.parse(localStorage.getItem("contactSubmissions")) || [];
  submissions.push(formData);

  // save updated submissions back to localStorage
  localStorage.setItem("contactSubmissions", JSON.stringify(submissions));

  alert("Thank you for reaching out! We will get back to you soon.");

  // reset form
  this.closest("form").reset();
});
// dynamic text animation

const messages = [
  "Branding, UI/UX, and website design for ambitious businesses.",
  "We build brands.",
  "We design websites.",
  "We grow your business.",
];

document.addEventListener("DOMContentLoaded", () => {
  let messageIndex = 0;
  let charIndex = 0;

  function typeEffect() {
    if (charIndex < messages[messageIndex].length) {
      heroText.textContent += messages[messageIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 50); // typing speed
    } else {
      setTimeout(eraseEffect, 1500); // pause before deleting
    }
  }

  function eraseEffect() {
    if (charIndex > 0) {
      heroText.textContent = messages[messageIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseEffect, 30);
    } else {
      messageIndex = (messageIndex + 1) % messages.length;
      setTimeout(typeEffect, 300);
    }
  }

  typeEffect();
});
