let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    if (xhr.status === 200) {
        let countries = JSON.parse(xhr.responseText);

        countries.forEach(country => {
            console.log("Name:", country.name.common);
            console.log("Capital:", country.capital[0]);
            console.log("Flag:", country.flags.svg);
            console.log("--------------------");
        });
    } else {
        console.error('Error fetching data. Status:', xhr.status);
    }
};


xhr.onerror = function () {
    console.error('Request failed');
};

xhr.send();
