import { getFishingSpots } from './fishing-spots-data.js';

const spotsContainer = document.querySelector('#spots-container');
const difficultyFilter = document.querySelector('#difficulty');
const modal = document.querySelector('#spot-modal');
const modalContent = document.querySelector('#modal-content');
const closeBtn = document.querySelector('.close');

let spots = [];
let filteredSpots = [];

async function initialize() {
    try {
        spots = await getFishingSpots();
        filteredSpots = [...spots];
        displaySpots();
        setupEventListeners();
    } catch (error) {
        console.error('Error initializing:', error);
        spotsContainer.innerHTML = '<p>Error loading fishing spots</p>';
    }
}

function displaySpots() {
    spotsContainer.innerHTML = filteredSpots.map(spot => `
        <div class="spot-card" data-id="${spot.id}">
            <img src="${spot.image}" alt="${spot.name}" loading="lazy">
            <h3>${spot.name}</h3>
            <p>Difficulty: ${spot.difficulty}</p>
            <p>Best Season: ${spot.bestSeason}</p>
            <button class="details-btn">View Details</button>
        </div>
    `).join('');
}

function setupEventListeners() {
    difficultyFilter.addEventListener('change', (e) => {
        const difficulty = e.target.value;
        filteredSpots = difficulty === 'all' 
            ? [...spots]
            : spots.filter(spot => spot.difficulty.toLowerCase() === difficulty);
        displaySpots();
    });

    spotsContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.spot-card');
        if (card) {
            const spotId = card.dataset.id;
            const spot = spots.find(s => s.id === spotId);
            if (spot) {
                showSpotDetails(spot);
            }
        }
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function showSpotDetails(spot) {
    modalContent.innerHTML = `
        <h2>${spot.name}</h2>
        <img src="${spot.image}" alt="${spot.name}">
        <p><strong>Difficulty:</strong> ${spot.difficulty}</p>
        <p><strong>Best Season:</strong> ${spot.bestSeason}</p>
        <p><strong>Fish Species:</strong> ${spot.fishSpecies.join(', ')}</p>
        <p><strong>Description:</strong> ${spot.description}</p>
        <p><strong>Location:</strong> ${spot.location}</p>
        <p><strong>Access:</strong> ${spot.access}</p>
    `;
    modal.style.display = 'block';
}

initialize(); 