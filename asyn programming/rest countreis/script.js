// Function to fetch rest countries data and process it
async function fetchRestCountriesData() {
    try {
        let response = await fetch("https://restcountries.com/v3.1/all");
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

// Function to fetch weather data from OpenWeatherMap
async function fetchWeatherData(lat, lon) {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ced316c1d20ad93a729ac6ca54ba4e75`);
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

// Function to create Bootstrap card for each country
async function createCountryCard(country) {
    let card = document.createElement("div");
    card.className = "col-lg-3 col-md-4 col-sm-6 mb-4";

    let weatherData = await fetchWeatherData(country.latlng[0], country.latlng[1]);

    card.innerHTML = `
        <div class="card border-dark h-100">
            <img src="${country.flags.png}" alt="${country.name.common} Flag" class="card-img-top img-fluid">
            <div class="card-body">
                <h5 class="card-title">${country.name.common}</h5>
                <p class="card-text"><strong>Capital:</strong> ${country.capital}</p>
                <p class="card-text"><strong>Region:</strong> ${country.region}</p>
                <p class="card-text"><strong>Country Code:</strong> ${country.cca3}</p>
                <p class="card-text"><strong>Latitude:</strong> ${country.latlng[0]}</p>
                <p class="card-text"><strong>Longitude:</strong> ${country.latlng[1]}</p>
                <p class="card-text"><strong>Temperature:</strong> ${(weatherData.main.temp - 273.15).toFixed(2)} °C</p>
            </div>
        </div>
    `;

    return card;
}

// Function to display country cards
async function displayCountryCards() {
    let countriesContainer = document.getElementById("countries-container");
    let countriesData = await fetchRestCountriesData();

    for (let country of countriesData) {
        let countryCard = await createCountryCard(country);
        countriesContainer.appendChild(countryCard);
    }
}

displayCountryCards();
