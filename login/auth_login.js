// JavaScript code (script.js)

// Retrieve the form element
const loginForm = document.getElementById('login-form');

// Add an event listener for form submission
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Retrieve the email and password inputs
  const emailInput = document.getElementById('email-input');
  const passwordInput = document.getElementById('password-input');

  // Perform validation (e.g., check for empty fields)
  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Perform any additional validation or processing here

  // If all validation passes, you can proceed with user authentication or other actions
  alert('Login successful!');
  // Add code here to redirect the user to another page or perform other actions
});// JavaScript code (script.js)

// Retrieve the register form element
const registerForm = document.getElementById('register-form');

// Add an event listener for form submission
registerForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Retrieve the register form inputs
  const nameInput = document.getElementById('name-input');
  const emailInput = document.getElementById('email-input');
  const passwordInput = document.getElementById('password-input');

  // Perform validation (e.g., check for empty fields)
  if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Perform any additional validation or processing here

  // If all validation passes, you can proceed with user registration or other actions
  alert('Registration successful!');
  // Add code here to handle the registration process, such as storing the user's information
});// JavaScript code (script.js)

// Retrieve the login and register screen elements
const loginScreen = document.getElementById('login-screen');
const registerScreen = document.getElementById('register-screen');

// Retrieve the login and register links
const loginLink = document.getElementById('login-link');
const registerLink = document.getElementById('register-link');

// Set the initial active screen as login screen
let activeScreen = 'login';

// Add event listeners to the login and register links
loginLink.addEventListener('click', function(event) {
  event.preventDefault();
  switchScreen('login');
});

registerLink.addEventListener('click', function(event) {
  event.preventDefault();
  switchScreen('register');
});

// Function to switch between screens
function switchScreen(screen) {
  if (screen === activeScreen) return;

  if (screen === 'login') {
    loginScreen.style.display = 'block';
    registerScreen.style.display = 'none';
    activeScreen = 'login';
  } else if (screen === 'register') {
    loginScreen.style.display = 'none';
    registerScreen.style.display = 'block';
    activeScreen = 'register';
  }
}

// By default, display the login screen
switchScreen('login');