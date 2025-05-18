// Directory View Toggle
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#memberDirectory");

// Set initial view
display.classList.add("grid");

// Toggle between grid and list views
gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});

// Fetch and display member data
async function getMemberData() {
    try {
        const response = await fetch("data/members.json");
        if (response.ok) {
            const data = await response.json();
            displayMembers(data.members);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayMembers(members) {
    members.forEach(member => {
        const section = document.createElement("section");
        
        // Create member card content
        section.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
            <h3>${member.name}</h3>
            <p>${member.description}</p>
            <p>📍 ${member.address}</p>
            <p>📞 ${member.phone}</p>
            <p>Membership Level: ${getMembershipLevel(member.membershipLevel)}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;
        
        display.appendChild(section);
    });
}

function getMembershipLevel(level) {
    switch(level) {
        case 1:
            return "Member";
        case 2:
            return "Silver";
        case 3:
            return "Gold";
        default:
            return "Member";
    }
}

// Initialize the page
getMemberData(); 