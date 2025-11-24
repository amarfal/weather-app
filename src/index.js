import "./style.css";
import { fetchWeatherData, fetchWeatherGif } from "./api.js";
import { processWeatherData } from "./weatherProcessor.js";
import {
  renderCurrentWeather,
  renderForecast,
  renderForecastDayAsCurrent,
  setBackgroundGif,
  setTheme,
  showError,
  clearError,
  clearDisplay,
} from "./ui.js";

let currentUnit = "F";
let currentWeatherData = null;
let selectedDayIndex = null;

async function loadWeather(location) {
  try {
    clearError();

    const rawData = await fetchWeatherData(location);
    currentWeatherData = processWeatherData(rawData);
    selectedDayIndex = null;

    const gifUrl = await fetchWeatherGif(currentWeatherData.current.condition);

    setTheme(currentWeatherData.isNight);
    renderCurrentWeather(currentWeatherData, currentUnit);
    renderForecast(
      currentWeatherData.forecast,
      currentUnit,
      handleDayClick,
      selectedDayIndex,
    );
    setBackgroundGif(gifUrl);
  } catch (error) {
    showError(`Unable to fetch weather data. Please try again.`);
    clearDisplay();
  }
}

async function handleDayClick(dayIndex) {
  if (!currentWeatherData) return;

  selectedDayIndex = dayIndex;
  const selectedDay = currentWeatherData.forecast[dayIndex];

  const gifUrl = await fetchWeatherGif(selectedDay.condition);

  renderForecastDayAsCurrent(
    currentWeatherData.location,
    selectedDay,
    currentUnit,
  );
  renderForecast(
    currentWeatherData.forecast,
    currentUnit,
    handleDayClick,
    selectedDayIndex,
  );
  setBackgroundGif(gifUrl);
}

function toggleTemperatureUnit() {
  currentUnit = currentUnit === "C" ? "F" : "C";

  const toggleButton = document.getElementById("unit-toggle");
  toggleButton.textContent = `°${currentUnit}`;

  if (currentWeatherData) {
    if (selectedDayIndex !== null) {
      const selectedDay = currentWeatherData.forecast[selectedDayIndex];
      renderForecastDayAsCurrent(
        currentWeatherData.location,
        selectedDay,
        currentUnit,
      );
    } else {
      renderCurrentWeather(currentWeatherData, currentUnit);
    }
    renderForecast(
      currentWeatherData.forecast,
      currentUnit,
      handleDayClick,
      selectedDayIndex,
    );
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
