const timestampField = document.getElementById('timestamp');
if (timestampField) {
    const now = new Date();
    timestampField.value = now.toISOString();
}

const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.modal .close-button');

learnMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const level = button.parentElement.dataset.level;
        const modalId = `${level}-modal`;
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
        }
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        if (modal) {
            modal.style.display = 'none';
        }
    });
});

window.addEventListener('click', (event) => {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const membershipCards = document.querySelectorAll('.membership-card');
    membershipCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 100); 
    });
}); 