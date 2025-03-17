import { accounts } from './data.js';
import { currentAccountDetails } from './login.js';
import { updateUI } from './script.js';
import {
  inputTransferAmount,
  inputTransferTo,
  btnTransfer,
} from './domElements.js';

const transferMoney = function () {
  btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const transferAmount = +inputTransferAmount.value;
    const receiverAccount = accounts.find(
      currentAccount => currentAccount.username === inputTransferTo.value
    );

    if (
      transferAmount > 0 &&
      receiverAccount &&
      receiverAccount.username !== currentAccountDetails.username &&
      currentAccountDetails.balance >= transferAmount
    ) {
      // Doing the transfer
      currentAccountDetails.movements.push(-transferAmount);
      receiverAccount.movements.push(transferAmount);

      //Add Dates to transfer as well
      currentAccountDetails.movementsDates.push(new Date().toISOString());
      receiverAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccountDetails);
    } else {
      alert('Sorry Invalid Transaction!!');
    }

    // Clear input fields
    inputTransferTo.value = inputTransferAmount.value = '';
  });
};

export default transferMoney;
