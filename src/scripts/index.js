// Get elements by their IDs
const addAnalyticsButton = document.getElementById('addAnalyticsButton');
const addAnalyticsModal = document.getElementById('addAnalyticsModal');
const closeAnalyticsModal = document.getElementById('closeAnalyticsModal');
const analyticsForm = document.getElementById('analyticsForm');

// Show the "Add Analytics" modal when the button is clicked
addAnalyticsButton.addEventListener('click', () => {
    addAnalyticsModal.class='fixed inset-0  items-center justify-center flex bg-black bg-opacity-50'
});

// Close the modal when the close button is clicked
closeAnalyticsModal.addEventListener('click', () => {
    addAnalyticsModal.classList.add('hidden');
});

// Handle the form submission (you should customize this)
analyticsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Add logic to handle form data and update the chart and table
});

// Chart.js Initialization
const ctx = document.getElementById('analyticsChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line', // or other chart type
    data: {
        // Chart data configuration
    },
    options: {
        // Chart options
    }
});
