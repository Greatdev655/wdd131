const currentYear = document.getElementById("current-year");
const modifiedData = document.getElementById("lastModified");

const today = new Date();

currentYear.innerHTML = today.getFullYear();
modifiedData.innerHTML = ` <span class="highlight">${today.toLocaleDateString()}</span>`;
