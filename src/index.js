import { fetchWeatherData } from "./app/weather";

const searchInput = document.getElementById("search-input");
const weatherForm = document.getElementById("weather-form");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(fetchWeatherData(searchInput.value, "metric"));
});
