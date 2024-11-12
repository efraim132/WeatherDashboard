interface WeatherData {
    celsius: number;
    fahrenheit: number;
    condition: string;
}

async function getWeatherData(zipCode: number): Promise<WeatherData> {
    console.log("Zip code: ", zipCode);
    const apiKey = 'YOUR_API_KEY';
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(url);
        const celsius = response.data.main.temp;
        const fahrenheit = celsius * 9/5 + 32;
        const condition = response.data.weather[0].main;
        return { celsius, fahrenheit, condition };
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}

async function displayWeatherData(zipCode: string): Promise<void> {
    try {
        const weather = await getWeatherData(Number(zipCode));
        console.log(`Temperature: ${weather.celsius}°C / ${weather.fahrenheit}°F`);
        console.log(`Condition: ${weather.condition}`);
    } catch (error) {
        console.error('Failed to retrieve weather data.');
    }
}

document.getElementById('weatherForm')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const zipCodeInput = document.getElementById('zipCode') as HTMLInputElement;
    const errorMessage = document.getElementById('errorMessage');
    if (zipCodeInput) {
        const zipCode = zipCodeInput.value;
        try {
            const weatherData = await getWeatherData(Number(zipCode));
            updateWeatherDisplay(weatherData, zipCode);
            if(errorMessage && !errorMessage.classList.contains('hidden')) {
                errorMessage.classList.add('hidden');
            }
        } catch (error) {

            if (errorMessage) {
                errorMessage.classList.remove('hidden');
            }
        }
    }
});

function updateWeatherDisplay(weatherData: WeatherData, zip: string): void {
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

