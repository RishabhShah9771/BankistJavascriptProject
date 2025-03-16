# BANKIST JAVASCRIPT PROJECT

### Array Methods in JavaScript

1. **Slice Method (`slice()`)**
  - Extracts a portion of an array without altering the original array.
  - **Syntax:** `array.slice(startIndex, endIndex)`
  - **Example:**
    ```javascript
    let arr = ['a', 'b', 'c', 'd', 'e'];
    console.log(arr.slice(2, 4)); // ['c', 'd']
    console.log(arr.slice(-1)); // ['e']
    console.log([...arr, 'f']); // ['a', 'b', 'c', 'd', 'e', 'f']
    ```
  - If no arguments are passed, it returns a copy of the original array. To create a shallow copy, use the spread operator: `[...arr]`.

2. **Splice Method (`splice()`)**
  - Modifies the original array by adding or removing elements.
  - **Syntax:** `array.splice(startIndex, deleteCount, item1, item2, ...)`
  - **Example:**
    ```javascript
    let arr = ['a', 'b', 'c', 'd', 'e'];
    console.log(arr.splice(-1)); // Removes last element ['e']
    console.log(arr.splice(1)); // Removes all elements after index 1
    ```

3. **Reverse Method (`reverse()`)**
  - Reverses the order of elements in an array (modifies the original array).
  - **Example:**
    ```javascript
    let arr = ['a', 'b', 'c'];
    console.log(arr.reverse()); // ['c', 'b', 'a']
    ```

4. **Concat Method (`concat()`)**
  - Combines two arrays without modifying them. Alternatively, use the spread operator (`[...]`).
  - **Example:**
    ```javascript
    let arr1 = ['a', 'b'];
    let arr2 = ['c', 'd'];
    console.log(arr1.concat(arr2)); // ['a', 'b', 'c', 'd']
    console.log([...arr1, ...arr2]); // Same as concat
    ```

5. **Join Method (`join()`)**
  - Joins all elements into a string with a specified separator.
  - **Example:**
    ```javascript
    let arr = ['a', 'b', 'c'];
    console.log(arr.join('-')); // 'a-b-c'
    ```

### New Array Methods

6. **At Method (`at()`)**
  - A modern way to access elements by index (supports negative indexing).
  - **Example:**
    ```javascript
    let arrayList = [23, 24, 25];
    console.log(arrayList.at(0)); // 23
    console.log(arrayList.at(-1)); // 25 (Last element)
    ```

### Looping Through Arrays

7. **For-Of Loop**
  - Used to iterate over array elements.
  - **Example:**
    ```javascript
    for (const [index, movement] of movements.entries()) {
     console.log(`Movement ${index + 1}: ${movement > 0 ? 'Deposited' : 'Withdrew'} ${Math.abs(movement)}`);
    }
    ```

8. **ForEach Loop**
  - Executes a callback function for each element in the array.
  - **Example:**
    ```javascript
    movements.forEach((movement, index) => {
     console.log(`Movement ${index + 1}: ${movement > 0 ? 'Deposited' : 'Withdrew'} ${Math.abs(movement)}`);
    });
    ```
  - Note: Unlike for-of, forEach does not support break or continue.

### Working with Maps and Sets

9. **Map Method (`map()`)**
  - Creates a new array by applying a transformation function to each element.
  - **Example:**
    ```javascript
    console.log(movements.map(value => Math.abs(Math.round(value * 1.1))));
    ```
  - Another Example:
    ```javascript
    console.log(movements.map((movement, index) => ` ${index + 1}: ${movement > 0 ? 'Deposited' : 'Withdrew'} ${Math.abs(movement)}`));
    ```

10. **Filter Method (`filter()`)**
   - Returns a new array with elements that satisfy a given condition.
   - **Example:**
    ```javascript
    const deposits = movements.filter(data => data > 0);
    console.log(deposits);
    ```

11. **Reduce Method (`reduce()`)**
   - Reduces an array to a single value.
   - **Example:**
    ```javascript
    const totalBalance = movements.reduce((acc, cur) => acc + cur, 0);
    console.log(totalBalance);
    ```
   - Finding Max Value with Reduce:
    ```javascript
    console.log(movements.reduce((prev, cur) => (prev > cur ? prev : cur), movements[0]));
    ```

### Method Chaining

- Chaining multiple array methods together for complex operations.
- **Example:**
  ```javascript
  const euroToUSD = 1.1;
  const totalUSD = movements
   .filter(mov => mov > 0)
   .map(mov => mov * euroToUSD)
   .reduce((acc, mov) => acc + mov, 0);
  console.log(Math.abs(Math.round(totalUSD)) + ' USD');
  ```

