# BankistJavascriptProject

->This is a Detailed example of how array works and how to implement different methods in array and its operations.
-> It is a Detailed Demonstration of Array with detailed Notes.

---

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

// MAPS AND SETS

const currencies = new Map([
['USD', 'United States dollar'],
['EUR', 'Euro'],
['GBP', 'Pound sterling'],
]);

currencies.forEach(function (currentValue, key, map) {
console.log(`${key}: ${currentValue}`);
});

// SET

const currenciesUnique = new Set(['USD', 'GBP', 'CAD', 'USD', 'GBP', 'CAD']);

currenciesUnique.forEach(function (currentValue, \_, set) {
console.log(`${currentValue}: ${currentValue}`);
});

// ForEach goes well with all the method arrays , map and set.

MAP: It is used to loop over array like foreach loop but it creates a new array and applys all operations.
->It maps element and apply the operation in array and puts result in new array.
-> Map method does not create side effect and more useful in functional programming.

----EXMAPLE OF MAP METHOD----

console.log(movements.map(value => Math.abs(Math.round(value \* 1.1))));

//Example 2:
console.log(
movements.map(
(movement, index) =>
` ${index + 1} : you${
        movement > 0 ? ' deposited' : ' withdraw'
      } ${Math.abs(movement)}`
)
);

FILTER: It filters array and satisfy certain condition that are specified.
-> The elements that return true for the condition will be returned into new array.

// EXMAPLE :
const deposit = movements.filter(function (data) {
return data > 0;
});
console.log(deposit);

REDUCE: reduce boils ("reduces") all array elements down to one single value (eg . adding all element together).
-> It modifies the original array itself.

// EXMAPLE :

// Accumlator value is the sum of all previous value or we can say previous value.

const reduceDemo = movements.reduce(
  (accumlatorValue, currenValue, indexValue, arrayData) => {
    console.log(accumlatorValue, indexValue);
    return accumlatorValue + currenValue;
  },
  0 // Inital value
);
console.log(reduceDemo);

// ANOTHER REDUCE EXAMPLE

const calc = function (mov) {
  const balance = mov.reduce((prevValue, curValue) => prevValue + curValue, 0);
  labelBalance.textContent = `${balance} EUR`;
};

// EXAMPLE : MAX VALUE
console.log(
  movements.reduce((prev, cur) => (prev > cur ? prev : cur), movements[0])
);

>>> MAGIC OF CHAINING METHODS :

const euroToUSD = 1.1;
// PIPE LINE
const total = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUSD)
  .reduce((acc, mov) => acc + mov, 0);
labelBalance.textContent = `${Math.abs(Math.round(total))} USD`;


>>> FIND METHOD :
-> Find method is same as filter method in array.
-> Find method return first element that matches the condition that was specified but in the other hand filter method creates new array and returns all the elements that matches the condition that is defined.