const urlParams = new URLSearchParams(window.location.search);
const formData = document.querySelector('#form-data');

if (formData) {
    const data = {
        'First Name': urlParams.get('fname'),
        'Last Name': urlParams.get('lname'),
        'Email': urlParams.get('email'),
        'Phone': urlParams.get('phone'),
        'Subject': urlParams.get('subject'),
        'Message': urlParams.get('message'),
        'Newsletter': urlParams.get('newsletter') ? 'Yes' : 'No',
        'Updates': urlParams.get('updates') ? 'Yes' : 'No'
    };

    formData.innerHTML = `
        <h2>Form Submission Details</h2>
        <div class="form-details">
            ${Object.entries(data)
                .map(([key, value]) => `
                    <div class="form-field">
                        <strong>${key}:</strong>
                        <span>${value || 'Not provided'}</span>
                    </div>
                `)
                .join('')}
        </div>
    `;
} 