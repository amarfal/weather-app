export function processWeatherData(rawData) {
  const currentConditions = rawData.currentConditions;
  const forecast = rawData.days;
  const currentDay = rawData.days[0];

  const isNightTime = checkIfNightTime(
    currentConditions.datetime,
    currentDay.sunrise,
    currentDay.sunset,
  );

  return {
    location: rawData.resolvedAddress,
    isNight: isNightTime,
    current: {
      temp: currentConditions.temp,
      feelsLike: currentConditions.feelslike,
      humidity: currentConditions.humidity,
      windSpeed: currentConditions.windspeed,
      condition: currentConditions.conditions,
      icon: currentConditions.icon,
      datetime: currentConditions.datetime,
      description: rawData.description,
    },
    forecast: forecast.slice(0, 7).map((day) => ({
      date: day.datetime,
      high: day.tempmax,
      low: day.tempmin,
      condition: day.conditions,
      precipChance: day.precipprob,
      icon: day.icon,
    })),
  };
}

function checkIfNightTime(currentTime, sunrise, sunset) {
  const parseTime = (timeStr) => {
    const [hours, minutes] = timeStr.split(":").map(Number);
    return hours * 60 + minutes;
  };

  const currentMinutes = parseTime(currentTime);
  const sunriseMinutes = parseTime(sunrise);
  const sunsetMinutes = parseTime(sunset);

  return currentMinutes < sunriseMinutes || currentMinutes > sunsetMinutes;
}

export function convertToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

export function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

export function formatTemperature(temp, unit) {
  const value = unit === "F" ? convertToFahrenheit(temp) : temp;
  return `${value.toFixed(1)} °${unit}`;
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { weekday: "short", month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

export function formatFullDate(dateString) {
  const date = new Date(dateString);
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}
