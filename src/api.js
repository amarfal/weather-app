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

  const weatherGifs = {
    sunny: "https://media.giphy.com/media/HvYdoLbPqSdNu/giphy.gif",
    clear: "https://media.giphy.com/media/HvYdoLbPqSdNu/giphy.gif",
    rain: "https://media.giphy.com/media/129BtnUUD6Lrzi/giphy.gif",
    rainy: "https://media.giphy.com/media/129BtnUUD6Lrzi/giphy.gif",
    drizzle: "https://media.giphy.com/media/129BtnUUD6Lrzi/giphy.gif",
    thunderstorm: "https://media.giphy.com/media/Ch1zCx8tu6DQY/giphy.gif",
    lightning: "https://media.giphy.com/media/Ch1zCx8tu6DQY/giphy.gif",
    storm: "https://media.giphy.com/media/Ch1zCx8tu6DQY/giphy.gif",
    snow: "https://media.giphy.com/media/6YNgoTEPs6vZe/giphy.gif",
    snowy: "https://media.giphy.com/media/6YNgoTEPs6vZe/giphy.gif",
    snowing: "https://media.giphy.com/media/6YNgoTEPs6vZe/giphy.gif",
  };

  for (const [key, gifUrl] of Object.entries(weatherGifs)) {
    if (condition.includes(key)) {
      return gifUrl;
    }
  }

  return "https://media.giphy.com/media/HvYdoLbPqSdNu/giphy.gif";
}
