const XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    const countries = JSON.parse(xhr.responseText);
    countries.forEach(country => {
        if (country.flags) {
            const flagUrl = country.flags.png;
            console.log("Flag URL:", flagUrl);
        }
    });
};

xhr.send();
