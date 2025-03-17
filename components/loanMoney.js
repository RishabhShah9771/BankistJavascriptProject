import { btnLoan, inputLoanAmount } from './domElements.js';
import { currentAccountDetails } from './login.js';
import { updateUI } from './script.js';

const loanMoney = function () {
  btnLoan.addEventListener('click', function (e) {
    e.preventDefault();
    const loanAmount = Number(inputLoanAmount.value);
    const loanCondition = currentAccountDetails.movements.some(
      mov => mov >= loanAmount * 0.1
    );
    if (loanAmount > 0 && loanCondition) {
      // Add movement
      currentAccountDetails.movements.push(loanAmount);

      //Add Loan Date
      currentAccountDetails.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccountDetails);
      inputLoanAmount.value = '';
    } else {
      alert('Invalid Loan Amount!!\nYou can get only 10% of Loan!!');
    }
    inputLoanAmount.value = '';
  });
};

export default loanMoney;
