// Fetch the data from the API
var res = fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
res.then((data) => {
    return data.json();
}).then((data1) => foo(data1)).catch((error) => console.log(error));

// Create a container div
var container = document.createElement("div");
container.className = "container";

// Create a row div
var row = document.createElement("div");
row.className = "row";

// Function to process the data and create cards
function foo(data1) {
    console.log(data1);
    for (var i = 0; i < data1.length; i++) {
        var col = document.createElement("div");
        col.className = "col-lg-4";
        col.innerHTML = `
            <div class="card border-primary mb-3" style="max-width: 18rem;">
                <div class="card-header">Rest Countries Data</div>
                <div class="card-body text-primary">
                    <h5 class="card-title">Country: ${data1[i].name}</h5>
                    <p class="card-text">Capital: ${data1[i].capital}</p>
                    <p class="card-text">Region: ${data1[i].region}</p>
                    <p class="card-text">Country Code: ${data1[i].alpha3Code}</p>
                </div>
            </div>`;
        row.append(col);
    }
    container.append(row);
    document.body.append(container);
}
