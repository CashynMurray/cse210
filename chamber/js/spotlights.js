const spotlightContent = document.getElementById('spotlight-content');

async function displaySpotlights() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        
        const spotlightMembers = members.filter(member => 
            member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver'
        );
        
        const selectedMembers = [];
        while (selectedMembers.length < 3 && spotlightMembers.length > 0) {
            const randomIndex = Math.floor(Math.random() * spotlightMembers.length);
            selectedMembers.push(spotlightMembers.splice(randomIndex, 1)[0]);
        }
        
        const spotlightsContainer = document.querySelector('.spotlights');
        if (spotlightsContainer) {
            spotlightsContainer.innerHTML = selectedMembers.map(member => `
                <div class="spotlight-card">
                    <img src="${member.image}" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <p>${member.description}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Error displaying spotlights:', error);
    }
}

document.addEventListener('DOMContentLoaded', displaySpotlights); 