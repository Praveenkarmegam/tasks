let XMLHTTPRequest = require('xhr2');
let xhr = new XMLHTTPRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let countries = JSON.parse(xhr.responseText);
    for (let index in countries) {
        const country = countries[index];
        console.log("Country:", country.name.common);
        console.log("Region:", country.region);
        console.log("Subregion:", country.subregion);
        console.log("Population:", country.population);
        
        console.log("--------------------");
    }
}

xhr.send();