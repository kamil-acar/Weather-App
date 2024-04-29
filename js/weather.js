import fetcWeatherData from "./api.js";
import { updateUI } from "./ui.js";

//   Selecting HTML Elements
const selectors = {
  city: document.querySelector(".weather-city"),
  datetime: document.querySelector(".weather-datetime"),
  weatherForecast: document.querySelector(".weather-forecast"),
  weatherTemperature: document.querySelector(".weather-temperature"),
  weatherIcon: document.querySelector(".weather-icon"),
  weatherMinMax: document.querySelector(".weather-minmax"),
  weatherRealfeel: document.querySelector(".weather-realfeel"),
  weatherHumidity: document.querySelector(".weather-humidity"),
  weatherWind: document.querySelector(".weather-wind"),
  weatherPressure: document.querySelector(".weather-pressure"),
  searchInput: document.querySelector(".weather-searchform"),
  searchForm: document.querySelector(".weather-search"),
  unitCelsius: document.querySelector(".weather-units-celcius"),
  unitFarenheit: document.querySelector(".weather-units-farenheit"),
  windMetric: document.querySelector(".wind-metric"),
  windImperial: document.querySelector(".wind-imperial"),
  aktif: document.querySelector("#aktif"),
  pasif: document.querySelector("#pasif")
}

let currCity = "London"
let units = "metric"

export async function getWeather() {
  const data = await fetcWeatherData(currCity, units)
  updateUI(data, selectors)
}

selectors.searchForm.addEventListener("submit", async (e) => {
  e.preventDefault()
  currCity = selectors.searchInput.value
  // console.log(curCity)
  await getWeather()
  selectors.searchInput.value = ""
})

// fahrenheitToCelsius
selectors.unitCelsius.addEventListener("click", () => {
  if (units !== "metric") {
    units = "metric";
    getWeather();
  }
});
// celsiusToFahrenheit
selectors.unitFarenheit.addEventListener("click", () => {
  if (units !== "imperial") {
    units = "imperial";
    getWeather();
  }
});

document.body.addEventListener("load", async () => {
  await getWeather();
});