document.querySelector("#fetch-launches").addEventListener("click", displayLaunchCards);

// Function to fetch SpaceX launch data
async function fetchLaunchData() {
    try {
        let response = await fetch("https://api.spacexdata.com/v4/launches");
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

// Function to create Bootstrap card for each launch
function createLaunchCard(launch) {
    let card = document.createElement("div");
    card.className = "col-lg-4 col-md-6 col-sm-12 mb-4";

    card.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${launch.name}</h5>
                <p class="card-text"><strong>Date:</strong> ${new Date(launch.date_utc).toLocaleDateString()}</p>
                <p class="card-text"><strong>Rocket:</strong> ${launch.rocket}</p>
                <p class="card-text"><strong>Launch Site:</strong> ${launch.launchpad}</p>
            </div>
        </div>
    `;

    return card;
}

// Function to display launch cards based on search input
async function displayLaunchCards() {
    try {
        let launchesContainer = document.getElementById("launches-container");
        launchesContainer.innerHTML = ""; // Clear previous results
        let launchData = await fetchLaunchData();
        let searchQuery = document.getElementById("launch-name").value.toLowerCase();

        let filteredLaunches = launchData.filter(launch => launch.name.toLowerCase().includes(searchQuery));

        for (let launch of filteredLaunches) {
            let launchCard = createLaunchCard(launch);
            launchesContainer.appendChild(launchCard);
        }

        if (filteredLaunches.length === 0) {
            launchesContainer.innerHTML = `<p class="col-12 text-center">No launches found for "${searchQuery}".</p>`;
        }
    } catch (error) {
        console.log(error);
    }
}
