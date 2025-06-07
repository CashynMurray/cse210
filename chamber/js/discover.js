async function loadPlaces() {
    try {
        const response = await fetch('data/places.json');
        const data = await response.json();
        displayPlaces(data.places);
    } catch (error) {
        console.error('Error loading places:', error);
    }
}

function displayPlaces(places) {
    const grid = document.querySelector('.places-grid');
    grid.innerHTML = '';

    places.forEach(place => {
        const card = document.createElement('article');
        card.className = 'place-card';
        
        card.innerHTML = `
            <h2>${place.name}</h2>
            <figure>
                <img src="images/${place.image}" alt="${place.name}" width="300" height="200" loading="lazy">
            </figure>
            <address>${place.address}</address>
            <p>${place.description}</p>
            <button class="learn-more">Learn More</button>
        `;
        
        grid.appendChild(card);
    });
}

function handleVisitorTracking() {
    const visitMessage = document.getElementById('visitMessage');
    const lastVisit = localStorage.getItem('lastVisit');
    const currentTime = Date.now();
    
    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysSinceLastVisit = Math.floor((currentTime - parseInt(lastVisit)) / (1000 * 60 * 60 * 24));
        
        if (daysSinceLastVisit < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            const dayText = daysSinceLastVisit === 1 ? "day" : "days";
            visitMessage.textContent = `You last visited ${daysSinceLastVisit} ${dayText} ago.`;
        }
    }
    
    localStorage.setItem('lastVisit', currentTime.toString());
}

document.addEventListener('DOMContentLoaded', () => {
    loadPlaces();
    handleVisitorTracking();
}); 