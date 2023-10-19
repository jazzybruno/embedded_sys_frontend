document.addEventListener('DOMContentLoaded', function () {
  const registerForm = document.querySelector('form');
  let errormessage = document.getElementById('errormessage');
  let submitButton = document.getElementById('submit-button');
  registerForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    submitButton.disabled = true;
    submitButton.innerHTML = 'Loading...';

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const userData = { email, username, password };
    console.log(userData);

    try {
      const response = await fetch('http://localhost:3000/api/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Registration was successful
        const data = await response.json();
        errormessage.style.color = 'green';
        errormessage.style.fontSize = '17px';  
      errormessage.innerHTML = 'Account created successfully!'
      submitButton.disabled = false;
      submitButton.innerHTML = 'Create an account';
        // You can perform actions on success, such as showing a success message.
        console.log('Registration successful:', data);
      } else {
        // Registration failed
        errormessage.style.color = 'red';
        errormessage.style.fontSize = '17px';  
      errormessage.innerHTML = 'Account already exists!'
      submitButton.disabled = false;
      submitButton.innerHTML = 'Create an account';
        console.error('Registration failed:', response.statusText);

        // You can display an error message or handle it as needed.
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
});
