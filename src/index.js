import "./style.css";
const AQCN = "";
const searchButton = document.querySelector("button");
const weatherInfo = document.querySelector(".weather-info");
const input = document.querySelector("#city");

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    getWeatherDataCity(input.value).then((response) => {
        displayData(response);
    });
    input.value = "";
});

function displayData(data) {
    const block = document.createElement("div");
    const h1 = document.createElement("h1");
    block.classList.add("block");
    const text = document.createTextNode(`Air Quality Index: ${data["aqi"]}`);
    const text2 = document.createTextNode(getAQIMessage(data["aqi"]));
    h1.textContent = data["city"]["name"];
    block.appendChild(h1);
    block.appendChild(text);
    block.appendChild(document.createElement("br"));
    block.appendChild(text2);
    weatherInfo.appendChild(block);
    console.log(data);
}

function getAQIMessage(index) {
    if (index > 300) {
        return "Everyone should avoid any physical activity outdoors.";
    } else if (index > 200 && index <= 300) {
        return "Active children and adults, as well as people with respiratory diseases such as asthma, should avoid any physical exertion outdoors; everyone else, especially children, should limit outdoor activities.";
    } else if (index > 150 && index <= 200) {
        return `Active children and adults, as well as people with respiratory diseases such as asthma, should avoid prolonged exertion outdoors; everyone else, especially children, should limit prolonged outdoor exertion.`;
    } else if (index > 50 && index <= 150) {
        return `Active children and adults, as well as people with respiratory diseases such as asthma, should limit prolonged physical exertion outdoors.`;
    }
    return "";
}

async function getWeatherDataCity(city) {
    try {
        const response = await fetch(
            `https://api.waqi.info/feed/${city}/?token=${AQCN}`,
            { mode: "cors" }
        );
        const json = await response.json();

        return json["data"];
    } catch (error) {
        console.error(error.message);
    }
}