### Additional Methods

12. **Find Method (`find()`)**
   - Returns the first element that matches a condition.
   - **Example:**
    ```javascript
    const firstWithdrawal = movements.find(mov => mov < 0);
    console.log(firstWithdrawal);
    ```

13. **Find Index Method (`findIndex()`)**
   - Returns the index of the first element that satisfies a condition.
   - **Example:**
    ```javascript
    const withdrawalIndex = movements.findIndex(mov => mov < 0);
    console.log(withdrawalIndex);
    ```

14. **Find Last Index Method (`findLastIndex()`)**
   - Returns the index of the last element that satisfies a condition.
   - **Example:**
    ```javascript
    const lastWithdrawalIndex = movements.findLastIndex(mov => mov < 0);
    console.log(lastWithdrawalIndex);
    ```

15. **Some and Every Methods**
   - `some()`: Checks if at least one element satisfies a condition.
   - `every()`: Checks if all elements satisfy a condition.
   - `include()`: Only checks if a value is present, whereas `some` and `every` check both the value and a condition, providing more precise results.
   - **Example:**
    ```javascript
    console.log(movements.some(mov => mov > 1000)); // true if at least one element > 1000
    console.log(movements.every(mov => mov > 0)); // true only if all elements > 0
    ```

16. **Flat and FlatMap Methods**
   - `flat()`: Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
   - **Example:**
    ```javascript
    let nestedArray = [1, 2, [3, 4, [5, 6]]];
    console.log(nestedArray.flat()); // [1, 2, 3, 4, [5, 6]]
    console.log(nestedArray.flat(2)); // [1, 2, 3, 4, 5, 6]
    ```
   - `flatMap()`: First maps each element using a mapping function, then flattens the result into a new array. It is identical to a `map` followed by a `flat` of depth 1.
   - **Example:**
    ```javascript
    let arr = [1, 2, 3, 4];
    console.log(arr.flatMap(x => [x, x * 2])); // [1, 2, 2, 4, 3, 6, 4, 8]
    ```

17. **Sort Method (`sort()`)**
   - Sorts the elements of an array in place and returns the sorted array. By default, the sort method converts elements into strings and sorts them in ascending order.
   - **Example:**
    ```javascript
    let arr = ['d', 'a', 'c', 'b'];
    console.log(arr.sort()); // ['a', 'b', 'c', 'd']
    ```
   - For alphabetical array sorting, a compare function is not required as elements are converted to strings and sorted accordingly. However, for numerical sorting, a compare function with two arguments is necessary to ensure correct sorting.
   - For numerical sorting, a compare function is needed:
    ```javascript
    let numbers = [4, 2, 5, 1, 3];
    console.log(numbers.sort((a, b) => a - b)); // [1, 2, 3, 4, 5]
    console.log(numbers.sort((a, b) => b - a)); // [5, 4, 3, 2, 1]
    // return < 0 -> A, B -> (keeping Same order)
    // return > 0 -> B, A -> (Switching to new order)

    //(a > b) => Ascending Order => a - b
    //(a < b) => Descending Order => b - a
    ```
   - Note: The sort method mutates the original array.

18. **Grouping Method**
   - The grouping method allows you to group elements of an array based on a specified criterion. This can be useful for categorizing data into different groups for further processing or analysis.
   - we get object as a result so it is called Object.groupBy
  - In the callback function, return the group names based on the specified condition to categorize the array elements accordingly.
   - **Example:**
    ```javascript
    const transactions = [200, -100, 300, -50, 400, -150];
    const transactionGroup = Object.groupBy(transactions, transaction =>
      transaction > 0 ? 'Positive' : 'Negative'
    );

    console.log(transactionGroup);
    // Output:
    // {
    //   Positive: [200, 300, 400],
    //   Negative: [-100, -50, -150]
    // }
    ```
    ```
19. **Array Fill Method**
- The `fill()` method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array length). It returns the modified array.
- **Syntax:** `array.fill(value, start, end)`
- **Example:**
 ```javascript
 let arr = [1, 2, 3, 4, 5];
 console.log(arr.fill(0, 2, 4)); // [1, 2, 0, 0, 5]
 console.log(arr.fill(7, 1)); // [1, 7, 7, 7, 7]
 console.log(arr.fill(3)); // [3, 3, 3, 3, 3]
 ```
- Note: The `fill()` method mutates the original array.

20. **FROM METHOD**
- The `from()` method creates a new, shallow-copied array instance from an array-like or iterable object.
- **Syntax:** `Array.from(arrayLike, mapFn, thisArg)`
- **Example:**
  ```javascript
  // Creating an array from a string
  let str = 'hello';
  let arr = Array.from(str);
  console.log(arr); // ['h', 'e', 'l', 'l', 'o']

  // Creating an array from a Set
  let set = new Set(['a', 'b', 'c']);
  let arrFromSet = Array.from(set);
  console.log(arrFromSet); // ['a', 'b', 'c']

  // Using a mapping function
  let numbers = Array.from({ length: 7 }, (_, x) => x * 2);
  console.log(numbers); // [2, 4, 6]

  //Exmaple how to fetch data from UI and put it in array using From Method.

  labelBalance.addEventListener('click', function (e) {
    e.preventDefault();
    const movUI = Array.from(document.querySelectorAll('.movements__value'), el =>
      Number(el.textContent.replace('€', ''))
    );
    console.log(movUI);
  });
  ```
  ```
