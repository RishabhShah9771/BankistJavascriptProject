'use strict';

// Import necessary functions and elements from other modules
import handleLogin from './login.js';
import transferMoney from './transferMoney.js';
import {
  labelSumIn,
  labelSumOut,
  labelSumInterest,
  labelBalance,
} from './domElements.js';
import displayMovementsData from './displayCustomerEntries.js';
import closeAccount from './closeAccount.js';
import loanMoney from './loanMoney.js';
import { formatCurrencyAmount } from './dateOperations.js';

// Function to calculate and display balance details
const calcDisplayBalance = function (accountDetail) {
  // Calculate total income
  const incomeAmount = accountDetail.movements
    .filter(movement => movement > 0) // Filter deposits
    .reduce((acc, movement) => acc + movement, 0); // Sum deposits
  labelSumIn.textContent = formatCurrencyAmount(
    incomeAmount,
    accountDetail.currency
  );

  // Calculate total outflow
  const outAmount = accountDetail.movements
    .filter(movement => movement < 0) // Filter withdrawals
    .reduce((acc, movement) => acc + movement, 0); // Sum withdrawals
  labelSumOut.textContent = Math.round(
    formatCurrencyAmount(outAmount, accountDetail.currency)
  );

  // Calculate total interest
  const interestAmount = accountDetail.movements
    .filter(movement => movement > 0) // Filter deposits
    .map(deposit => (deposit * accountDetail.interestRate) / 100) // Calculate interest for each deposit
    .reduce((acc, interest) => (interest >= 1 ? acc + interest : acc), 0); // Sum interest if it's >= 1
  labelSumInterest.textContent = formatCurrencyAmount(
    interestAmount,
    accountDetail.currency
  );
};

// Function to calculate and display total balance of the account
const calcTotalBalanceOfAccount = function (accountDetail) {
  // Calculate total balance
  accountDetail.balance = accountDetail.movements.reduce(
    (acc, movement) => acc + movement,
    0
  );
  labelBalance.textContent = formatCurrencyAmount(
    accountDetail.balance,
    accountDetail.currency
  );
};

// Function to update the UI with account details
const updateUI = function (accountDetail) {
  // Display movements
  displayMovementsData(accountDetail);

  // Display balance
  calcTotalBalanceOfAccount(accountDetail);

  // Display summary
  calcDisplayBalance(accountDetail);
};

// Initialize application
handleLogin();
transferMoney();
closeAccount();
loanMoney();

// Export functions for use in other modules
export { calcDisplayBalance, calcTotalBalanceOfAccount, updateUI };
