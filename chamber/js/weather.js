const weatherAPIKey = '0ce19f8594a9174751c55ecd95709cbc';
const city = 'Rexburg';
const countryCode = 'US';

const currentWeather = document.querySelector('.weather-card');
const forecast = document.querySelector('.forecast');

async function getCurrentWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=imperial&appid=${weatherAPIKey}`);
        const data = await response.json();
        
        if (currentWeather) {
            currentWeather.innerHTML = `
                <h3>Current Weather</h3>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}">
                <p class="temperature">${Math.round(data.main.temp)}°F</p>
                <p>${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        }
    } catch (error) {
        console.error('Error fetching current weather:', error);
    }
}

async function getForecast() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&units=imperial&appid=${weatherAPIKey}`);
        const data = await response.json();
        
        if (forecast) {
            const dailyForecasts = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);
            
            forecast.innerHTML = dailyForecasts.map(day => `
                <div class="forecast-card">
                    <h4>${new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}</h4>
                    <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="${day.weather[0].description}">
                    <p class="temperature">${Math.round(day.main.temp)}°F</p>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Error fetching forecast:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getCurrentWeather();
    getForecast();
}); 