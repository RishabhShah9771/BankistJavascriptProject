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
  // Create a new Date object to get the current date and time
  const newDate = new Date();

  // Define options for formatting the date and time
  const options = {
    day: '2-digit', // Display day as two digits
    month: '2-digit', // Display month as two digits
    year: 'numeric', // Display full year in numeric format
    hour: '2-digit', // Display hour as two digits
    minute: '2-digit', // Display minute as two digits
  };

  // Format the current date and time using Intl.DateTimeFormat
  const displayDate = new Intl.DateTimeFormat(
    navigator.language,
    options
  ).format(newDate);

  // Update the labelDate element's text content with the formatted date and time
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
