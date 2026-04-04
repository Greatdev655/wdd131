const mainNav = document.querySelector(".nav");
const hamButton = document.querySelector("#menu");
const navLists = document.querySelectorAll(".nav-list a");
const currentYear = document.getElementById("current-year");
const modifiedData = document.getElementById("lastModified");
const oldTemples = document.getElementById("old");
const newTemples = document.getElementById("new");
const largeTemple = document.getElementById("large");
const smallTemple = document.getElementById("small");
const homePage = document.getElementById("home");

const today = new Date();

navLists.forEach((list) => {
  list.addEventListener("click", () => {
    // remove active from all
    navLists.forEach((list) => list.classList.remove("active"));
    //  add active state to clicked one

    list.classList.add("active");
  });
});

modifiedData.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;

currentYear.innerHTML = today.getFullYear();
const lastModified = new Date(document.lastModified);

modifiedData.innerHTML = `Last modified <span class="highlight">  ${lastModified.toDateString()}
</span>`;

hamButton.addEventListener("click", () => {
  mainNav.classList.toggle("show");
  hamButton.classList.toggle("show");
});

// create temple cards

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },

  // Add more temple objects here...
  {
    templeName: "Cebu City Philippines Temple",
    location: "Cebu City, Philippines",
    dedicated: "2010, October, 24",
    area: 29556,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/cebu-city-philippines-temple/cebu-city-philippines-temple-3999-thumb.jpg",
  },
  {
    templeName: "Kyiv Ukraine Temple",
    location: "Kyiv, Ukraine",
    dedicated: "2000, May, 20",
    area: 22184,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/134-Kyiv-Ukraine-Temple.jpg",
  },
  {
    templeName: "Quetzaltenango Guatemala Temple",
    location: "Quetzaltenango, Guatemala",
    dedicated: "2000, May, 20",
    area: 21085,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/quetzaltenango-guatemala-temple/quetzaltenango-guatemala-temple-15696-main.jpg",
  },
];

// dynamically add images

const container = document.querySelector(".img-container");

function createTempleCards(filteredTemples) {
  container.innerHTML = "";

  filteredTemples.forEach((temple) => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    card.classList.add("temple_card");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;

    img.src = temple.imageUrl;
    img.alt = `${temple.templeName} temple`;
    img.loading = "lazy";

    card.append(name, location, area, dedication, img);
    container.appendChild(card);
  });
}

createTempleCards(temples);

// homePage.addEventListener("click", ()=>{
//     createTempleCards(temples);
// });

// filtering temple array - for old temples

oldTemples.addEventListener("click", () => {
  const filtered = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(",")[0].trim());
    return year <= 1900;
  });

  createTempleCards(filtered);
});

// filtering temple array - for new temples

newTemples.addEventListener("click", () => {
  const filteredTemplesNew = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(",")[0].trim());
    return year >= 2000;
  });
  createTempleCards(filteredTemplesNew);
});

// filtering temple array - for large temples

largeTemple.addEventListener("click", () => {
  const filteredTemplesLarge = temples.filter((temple) => {
    return temple.area > 90000;
  });

  createTempleCards(filteredTemplesLarge);
});

// filtering temple array - for small temples
smallTemple.addEventListener("click", () => {
  const filteredTemplesSmall = temples.filter((temple) => temple.area < 10000);
  createTempleCards(filteredTemplesSmall);
});

homePage.addEventListener("click", () => {
  createTempleCards(temples);
});
