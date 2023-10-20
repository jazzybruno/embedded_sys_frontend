// Check for the presence of a token in local storage
const token = localStorage.getItem("token");

if (!token) {
  // If there's no token, redirect to the login page
  window.location.href = "http://127.0.0.1:5501/frontend/src/templates/login.html";
} else {

   utils = new Utils();
  // Token is present and valid, render the page

  // JavaScript for opening the Analytics Modal
  document.getElementById("openModal").addEventListener("click", function () {
    document.getElementById("analyticsModal").classList.remove("hidden");
  });

  // JavaScript for closing the Analytics Modal
  document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("analyticsModal").classList.add("hidden");
  });

  //  data fetching to see the details of the server 
  utils.setLoggedInProfile(document);

  // codes for managin the logout button
  const logoutButton = document.getElementById("logout");
  logoutButton.addEventListener("click", ()=>{
    utils.logout();
  });
  
  // codes for managing the activity fetching 
  utils.getUserAnalytics()

  const DATA_COUNT = 7;
  const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

  // Generate an array of month labels
  const labels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Blood Pressure',
        data: Array.from({ length: DATA_COUNT }, () => Math.floor(Math.random() * (NUMBER_CFG.max - NUMBER_CFG.min + 1)) + NUMBER_CFG.min),
        borderColor: 'rgba(255, 0, 0, 0.5)',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Body Temperature',
        data: Array.from({ length: DATA_COUNT }, () => Math.floor(Math.random() * (NUMBER_CFG.max - NUMBER_CFG.min + 1)) + NUMBER_CFG.min),
        borderColor: 'rgb(37, 150, 190)',
        backgroundColor: 'rgb(37, 150, 190)',
        yAxisID: 'y',
      },
      {
        label: 'Heart Rate',
        data: Array.from({ length: DATA_COUNT }, () => Math.floor(Math.random() * (NUMBER_CFG.max - NUMBER_CFG.min + 1)) + NUMBER_CFG.min),
        borderColor: '#1c8098',
        backgroundColor: '#1c8098',
        yAxisID: 'y1',
      },
    ],
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      stacked: false,
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Line Chart - Multi Axis',
        },
      },
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          grid: {
            drawOnChartArea: false,
          },
        },
      },
    },
  };

  // Create a Chart.js chart on the canvas element
  const ctx = document.getElementById('analyticsChart').getContext('2d');
  const myChart = new Chart(ctx, config);
}
