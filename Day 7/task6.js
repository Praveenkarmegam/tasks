let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    if (xhr.status === 200) {
        let countries = JSON.parse(xhr.responseText);

        let usDollarCountries = countries.filter(country => {
            let currencies = country.currencies;
            return currencies && currencies.USD;
        });
        console.log("Countries using US dollars:", usDollarCountries);
    } else {
        console.error('Error fetching data. Status:', xhr.status);
    }
};


xhr.onerror = function () {
    console.error('Request failed');
};

xhr.send();
