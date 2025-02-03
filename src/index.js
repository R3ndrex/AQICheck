import "./style.css";
const API = "baca20cc-b70c-481b-84cc-01b7f896881e";
const searchButton = document.querySelector("button");
const datalist = document.querySelector("#countries");
const input = document.querySelector("#country");
const countries = [];
document.addEventListener("DOMContentLoaded", () => {
    getWeatherDataCountries().then((response) =>
        addOptions(response, datalist)
    );
});

input.addEventListener("input", () => {
    if (input.value.trim() !== "") {
        displayOptions(input.value);
    }
});

async function addOptions(data) {
    data.forEach((countryObject) => {
        countries.push(countryObject["country"]);
    });
}

function displayOptions(value) {
    datalist.innerHTML = "";
    let displaybleOptions = [];
    countries.forEach((country) => {
        if (country.toLowerCase().startsWith(value.toLowerCase())) {
            displaybleOptions.push(country);
        }
    });
    displaybleOptions = displaybleOptions.slice(0, 10);
    displaybleOptions.forEach((country) => {
        const option = document.createElement("div");
        option.value = country;
        option.textContent = country;
        datalist.appendChild(option);
    });
}

async function getWeatherDataCountries() {
    try {
        const response = await fetch(
            `https://api.airvisual.com/v2/countries?key=${API}`
        );
        const json = await response.json();
        return json["data"];
    } catch (error) {
        console.error(error.message);
    }
}
