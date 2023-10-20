class Utils {
   logout = () => {
    const token = localStorage.getItem('token');
    if (token) {
      localStorage.removeItem('token');
      window.location.reload(); // Reload the page after removing the token
    }
  }


   setLoggedInProfile = async (document) => {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
  
    try {
      const response = await fetch('http://localhost:3000/api/user/auth/user', {
        method: 'GET', // Specify the HTTP method, which is typically 'GET' for fetching data.
        headers: headers // Include the headers in the fetch request
      });
  
      if (response.ok) {
        const data = await response.json();
        document.getElementById('username').innerHTML = data.user.username;
        document.getElementById('email').innerHTML = data.user.email;
      } else {
        console.error('Request failed with status:', response.status);
        return null
      }
    } catch (error) {
      console.error(error);
      return null
    }
  };
  

   createAnalytics = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error("User is not logged in. Please log in to create analytics.");
      return;
    }
  
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json', // Set the content type to JSON
    };
  
    const bloodPressure = document.getElementById('blood_pressure').value;
    const bodyTemperature = document.getElementById('body_temperature').value;
    const heartRate = document.getElementById('heart_rate').value;
  
    const data = {
      blood_pressure: bloodPressure,
      body_temperature: bodyTemperature,
      heart_rate: heartRate,
    };
  
    try {
      const response = await fetch('http://localhost:3000/api/stats/create', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data), // Convert data to JSON string
      });
  
      if (response.ok) {
        console.log('Analytics data created successfully.');
        // You can perform additional actions if needed
      } else {
        console.error('Failed to create analytics data. Status:', response.status);
        // Handle the error as needed
      }
    } catch (error) {
      console.error(error);
    }
  };
  

 getUserAnalytics = async () => {
  const token = localStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${token}`
  };

  try {
    const response = await fetch('http://localhost:3000/api/stats/user', {
      method: 'GET', // Specify the HTTP method, which is typically 'GET' for fetching data.
      headers: headers // Include the headers in the fetch request
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error('Request failed with status:', response.status);
    }
  } catch (error) {
    console.error(error);
  }
}

 generateChartData = async () => {

}

 getHighestData = async () => {

}
}