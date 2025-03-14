import { accounts } from './data.js';
import {
  btnClose,
  containerApp,
  inputClosePin,
  inputCloseUsername,
  inputTransferAmount,
} from './domElements.js';
import { currentAccountDetails } from './login.js';

function closeAccount() {
  btnClose.addEventListener('click', function (e) {
    e.preventDefault();
    if (
      inputCloseUsername.value === currentAccountDetails.username &&
      Number(inputClosePin.value) === currentAccountDetails.pin
    ) {
      const index = accounts.findIndex(
        value => value.username === currentAccountDetails.username
      );
      // Delete Account
      accounts.splice(index, 1);
      // Hide UI
      containerApp.style.opacity = 0;
    } else {
      alert('Incorrect username or pin');
    }

    // Clear input fields
    inputTransferAmount.value = inputTransferAmount.value = '';
  });
}

export default closeAccount;
