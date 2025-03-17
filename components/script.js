'use strict';

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
    .filter(movement => movement > 0)
    .reduce((acc, movement) => acc + movement, 0);
  labelSumIn.textContent = `${incomeAmount}€`;

  // Calculate total outflow
  const outAmount = accountDetail.movements
    .filter(movement => movement < 0)
    .reduce((acc, movement) => acc + movement, 0);
  labelSumOut.textContent = `${Math.abs(outAmount)}€`;

  // Calculate total interest
  const interestAmount = accountDetail.movements
    .filter(movement => movement > 0)
    .map(deposit => (deposit * accountDetail.interestRate) / 100)
    .reduce((acc, interest) => (interest >= 1 ? acc + interest : acc), 0);
  labelSumInterest.textContent = `${interestAmount}€`;
};

// Function to calculate and display total balance of the account
const calcTotalBalanceOfAccount = function (accountDetail) {
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

export { calcDisplayBalance, calcTotalBalanceOfAccount, updateUI };
