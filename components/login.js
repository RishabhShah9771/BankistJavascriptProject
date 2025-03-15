import { accounts } from './data.js';
import { updateUI } from './script.js';
import {
  inputLoginUsername,
  inputLoginPin,
  labelWelcome,
  containerApp,
  btnLogin,
} from './domElements.js';

export let currentAccountDetails;

const handleLogin = function () {
  btnLogin.addEventListener('click', function (e) {
    // to prevent default behaviour
    e.preventDefault();

    currentAccountDetails = accounts.find(
      acc => acc.username === inputLoginUsername.value
    );
    if (currentAccountDetails?.pin === Number(inputLoginPin.value)) {
      // Display UI and message
      labelWelcome.textContent = `Welcome back, ${
        currentAccountDetails.owner.split(' ')[0]
      }`;
      containerApp.style.opacity = 100;

      // Clear input fields
      inputLoginUsername.value = inputLoginPin.value = '';
      inputLoginPin.blur();

      // Update UI
      updateUI(currentAccountDetails);
    } else {
      // Hide UI and display error message
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Login failed!';
    }
  });
};

export default handleLogin;
