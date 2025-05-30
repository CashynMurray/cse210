function getUrlParams() {
    const params = {};
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    for (const [key, value] of urlParams) {
        params[key] = value;
    }
    return params;
}

function displaySubmittedData() {
    const submittedDataContainer = document.getElementById('submitted-data');
    const params = getUrlParams();
    
    if (submittedDataContainer) {
        let html = '';
        for (const key in params) {
            if (key !== 'timestamp') {
                const displayKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                html += `<p><strong>${displayKey}:</strong> ${params[key]}</p>`;
            }
        }
        if (params.timestamp) {
            const timestamp = new Date(params.timestamp);
            html += `<p><strong>Submission Timestamp:</strong> ${timestamp.toLocaleString()}</p>`;
        }
        submittedDataContainer.innerHTML = html;
    }
}

document.addEventListener('DOMContentLoaded', displaySubmittedData); 