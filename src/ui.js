import { formatTemperature, formatDate, formatFullDate } from "./weatherProcessor.js";

export function renderCurrentWeather(data, unit) {
  const currentWeatherSection = document.getElementById("current-weather");

  currentWeatherSection.innerHTML = `
    <div class="weather-card">
      <h2 class="location-name">${data.location}</h2>
      <h3 class="section-title">CURRENT WEATHER</h3>
      
      <div class="weather-info">
        <div class="info-row">
          <span class="info-label">Temperature:</span>
          <span class="info-value">${formatTemperature(data.current.temp, unit)}</span>
        </div>
        
        <div class="info-row">
          <span class="info-label">Feels Like:</span>
          <span class="info-value">${formatTemperature(data.current.feelsLike, unit)}</span>
        </div>
        
        <div class="info-row">
          <span class="info-label">Humidity:</span>
          <span class="info-value">${data.current.humidity.toFixed(1)} %</span>
        </div>
        
        <div class="info-row">
          <span class="info-label">Wind Speed:</span>
          <span class="info-value">${data.current.windSpeed.toFixed(1)} km/h</span>
        </div>
        
        <div class="info-row">
          <span class="info-label">${data.current.condition}</span>
        </div>
        
        <div class="info-row">
          <span class="info-label">${formatFullDate(data.current.datetime)}</span>
        </div>
        
        <div class="weather-description">
          ${data.current.description}
        </div>
      </div>
    </div>
  `;
}

export function renderForecast(forecastData, unit) {
  const forecastSection = document.getElementById("forecast");

  const forecastCards = forecastData
    .map(
      (day) => `
    <div class="forecast-card">
      <div class="forecast-date">${formatDate(day.date)}</div>
      <div class="forecast-condition">${day.condition}</div>
      <div class="forecast-temps">
        <span class="temp-high">${formatTemperature(day.high, unit)}</span>
        <span class="temp-divider">/</span>
        <span class="temp-low">${formatTemperature(day.low, unit)}</span>
      </div>
      <div class="forecast-precip">Precip: ${day.precipChance}%</div>
    </div>
  `,
    )
    .join("");

  forecastSection.innerHTML = forecastCards;
}

export function setBackgroundGif(gifUrl) {
  const gifBackground = document.getElementById("gif-background");

  if (gifUrl) {
    gifBackground.style.backgroundImage = `url('${gifUrl}')`;
    gifBackground.style.opacity = "1";
  } else {
    gifBackground.style.backgroundImage = "none";
    gifBackground.style.opacity = "0";
  }
}

export function showError(message) {
  const errorContainer = document.getElementById("error-message");
  errorContainer.textContent = message;
  errorContainer.style.display = "block";

  setTimeout(() => {
    errorContainer.style.display = "none";
  }, 5000);
}

export function clearError() {
  const errorContainer = document.getElementById("error-message");
  errorContainer.style.display = "none";
  errorContainer.textContent = "";
}

export function clearDisplay() {
  document.getElementById("current-weather").innerHTML = "";
  document.getElementById("forecast").innerHTML = "";
  setBackgroundGif(null);
}

