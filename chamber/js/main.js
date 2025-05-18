// Set current year in footer
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Set last modified date
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger menu functionality
const hamburgerBtn = document.querySelector("#hamburgerBtn");
const primaryNav = document.querySelector("#primaryNav");

hamburgerBtn.addEventListener("click", () => {
    primaryNav.classList.toggle("open");
    hamburgerBtn.classList.toggle("open");
}); 