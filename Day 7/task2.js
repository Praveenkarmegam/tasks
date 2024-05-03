let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    if (xhr.status === 200) {
        let countries = JSON.parse(xhr.responseText);
        
        let countriesWithLowPopulation = countries.filter(country => country.population < 200000);
        console.log("Countries with population less than 2 lakhs:", countriesWithLowPopulation);
    } else {
        console.error('Error fetching data. Status:', xhr.status);
    }
};

xhr.onerror = function () {
    console.error('Request failed');
};

xhr.send();
