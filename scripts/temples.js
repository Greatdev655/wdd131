const mainNav = document.querySelector(".nav");
const hamButton = document.querySelector("#menu");
const navList = document.querySelector("nav-list");
const currentYear = document.getElementById("current-year");
const modifiedData = document.getElementById("lastModified");

const today = new Date();



modifiedData.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;

currentYear.innerHTML = today.getFullYear();
const lastModified = new Date(document.lastModified);

modifiedData.innerHTML = `Last modified <span class="highlight">  ${lastModified.toDateString()}
</span>`;


hamButton.addEventListener("click", ()=>{
    mainNav.classList.toggle("show");
    hamButton.classList.toggle("show");
})

navList.addEventListener("click", ()=>{
    mainNav.classList.toggle("active")
    navList.classList.toggle("active");
})