'use strict';
import { accounts } from './data.js';

// BANKIST APP

// Elements from UI.
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovementsData = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (movValue, index) {
    const depositType = movValue > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${depositType}"> ${
      index + 1
    } ${depositType}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${movValue}€</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// TO GET USERNAME FUNCTION : - >

const updatedAccountDetails = accounts.map(
  accountOwnerDetail =>
    (accountOwnerDetail.username = accountOwnerDetail.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join(''))
);

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

  const total = accountDetail.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${Math.abs(Math.round(total))} €`;
};

const calcTotalBalanceOfAccount = function (mov) {
  const balance = mov.reduce((prevValue, curValue) => prevValue + curValue, 0);
  labelBalance.textContent = `${balance} €`;
};

// LOGIN
// EVENT HANDLERS

let currentAccountDetails;

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

    // Display movements
    displayMovementsData(currentAccountDetails.movements);

    // Display balance
    calcTotalBalanceOfAccount(currentAccountDetails.movements);

    // Display summary
    calcDisplayBalance(currentAccountDetails);
  } else {
    // Hide UI and display error message
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Login failed!';
  }
});
