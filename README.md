# ⛈ Weather Dashboard

This is a simple Weather Dashboard web application that allows users to enter a zip code to retrieve the current weather, including temperature and conditions like "Cloudy" or "Sunny." The project uses TypeScript, Axios for making API requests, and Tailwind CSS for styling.

## Features
- Users can enter a zip code to get real-time weather information.
- Displays temperature in Celsius and Fahrenheit.
- Displays weather conditions (e.g., "Rainy," "Clear").
- Styled using Tailwind CSS for a clean and modern look.

## Technologies Used
- **TypeScript**: For writing type-safe JavaScript code.
- **Tailwind CSS**: For responsive and modern UI styling.
- **Axios**: For making HTTP requests to the OpenWeather API.
- **Node.js/Express** (optional): For proxy server setup to handle API calls securely.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory with the following:
   ```
   OPENWEATHER_API_KEY=your_openweather_api_key_here
   ```

4. **Run a Proxy Server (Optional)**:
   If using a backend to secure your API key, set up and start the proxy server:
   ```bash
   node proxyServer.js
   ```

5. **Compile TypeScript**:
   ```bash
   npx tsc
   ```

6. **Run the Application**:
   Open the `index.html` file in your browser to use the Weather Dashboard.

## Usage
- Enter a valid zip code into the input field and click "Search."
- Weather information including temperature (in Celsius and Fahrenheit) and the current weather condition will be displayed below.


## Acknowledgements
- **OpenWeather**: For providing the weather data API.
- **Tailwind CSS**: For making UI styling quick and beautiful.


