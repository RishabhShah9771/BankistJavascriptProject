# BankistJavascriptProject

Overview

This project demonstrates various array methods in JavaScript, explaining how they work and when to use them. It provides detailed explanations and examples of different array operations, including slicing, splicing, mapping, filtering, and reducing.

Array Methods in JavaScript

1. Slice Method (slice())

Extracts a portion of an array without modifying the original array.

Syntax: array.slice(startIndex, endIndex)

Example:

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-1)); // ['e']
console.log([...arr, 'f']); // ['a', 'b', 'c', 'd', 'e', 'f']

If no arguments are passed, it returns a copy of the original array.

To create a shallow copy, use the spread operator: [...].

2. Splice Method (splice())

Modifies the original array by adding or removing elements.

Commonly used to delete elements.

Syntax: array.splice(startIndex, deleteCount, item1, item2, ... )

Example:

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.splice(-1)); // Removes last element ['e']
console.log(arr.splice(1)); // Removes all elements after index 1

3. Reverse Method (reverse())

Reverses the order of elements in an array (modifies the original array).

Example:

let arr = ['a', 'b', 'c'];
console.log(arr.reverse()); // ['c', 'b', 'a']

4. Concat Method (concat())

Combines two arrays without modifying them.

Alternative: Spread operator ([...]).

Example:

let arr1 = ['a', 'b'];
let arr2 = ['c', 'd'];
console.log(arr1.concat(arr2)); // ['a', 'b', 'c', 'd']
console.log([...arr1, ...arr2]); // Same as concat

5. Join Method (join())

Joins all elements into a string with a specified separator.

Example:

let arr = ['a', 'b', 'c'];
console.log(arr.join('-')); // 'a-b-c'

New Array Methods

6. At Method (at())

A modern way to access elements by index (supports negative indexing).

Example:

let arrayList = [23, 24, 25];
console.log(arrayList.at(0)); // 23
console.log(arrayList.at(-1)); // 25 (Last element)

7. Looping Through Arrays

For-Of Loop

Used to iterate over array elements.

Example:

for (const [index, movement] of movements.entries()) {
console.log(`Movement ${index + 1}: ${movement > 0 ? 'Deposited' : 'Withdrew'} ${Math.abs(movement)}`);
}

ForEach Loop

Executes a callback function for each element in the array.

Example:

movements.forEach((movement, index) => {
console.log(`Movement ${index + 1}: ${movement > 0 ? 'Deposited' : 'Withdrew'} ${Math.abs(movement)}`);
});

Note: Unlike for-of, forEach does not support break or continue.

Working with Maps and Sets

8. Map (map())

Creates a new array by applying a transformation function to each element.

Example:

console.log(movements.map(value => Math.abs(Math.round(value \* 1.1))));

Another Example:

console.log(movements.map((movement, index) => ` ${index + 1}: ${movement > 0 ? 'Deposited' : 'Withdrew'} ${Math.abs(movement)}`));

9. Filter (filter())

Returns a new array with elements that satisfy a given condition.

Example:

const deposits = movements.filter(data => data > 0);
console.log(deposits);

10. Reduce (reduce())

Reduces an array to a single value.

Example:

const totalBalance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(totalBalance);

Finding Max Value with Reduce:

console.log(movements.reduce((prev, cur) => (prev > cur ? prev : cur), movements[0]));

Method Chaining

Chaining multiple array methods together for complex operations.

Example:

const euroToUSD = 1.1;
const totalUSD = movements
.filter(mov => mov > 0)
.map(mov => mov \* euroToUSD)
.reduce((acc, mov) => acc + mov, 0);
console.log(Math.abs(Math.round(totalUSD)) + ' USD');

Additional Methods

11. Find Method (find())

Returns the first element that matches a condition.

Example:

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

12. Find Index (findIndex())

Returns the index of the first element that satisfies a condition.

Example:

const withdrawalIndex = movements.findIndex(mov => mov < 0);
console.log(withdrawalIndex);

13. Find Last Index (findLastIndex())

Returns the index of the last element that satisfies a condition.

Example:

const lastWithdrawalIndex = movements.findLastIndex(mov => mov < 0);
console.log(lastWithdrawalIndex);

14. Some and Every Methods

Include method returns true if the value is present in the array & If we want to check conditions then we can use some and every method which will also return true or false based on the condition. 

Include will only check for equality but some & every method will check for equality and condition.

some(): Checks if at least one element satisfies a condition.

every(): Checks if all elements satisfy a condition.

Example:

console.log(movements.some(mov => mov > 1000)); // true if at least one element > 1000
console.log(movements.every(mov => mov > 0)); // true only if all elements > 0

