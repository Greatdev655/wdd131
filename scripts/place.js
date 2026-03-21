const area = document.getElementById("area");
const population = document.getElementById("population");
const capital = document.getElementById("capital");
const language = document.getElementById("language");
const currency = document.getElementById("currency");
const timeZone = document.getElementById("time-zone");
const internet = document.getElementById("internet");
const temperature = document.getElementById("temp");
const condition = document.getElementById("condition");
const wind = document.getElementById("wind");
const windChill = document.getElementById("wind-chill");
const currentYear = document.getElementById("current-year");
const modifiedData = document.getElementById("lastModified");

const today = new Date();

const nigeriaData = {
    area:" <b> Area:</b>  923,768 km²",
    population: " <b> Population: </b> 232 million",
    capital: " <b> Capital: </b> Abuja",
    languages: "<b> Languages:</b> multi-lingual",
    TimeZone: " <b> Time Zones: </b> WAT(UTC+1)",
    internet: "<b> Internet TLD: </b> .ng" 

}

const nigeriaWeatherData = {
    temperature:" <b> Temp:</b> 30°C",
    condition:" <b> condition: </b> Partly Cloudy",
    wind: " <b> Wind: </b> 12km/h",
    windChill: " <b> Windchill:</b> NA"
}

// write in html body using textcontent 

area.innerHTML = nigeriaData.area;
population.innerHTML = nigeriaData.population;
capital.innerHTML = nigeriaData.capital;
language.innerHTML = nigeriaData.languages;
timeZone.innerHTML = nigeriaData.TimeZone;
internet.innerHTML = nigeriaData.internet;

//  weather data

temperature.innerHTML = nigeriaWeatherData.temperature;
condition.innerHTML = nigeriaWeatherData.condition;
wind.innerHTML = nigeriaWeatherData.wind;
windChill.innerHTML = nigeriaWeatherData.windChill;


// footer data 

modifiedData.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;

currentYear.innerHTML = today.getFullYear();
const lastModified = new Date(document.lastModified);

modifiedData.innerHTML = ` <span class="highlight">  ${lastModified.toDateString()}
</span>`;





