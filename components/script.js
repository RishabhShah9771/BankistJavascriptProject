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

// TO DISPLAY BALANCE DETAILS : - >

const calcDisplayBalance = function (accountDetail) {
  const incomeAmount = accountDetail.movements
    .filter(movementsData => movementsData > 0)
    .reduce((prevValue, curValue) => prevValue + curValue, 0);
  labelSumIn.textContent = `${incomeAmount}€`;

  const outAmount = accountDetail.movements
    .filter(movementsData => movementsData < 0)
    .reduce((prevValue, curValue) => prevValue + curValue, 0);
  labelSumOut.textContent = `${Math.abs(outAmount)}€`;

  const interestCalulation = accountDetail.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * accountDetail.interestRate) / 100)
    .reduce((sum, interest) => (interest >= 1 ? sum + interest : sum), 0);
  labelSumInterest.textContent = `${interestCalulation}€`;
};

const calcTotalBalanceOfAccount = function (accountDetail) {
  accountDetail.balance = accountDetail.movements.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );
  labelBalance.textContent = `${accountDetail.balance} €`;
};

// UPDATE UI FUNCTION
const updateUI = function (accountDetail) {
  // Display movements
  displayMovementsData(accountDetail);

  // Display balance
  calcTotalBalanceOfAccount(accountDetail);

  // Display summary
  calcDisplayBalance(accountDetail);
};

handleLogin();
transferMoney();
closeAccount();
loanMoney();

export { calcDisplayBalance, calcTotalBalanceOfAccount, updateUI };
