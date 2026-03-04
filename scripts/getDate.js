const currentYear = document.getElementById("current-year");
const modifiedData = document.getElementById("lastModified")

const today = new Date();

modifiedData.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;

currentYear.innerHTML = today.getFullYear();
const lastModified = new Date(document.lastModified);

modifiedData.innerHTML = `Last modified <span class="highlight">  ${lastModified.toDateString()}
</span>`;