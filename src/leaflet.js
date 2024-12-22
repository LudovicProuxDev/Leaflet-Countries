import { countries, getDataWithAPIKey } from "./countries.js";

export const leafletMap = L.map('map').setView([0, 0], 3);
export const markers = new L.MarkerClusterGroup();

// Add the map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(leafletMap);

// Event on the click
document.getElementById("submit").addEventListener('click', async () => {

    // Get the data with the API key
    const apiKey = document.getElementById("apiKey").value;
    await getDataWithAPIKey(apiKey);

    removeError();
    // Check if the data are correct
    if (!countries.message) {
        // Show the countries
        for (let codeCountry in countries) {
            if (countries[codeCountry].capital !== "N/A") {
                const countryName = (countries[codeCountry].name).toUpperCase();
                const capitalName = countries[codeCountry].capital;
                const tabLatLng = countries[codeCountry].latLng.capital;
                const countryPopulation = (countries[codeCountry].population).toLocaleString('en-US');
                const countryFlag = L.icon({
                    iconUrl: countries[codeCountry].flag.small,
                });
                markers.addLayer(L.marker(tabLatLng, { icon: countryFlag }).bindPopup(`<h2>${countryName}</h2><h3>Capital: ${capitalName}</h3><h3>Population: ${countryPopulation}</h3>`));
            }
        }
        // Add the countries on the map
        leafletMap.addLayer(markers);
    } else {
        showError(countries.message);
    }
})

function showError(message) {
    const content = document.getElementById("content");
    const error = document.createElement("p");
    error.id = "error";
    error.innerHTML = `Error: ${message}`;
    error.style.color = "#FC0000";
    content.appendChild(error);
    content.style.maxHeight = `${content.scrollHeight}px`;
}

function removeError() {
    const error = document.getElementById("error");
    if (error) {
        document.getElementById("content").removeChild(error);
    }
}
