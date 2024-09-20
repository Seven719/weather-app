import { fetchWeatherData } from "./app/weather";

const searchInput = document.getElementById("search-input");
const weatherForm = document.getElementById("weather-form");
const weatherImage = document.getElementById("weather-image");

const temp = document.getElementById("temp");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const windspeed = document.getElementById("windspeed");

const imagesPath =
  "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/2nd%20Set%20-%20Color";

weatherForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let data = await fetchWeatherData(searchInput.value, "metric");

  weatherImage.src = `${imagesPath}/${data.icon}.svg`;
  temp.textContent = `${data.temp}°C`;
  feelsLike.textContent = `Feels Like: ${data.feelslike}°C`;
  humidity.textContent = `Humidity: ${data.humidity}%`;
  windspeed.textContent = `Windspeed: ${data.windspeed}km/h`;
});
