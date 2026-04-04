const currentYear = document.getElementById("current-year");
const modifiedData = document.getElementById("lastModified");
const selectProduct = document.getElementById("product");

const today = new Date();

modifiedData.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;

currentYear.innerHTML = today.getFullYear();
// const lastModified = new Date(document.lastModified);

// modifiedData.innerHTML = `<span class="highlight">  ${lastModified.toDateString()}
// </span>`;

// Populate data/product for the form

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];

products.forEach((product) => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  // append option to select product
  selectProduct.appendChild(option);
});

// localStorage.setItem("products", JSON.stringify(products));

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  // Mark that a review was just submitted
  localStorage.setItem("reviewSubmitted", "true");
});
