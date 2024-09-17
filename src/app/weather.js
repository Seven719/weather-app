const API_KEY = "CYAVPQ3GA7FLJK9A8GQV4DEYW";
const WEB_LINK =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";

let location = "London";

export const getWeather = async () => {
  try {
    const response = await fetch(`${WEB_LINK}/${location}?key=${API_KEY}`, {
      mode: "cors",
    });
    const data = await response.json();

    return data;
  } catch (err) {
    alert("Something went wrong while fetching the data. Error: " + err);
  }
};
