import { btnLoan, inputLoanAmount } from './domElements.js';
import { currentAccountDetails } from './login.js';
import { updateUI } from './script.js';
import logOutTimer from './logOutTimer.js';

let timer;
// Function to handle loan money process
const loanMoney = function () {
  // Add event listener to the loan button
  btnLoan.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get the loan amount from the input field and convert it to a number
    const loanAmount = Number(inputLoanAmount.value);

    // Check if any movement is at least 10% of the requested loan amount
    const loanCondition = currentAccountDetails.movements.some(
      mov => mov >= loanAmount * 0.1
    );

    // If loan amount is positive and condition is met
    if (loanAmount > 0 && loanCondition) {
      // Simulate loan processing delay
      setTimeout(function () {
        // Add loan amount to movements
        currentAccountDetails.movements.push(loanAmount);

        // Add current date to movementsDates
        currentAccountDetails.movementsDates.push(new Date().toISOString());

        // Update the user interface with new account details
        updateUI(currentAccountDetails);
      }, 2500); // 2.5 seconds delay

      // Reset the timer
      clearInterval(timer);
      timer = logOutTimer();

      // Clear the input field
      inputLoanAmount.value = '';
    } else {
      // Alert the user if the loan amount is invalid
      alert('Invalid Loan Amount!!\nYou can get only 10% of Loan!!');
    }

    // Clear the input field
    inputLoanAmount.value = '';
  });
};

export default loanMoney;
