import { fetchWeatherData } from "./app/weather";

const searchInput = document.getElementById("search-input");
const weatherForm = document.getElementById("weather-form");
const weatherImage = document.getElementById("weather-image");

const temp = document.getElementById("temp");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const windspeed = document.getElementById("windspeed");
const city = document.getElementById("city");

const imagesPath =
  "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/2nd%20Set%20-%20Color";

const displayWeather = async () => {
  let data = await fetchWeatherData(searchInput.value, "metric");

  let address = data.address.split(", ");
  if (address.length >= 3) {
    city.textContent = address[0] + ", " + address[2];
  } else {
    city.textContent = data.address;
  }

  weatherImage.src = `${imagesPath}/${data.icon}.svg`;
  temp.textContent = `${data.temp}°C`;
  feelsLike.textContent = `Feels Like: ${data.feelslike}°C`;
  humidity.textContent = `Humidity: ${data.humidity}%`;
  windspeed.textContent = `Windspeed: ${data.windspeed}km/h`;
};

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  displayWeather();
});
