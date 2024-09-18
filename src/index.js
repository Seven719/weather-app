import { fetchWeatherData } from "./app/weather";

const searchInput = document.getElementById("search-input");
const weatherForm = document.getElementById("weather-form");
const weatherImage = document.getElementById("weather-image");

const imagesPath =
  "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/2nd%20Set%20-%20Color";

weatherForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let data = await fetchWeatherData(searchInput.value, "metric");

  weatherImage.src = `${imagesPath}/${data.icon}.svg`;
});
