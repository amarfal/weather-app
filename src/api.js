const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const GIPHY_API_KEY = process.env.GIPHY_API_KEY;

const WEATHER_BASE_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
const GIPHY_BASE_URL = "https://api.giphy.com/v1/gifs/search";

export async function fetchWeatherData(location) {
  try {
    const response = await fetch(
      `${WEATHER_BASE_URL}/${encodeURIComponent(location)}?key=${WEATHER_API_KEY}&unitGroup=metric`,
    );

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch weather data: ${error.message}`);
  }
}

export async function fetchWeatherGif(weatherCondition) {
  const condition = weatherCondition.toLowerCase();

  if (
    condition.includes("snow") ||
    condition.includes("snowy") ||
    condition.includes("snowing")
  ) {
    return "https://media.giphy.com/media/6YNgoTEPs6vZe/giphy.gif";
  }

  if (
    condition.includes("thunder") ||
    condition.includes("lightning") ||
    condition.includes("storm")
  ) {
    return "https://media.giphy.com/media/Ch1zCx8tu6DQY/giphy.gif";
  }

  if (
    condition.includes("rain") ||
    condition.includes("rainy") ||
    condition.includes("drizzle")
  ) {
    return "https://media.giphy.com/media/129BtnUUD6Lrzi/giphy.gif";
  }

  if (condition.includes("sunny") || condition.includes("clear")) {
    return "https://media.giphy.com/media/HvYdoLbPqSdNu/giphy.gif";
  }

  return "https://media.giphy.com/media/HvYdoLbPqSdNu/giphy.gif";
}
