'use strict';

// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
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

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////
//Array Methods
// It is just the function as array are just same as objects.

// SLICE METHOD
console.log('---SLICE METHOD---');
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log([...arr, 'f']);
// This is slice of the original aray.
// Output of the slice method will be End Parameter - Begin Parameter.
// Positive extraction will start from begining and negative from end of the array.
// If we are not entering any value then it will return the original array.
// If we want to create a shallow copy we use spread opertor in array or Objects.

//SPLICE METHOD
console.log('---SPLICE METHOD---');
// It mutates the original array.
// It is mostly used to delete elements from array mainly it is used to delete last element of array.
// Negative paramter is same as slice method operation.
console.log(arr.splice(-1));
console.log(arr.splice(1));

// If we want to refer more we can refer to splice method.

//REVERSE METHOD
console.log('---REVERSE METHOD---');
arr = ['a', 'b', 'c', 'd', 'e'];
let arr1 = ['i', 'j', 'k', 'l', 'm', 'n'];

console.log(arr1.reverse());

// Reverse method does mutate array list.

//CONCAT METHOD
console.log('---CONCAT METHOD---');
const letter = arr.concat(arr1);
console.log(letter);
console.log([...arr, ...arr1]);
// Spread operator is one of the alternative for concat method of array as it adds all the elements.
// It does concats 2 different arrays.
// It does not mutate original array.

//JOIN METHOD
console.log('---JOIN METHOD---');
console.log(letter.join('-'));

//NEW METHODS FOR ARRAY OPERATIONS
console.log('---NEW METHODS---');

//AT METHOD
console.log('---AT METHOD---');
const arrayList = [23, 24, 25];
console.log(arrayList[0]);
// New Approach
console.log(arrayList.at(0));
// Getting last element in array.
console.log(arrayList[arrayList.length - 1]);
console.log(arrayList.slice(-1)[0]);
// At method approach
console.log(arrayList.at(-1));

// The usage depends the senario of the code that a person is applying it to. Both the ways can be used to implement the object.
// It can also be implemented in strings.

//LOOPING ARRAY
console.log('---FOR OF LOOP---');

//For-of Loop Example
for (const [index, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement : ${index + 1} : you deposited  : ${movement}`);
  } else {
    console.log(
      `Movement : ${index + 1} : you withdrew :  ${Math.abs(movement)}`
    );
  }
}

// It will need curren element as an argument in first parameter of callback function.
console.log('---FOR EACH LOOP---');
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement : ${index + 1} :you deposited : ${movement}`);
  } else {
    console.log(
      ` Movement : ${index + 1} : you withdrew :  ${Math.abs(movement)}`
    );
  }
});
// In this the call function gives instruction to parent function that what operation needs to be performed.
// For-each will no matter what will run entire array.
