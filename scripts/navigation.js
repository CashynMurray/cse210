const menuButton = document.getElementById('menu-button');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('nav')) {
        navigation.classList.remove('active');
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        navigation.classList.remove('active');
    }
}); 