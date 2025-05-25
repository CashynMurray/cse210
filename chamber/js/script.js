const banner = document.getElementById('banner');
const currentDate = document.getElementById('currentDate');
const lastModified = document.getElementById('lastModified');
const currentYear = document.getElementById('currentYear');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const primaryNav = document.getElementById('primaryNav');

function displayCurrentDate() {
    const date = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    currentDate.textContent = date.toLocaleDateString('en-US', options);
}

function displayLastModified() {
    lastModified.textContent = document.lastModified;
}

function displayCurrentYear() {
    currentYear.textContent = new Date().getFullYear();
}

function toggleBanner() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        banner.classList.remove('hidden');
    } else {
        banner.classList.add('hidden');
    }
}

function toggleMenu() {
    primaryNav.classList.toggle('open');
    hamburgerBtn.classList.toggle('open');
}

hamburgerBtn.addEventListener('click', toggleMenu);

document.addEventListener('DOMContentLoaded', () => {
    displayCurrentDate();
    displayLastModified();
    displayCurrentYear();
    toggleBanner();
}); 