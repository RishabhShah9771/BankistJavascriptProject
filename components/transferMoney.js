import { accounts } from './data.js';
import { currentAccountDetails } from './login.js';
import { updateUI } from './script.js';
import {
  inputTransferAmount,
  inputTransferTo,
  btnTransfer,
} from './domElements.js';

// Function to handle money transfer
const transferMoney = function () {
  // Add event listener to the transfer button
  btnTransfer.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get the transfer amount and receiver account details
    const transferAmount = +inputTransferAmount.value;
    const receiverAccount = accounts.find(
      currentAccount => currentAccount.username === inputTransferTo.value
    );

    // Check if the transfer is valid
    if (
      transferAmount > 0 &&
      receiverAccount &&
      receiverAccount.username !== currentAccountDetails.username &&
      currentAccountDetails.balance >= transferAmount
    ) {
      // Perform the transfer
      currentAccountDetails.movements.push(-transferAmount);
      receiverAccount.movements.push(transferAmount);

      // Add transfer dates
      currentAccountDetails.movementsDates.push(new Date().toISOString());
      receiverAccount.movementsDates.push(new Date().toISOString());

      // Update the user interface
      updateUI(currentAccountDetails);
    } else {
      // Alert the user if the transaction is invalid
      alert('Sorry Invalid Transaction!!');
    }

    // Clear the input fields
    inputTransferTo.value = inputTransferAmount.value = '';
  });
};

export default transferMoney;
