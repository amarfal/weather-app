import {
  formatTemperature,
  formatDate,
  formatFullDate,
  getWeatherEmoji,
} from "./weatherProcessor.js";

export function setTheme(isNight) {
  const body = document.body;
  if (isNight) {
    body.classList.add("night-mode");
  } else {
    body.classList.remove("night-mode");
  }
}

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
          <span class="info-label">${getWeatherEmoji(data.current.condition)} ${data.current.condition}</span>
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

export function renderForecastDayAsCurrent(location, day, unit) {
  const currentWeatherSection = document.getElementById("current-weather");

  const avgTemp = (day.high + day.low) / 2;

  currentWeatherSection.innerHTML = `
    <div class="weather-card">
      <h2 class="location-name">${location}</h2>
      <h3 class="section-title">FORECAST FOR ${formatFullDate(day.date).toUpperCase()}</h3>
      
      <div class="weather-info">
        <div class="info-row">
          <span class="info-label">High Temperature:</span>
          <span class="info-value">${formatTemperature(day.high, unit)}</span>
        </div>
        
        <div class="info-row">
          <span class="info-label">Low Temperature:</span>
          <span class="info-value">${formatTemperature(day.low, unit)}</span>
        </div>
        
        <div class="info-row">
          <span class="info-label">Humidity:</span>
          <span class="info-value">${day.humidity.toFixed(1)} %</span>
        </div>
        
        <div class="info-row">
          <span class="info-label">Wind Speed:</span>
          <span class="info-value">${day.windSpeed.toFixed(1)} km/h</span>
        </div>
        
        <div class="info-row">
          <span class="info-label">${getWeatherEmoji(day.condition)} ${day.condition}</span>
        </div>
        
        <div class="info-row">
          <span class="info-label">Precipitation Chance: ${day.precipChance}%</span>
        </div>
        
        <div class="weather-description">
          ${day.description}
        </div>
      </div>
    </div>
  `;
}

export function renderForecast(
  forecastData,
  unit,
  onDayClick,
  activeIndex = null,
) {
  const forecastSection = document.getElementById("forecast");

  const forecastCards = forecastData
    .map(
      (day, index) => `
    <div class="forecast-card ${activeIndex === index ? "active" : ""}" data-index="${index}">
      <div class="forecast-date">${formatDate(day.date)}</div>
      <div class="forecast-emoji">${getWeatherEmoji(day.condition)}</div>
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

  const cards = forecastSection.querySelectorAll(".forecast-card");
  cards.forEach((card, index) => {
    card.addEventListener("click", () => onDayClick(index));
  });
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
