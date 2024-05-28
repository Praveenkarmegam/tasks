document.querySelector("#fetch-weather").addEventListener("click", fetchWeather);

async function fetchWeather() {
    try {
        const cityName = document.getElementById("city-name").value.trim();
        if (!cityName) {
            alert("Please enter a city name.");
            return;
        }

        const apiKey = "ced316c1d20ad93a729ac6ca54ba4e75";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            alert("City not found. Please enter a valid city name.");
            return;
        }

        displayWeather(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

function displayWeather(weatherData) {
    const weatherInfo = document.getElementById("weather-info");
    weatherInfo.innerHTML = `
        <p><strong>City:</strong> ${weatherData.name}</p>
        <p><strong>Weather:</strong> ${weatherData.weather[0].description}</p>
        <p><strong>Temperature:</strong> ${weatherData.main.temp}°C</p>
        <p><strong>Humidity:</strong> ${weatherData.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${weatherData.wind.speed} m/s</p>
    `;
}
