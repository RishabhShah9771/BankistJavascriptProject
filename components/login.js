import { accounts } from './data.js';
import { updateUI } from './script.js';
import {
  inputLoginUsername,
  inputLoginPin,
  labelWelcome,
  containerApp,
  btnLogin,
  labelDate,
} from './domElements.js';

export let currentAccountDetails;

// Function to display the current date and time
const displayCurrentDate = () => {
  const newDate = new Date();
  const day = String(newDate.getDate()).padStart(2, '0');
  const month = String(newDate.getMonth() + 1).padStart(2, '0');
  const year = newDate.getFullYear();
  const hour = String(newDate.getHours()).padStart(2, '0');
  const minutes = String(newDate.getMinutes()).padStart(2, '0');

  const displayDate = `${day}/${month}/${year}, ${hour}:${minutes}`;
  labelDate.textContent = displayDate;
};

// Function to handle login
const handleLogin = function () {
  // Add event listener for login button click
  btnLogin.addEventListener('click', function (e) {
    // Prevent default form submission behavior
    e.preventDefault();

    // Find the account with the entered username
    currentAccountDetails = accounts.find(
      acc => acc.username === inputLoginUsername.value
    );

    // Check if the entered PIN matches the account's PIN
    if (currentAccountDetails?.pin === +inputLoginPin.value) {
      // Display welcome message and UI
      labelWelcome.textContent = `Welcome back, ${
        currentAccountDetails.owner.split(' ')[0]
      }`;
      containerApp.style.opacity = 100;

      // Display the current date and time
      displayCurrentDate();

      // Clear input fields and remove focus from PIN input
      inputLoginUsername.value = inputLoginPin.value = '';
      inputLoginPin.blur();

      // Update the UI with the current account details
      updateUI(currentAccountDetails);
    } else {
      // Hide UI and display error message if login fails
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Login failed!';
    }
  });
};

export default handleLogin;
