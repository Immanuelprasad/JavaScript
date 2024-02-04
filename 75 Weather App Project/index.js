const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "ed14718922aa23e155ed87e08a47c467";

weatherForm.addEventListener("submit", async event => {
    event.preventDefault();
    const city = cityInput.value;
    if(city)
    {
        try
        {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error)
        {
            console.error(error);
            displayError(error);
        }
    }
    else
    {
        displayError("Please enter a city");
    }
});

async function getWeatherData(city)
{
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiURL);
    console.log(response);

    if(!response.ok)
    {
        throw new Error("Could not fetch weather data");
    }
    return await response.json();
}

function displayWeatherInfo(data)
{
    const {name: city, main: {temp, humidity}, weather: [{description, id}]} = data;
    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const temperatureDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descriptionDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    temperatureDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descriptionDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    temperatureDisplay.classList.add("temperatureDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descriptionDisplay.classList.add("descriptionDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(temperatureDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descriptionDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherID)
{
    switch(true)
    {
        case (weatherID >= 200 && weatherID < 300):
            return "🌩️";
        case (weatherID >= 300 && weatherID < 400):
            return "🌧️";
        case (weatherID >= 500 && weatherID < 600):
            return "☔";
        case (weatherID >= 600 && weatherID < 700):
            return "❄️";
        case (weatherID >= 700 && weatherID < 800):
            return "🌁";
        case (weatherID === 800):
            return "☀️";
        case (weatherID >= 801 && weatherID < 810):
            return "☁️";
        default:
            return "?";
    }
}

function displayError(message)
{
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}