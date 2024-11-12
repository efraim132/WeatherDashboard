"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
function getWeatherData(zipCode) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Zip code: ", zipCode);
        const apiKey = 'YOUR_API_KEY';
        const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`;
        try {
            const response = yield axios.get(url);
            const celsius = response.data.main.temp;
            const fahrenheit = celsius * 9 / 5 + 32;
            const condition = response.data.weather[0].main;
            return { celsius, fahrenheit, condition };
        }
        catch (error) {
            console.error('Error fetching weather data:', error);
            throw error;
        }
    });
}
function displayWeatherData(zipCode) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const weather = yield getWeatherData(98052);
            console.log(`Temperature: ${weather.celsius}°C / ${weather.fahrenheit}°F`);
            console.log(`Condition: ${weather.condition}`);
        }
        catch (error) {
            console.error('Failed to retrieve weather data.');
        }
    });
}
(_a = document.getElementById('weatherForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    const zipCodeInput = document.getElementById('zipCode');
    const errorMessage = document.getElementById('errorMessage');
    if (zipCodeInput) {
        const zipCode = zipCodeInput.value;
        try {
            const weatherData = yield getWeatherData(Number(zipCode));
            updateWeatherDisplay(weatherData, zipCode);
            if (errorMessage && !errorMessage.classList.contains('hidden')) {
                errorMessage.classList.add('hidden');
            }
        }
        catch (error) {
            if (errorMessage) {
                errorMessage.classList.remove('hidden');
            }
        }
    }
}));
function updateWeatherDisplay(weatherData, zip) {
    const weatherDisplay = document.getElementById('weatherDisplay');
    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const temperatureFElement = document.getElementById('temperatureF');
    const conditionElement = document.getElementById('condition');
    if (weatherDisplay && locationElement && temperatureElement && temperatureFElement && conditionElement) {
        locationElement.textContent = zip; // Replace with actual location if available
        temperatureElement.textContent = weatherData.celsius.toString();
        temperatureFElement.textContent = weatherData.fahrenheit.toString();
        conditionElement.textContent = weatherData.condition;
        weatherDisplay.classList.remove('hidden');
    }
}
