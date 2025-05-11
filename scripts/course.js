const courses = [
    {
        id: "WDD130",
        name: "Web Fundamentals",
        credits: 3,
        completed: true,
        type: "WDD"
    },
    {
        id: "WDD230",
        name: "Web Frontend Development I",
        credits: 3,
        completed: true,
        type: "WDD"
    },
    {
        id: "WDD231",
        name: "Web Frontend Development II",
        credits: 3,
        completed: false,
        type: "WDD"
    },
    {
        id: "CSE121B",
        name: "JavaScript Language",
        credits: 3,
        completed: true,
        type: "CSE"
    },
    {
        id: "CSE111",
        name: "Programming with Functions",
        credits: 3,
        completed: false,
        type: "CSE"
    }
];

const courseCards = document.getElementById('course-cards');
const totalCredits = document.getElementById('total-credits');
const allCoursesBtn = document.getElementById('all-courses');
const wddCoursesBtn = document.getElementById('wdd-courses');
const cseCoursesBtn = document.getElementById('cse-courses');

function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = `course-card ${course.completed ? 'completed' : ''}`;
    
    card.innerHTML = `
        <h3>${course.id}</h3>
        <p>${course.name}</p>
        <p>Credits: ${course.credits}</p>
        <p>Status: ${course.completed ? 'Completed' : 'Not Completed'}</p>
    `;
    
    return card;
}

function displayCourses(filteredCourses) {
    courseCards.innerHTML = '';
    filteredCourses.forEach(course => {
        courseCards.appendChild(createCourseCard(course));
    });
    
    const total = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCredits.textContent = `Total Credits: ${total}`;
}

allCoursesBtn.addEventListener('click', () => {
    displayCourses(courses);
    updateActiveButton(allCoursesBtn);
});

wddCoursesBtn.addEventListener('click', () => {
    const wddCourses = courses.filter(course => course.type === 'WDD');
    displayCourses(wddCourses);
    updateActiveButton(wddCoursesBtn);
});

cseCoursesBtn.addEventListener('click', () => {
    const cseCourses = courses.filter(course => course.type === 'CSE');
    displayCourses(cseCourses);
    updateActiveButton(cseCoursesBtn);
});

function updateActiveButton(activeButton) {
    [allCoursesBtn, wddCoursesBtn, cseCoursesBtn].forEach(btn => {
        btn.classList.remove('active');
    });
    activeButton.classList.add('active');
}

displayCourses(courses);
updateActiveButton(allCoursesBtn); 