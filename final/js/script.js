const hamburgerBtn = document.querySelector('#hamburgerBtn');
const primaryNav = document.querySelector('#primaryNav');

hamburgerBtn.addEventListener('click', () => {
    primaryNav.classList.toggle('open');
    hamburgerBtn.classList.toggle('open');
});

document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

const weatherInfo = document.querySelector('#weather-info');
if (weatherInfo) {
    const apiKey = 'dd195bc1cb6ce7685c4cddf634c19732';
    const city = 'Rexburg'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    async function getWeather() {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                displayWeather(data);
            } else {
                throw Error(await response.text());
            }
        } catch (error) {
            console.error('Weather API Error:', error);
            weatherInfo.innerHTML = `
                <div class="weather-card">
                    <p>Weather information unavailable</p>
                    <p>Please try again later</p>
                </div>
            `;
        }
    }

    function displayWeather(data) {
        const temp = data.main.temp.toFixed(0);
        const desc = data.weather[0].description;
        const icon = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;

        weatherInfo.innerHTML = `
            <div class="weather-card">
                <img src="${iconUrl}" alt="${desc}" loading="lazy">
                <p class="temperature">${temp}°F</p>
                <p class="description">${desc}</p>
                <div class="weather-details">
                    <p>Humidity: ${humidity}%</p>
                    <p>Wind Speed: ${windSpeed} mph</p>
                </div>
            </div>
        `;
    }

    getWeather();

    setInterval(getWeather, 30 * 60 * 1000);
} 