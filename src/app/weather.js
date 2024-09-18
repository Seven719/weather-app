const API_KEY = "CYAVPQ3GA7FLJK9A8GQV4DEYW";
const WEB_LINK =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";

export const fetchWeatherData = async (location, unitGroup) => {
  try {
    const response = await fetch(
      `${WEB_LINK}/${location}?unitGroup=${unitGroup}&key=${API_KEY}`,
      {
        mode: "cors",
      }
    );

    if (!response.ok) {
      throw new Error(`"${location}" was not found`);
    }

    const data = parseWeatherData(await response.json());

    return data;
  } catch (err) {
    alert("Something went wrong while fetching the data.\n" + err);

    return null;
  }
};

const parseWeatherData = (data) => {
  const {
    resolvedAddress: address,
    currentConditions: { temp, feelslike, humidity, windspeed },
    description,
  } = data;

  return { address, temp, feelslike, humidity, windspeed, description };
};
