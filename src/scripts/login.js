document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('form');
    let errormessage = document.getElementById('errormessage');
    let submitButton = document.getElementById('submit-button');
    loginForm.addEventListener('submit', async function (event) {
      event.preventDefault();

        submitButton.disabled = true;
        submitButton.innerHTML = 'Loading...';
      
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      const userData = { email, password };
      console.log(userData);
  
      try {
        const response = await fetch('http://localhost:3000/api/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
  
        if (response.ok) {
          // Request was successful
          const data = await response.json();
  
          // Save the token to local storage
          localStorage.setItem('token', data.token);
  
          // Redirect to the index.html page
          window.location.href = 'http://127.0.0.1:5501/frontend/src/templates/index.html';
        } else {
          // Request failed
          errormessage.style.color = 'red';
          errormessage.style.fontSize = '17px';  
        errormessage.innerHTML = 'Invalid email or password'
        submitButton.disabled = false;
        submitButton.innerHTML = 'Login';
          console.error('Login failed:', response);
          // Perform logout by clearing the token in local storage (if it exists)
        }
      } catch (error) {
        console.error('Error:', error);
      }
    });
  });
  