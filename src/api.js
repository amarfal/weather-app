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
  try {
    const searchTerm = `${weatherCondition} weather`;
    const response = await fetch(
      `${GIPHY_BASE_URL}?api_key=${GIPHY_API_KEY}&q=${encodeURIComponent(searchTerm)}&limit=1&rating=g`,
    );

    if (!response.ok) {
      throw new Error(`Giphy API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.data && data.data.length > 0) {
      return data.data[0].images.original.url;
    }

    return null;
  } catch (error) {
    console.error("Failed to fetch weather gif:", error);
    return null;
  }
}
