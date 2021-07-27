let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let h2 = document.querySelector("h2");
h2.innerHTML = `${day} ${hours}:${minutes}`;

function displayWeatherCondition(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = `${temperature}`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
}

function searchCity(event) {
  event.preventDefault();
  let apiKey = "12f35b27492677297a3092d359a9b88f";
  let unit = "metric";
  let cityName = document.querySelector("#city-text").value;
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${unit}
`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
let cityText = document.querySelector("#city-search");
cityText.addEventListener("submit", searchCity);
let h1 = document.querySelector("h1");

// week 4
function displayCelcius(event) {
  event.preventDefault();
}

function displayFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#current-temp");
  let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = "☁ 57°";
}
function displayCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#current-temp");
  let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = "☁ 14°";
}
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", displayFahrenheit);

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", displayCelsius);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = `${temperature}`;
}

function locatePosition(position) {
  let longitude = position.coords.longitude;
  let latitude = position.coords.latitude;
  let apiKey = "12f35b27492677297a3092d359a9b88f";
  let unit = "metric";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function findLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(locatePosition);
}

let currentButton = document.querySelector("#current-button");
currentButton.addEventListener("click", findLocation);