- Note: The `from()` method does not mutate the original array-like or iterable object.
- Callback function after the length needs to have 2 arguments in which the first argument can remain _ shows we just want only one argument but need to pass two inorder to run the code.

### Non Destructive Methods

21. **toReversed Method (`toReversed()`)**
  - Creates a new array with the elements in reverse order without modifying the original array.
  - **Example:**
   ```javascript
   let arr = ['a', 'b', 'c'];
   let reversedArr = arr.toReversed();
   console.log(reversedArr); // ['c', 'b', 'a']
   console.log(arr); // ['a', 'b', 'c']
   ```

22. **toSorted Method (`toSorted()`)**
  - Creates a new array with the elements sorted without modifying the original array.
  - **Example:**
   ```javascript
   let arr = ['d', 'a', 'c', 'b'];
   let sortedArr = arr.toSorted();
   console.log(sortedArr); // ['a', 'b', 'c', 'd']
   console.log(arr); // ['d', 'a', 'c', 'b']
   ```

23. **ToSpliced Method (`toSpliced()`)**
  - Creates a new array with elements added or removed without modifying the original array.
  - **Syntax:** `array.toSpliced(startIndex, deleteCount, item1, item2, ...)`
  - **Example:**
    ```javascript
    let arr = ['a', 'b', 'c', 'd', 'e'];
    let splicedArr = arr.toSpliced(2, 2, 'x', 'y');
    console.log(splicedArr); // ['a', 'b', 'x', 'y', 'e']
    console.log(arr); // ['a', 'b', 'c', 'd', 'e']
    ```
  - This non-destructive method creates a new array with the specified changes, leaving the original array unchanged.

24. **With Method (`with()`)**
  - Creates a new array with a specified element replaced at a given index without modifying the original array.
  - **Syntax:** `array.with(index, value)`
  - **Example:**
    ```javascript
    let arr = ['a', 'b', 'c', 'd'];
    let newArr = arr.with(1, 'x');
    console.log(newArr); // ['a', 'x', 'c', 'd']
    console.log(arr); // ['a', 'b', 'c', 'd']
    ```
  - This method is useful for immutably updating an array by replacing a specific element.

### Numbers, Dates, Intl and Timers in JavaScript
1. **Numbers**
  - Numbers are always stored in binary format, which can lead to precision issues for certain numbers that are difficult to represent accurately. For example, the decimal number `0.1` cannot be represented precisely in binary, resulting in unexpected calculation results.
  - **Example:**
      ```javascript
      console.log(0.1 + 0.2); // 0.30000000000000004
      console.log(0.1 + 0.2 === 0.3); // false
      console.log(+23); // 23
      console.log(Number.parseInt('23m', 10)); // 23
      console.log(Number.parseFloat('2.3rem', 10)); // 2.3
      console.log(Number.isNaN(20)); // false
      console.log(Number.isNaN(+'23N')); // true
      console.log(Number.isNaN(23 / 0)); // false (Infinity)
      console.log(Number.isFinite(23)); // true
      console.log(Number.isFinite('20')); // false
      ```
  - This occurs because `0.1` and `0.2` are repeating fractions in binary, similar to how `1/3` is a repeating fraction in decimal. To handle such precision issues, methods like `toFixed()` or libraries like `BigDecimal` can be used for more accurate calculations.
  - When JavaScript encounters a `+` sign, it performs type coercion and converts the value to a number.
  - In `parseInt`, the value needs to start with a number followed by a string; otherwise, it will throw an error. The second parameter in `parseInt` is the radix (base), typically 10, which ensures the correct value is returned.
  - The `Number` object provides a namespace for methods like `parseInt` and `parseFloat`.
  - `Number.isFinite` is the best method to check whether a value is a finite number.

