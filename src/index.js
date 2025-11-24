import "./style.css";
import { fetchWeatherData, fetchWeatherGif } from "./api.js";
import { processWeatherData } from "./weatherProcessor.js";
import {
  renderCurrentWeather,
  renderForecast,
  setBackgroundGif,
  setTheme,
  showError,
  clearError,
  clearDisplay,
} from "./ui.js";

let currentUnit = "C";
let currentWeatherData = null;

async function loadWeather(location) {
  try {
    clearError();

    const rawData = await fetchWeatherData(location);
    currentWeatherData = processWeatherData(rawData);

    const gifUrl = await fetchWeatherGif(currentWeatherData.current.condition);

    setTheme(currentWeatherData.isNight);
    renderCurrentWeather(currentWeatherData, currentUnit);
    renderForecast(currentWeatherData.forecast, currentUnit);
    setBackgroundGif(gifUrl);
  } catch (error) {
    showError(`Unable to fetch weather data. Please try again.`);
    clearDisplay();
  }
}

function toggleTemperatureUnit() {
  currentUnit = currentUnit === "C" ? "F" : "C";

  const toggleButton = document.getElementById("unit-toggle");
  toggleButton.textContent = `°${currentUnit}`;

  if (currentWeatherData) {
    renderCurrentWeather(currentWeatherData, currentUnit);
    renderForecast(currentWeatherData.forecast, currentUnit);
  }
}

function initializeApp() {
  const searchForm = document.getElementById("search-form");
  const locationInput = document.getElementById("location-input");
  const toggleButton = document.getElementById("unit-toggle");

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = locationInput.value.trim();

    if (location) {
      loadWeather(location);
    }
  });

  toggleButton.addEventListener("click", toggleTemperatureUnit);
}

document.addEventListener("DOMContentLoaded", initializeApp);
