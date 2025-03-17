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

const handleLogin = function () {
  // // fake Login for Account1
  // currentAccountDetails = accounts[0];
  // updateUI(currentAccountDetails);
  // containerApp.style.opacity = 100;
  // labelWelcome.textContent = `Welcome back, ${
  //   currentAccountDetails.owner.split(' ')[0]
  // }`;

  btnLogin.addEventListener('click', function (e) {
    // to prevent default behaviour
    e.preventDefault();

    currentAccountDetails = accounts.find(
      acc => acc.username === inputLoginUsername.value
    );
    if (currentAccountDetails?.pin === +inputLoginPin.value) {
      // Display UI and message
      labelWelcome.textContent = `Welcome back, ${
        currentAccountDetails.owner.split(' ')[0]
      }`;
      containerApp.style.opacity = 100;

      // Display date

      displayCurrentDate();

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
