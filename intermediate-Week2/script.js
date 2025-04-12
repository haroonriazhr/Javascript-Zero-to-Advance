// Week-2
// Intermediate
/*
* Theory:

! Arrays: An array is collection of storing multiple elements in order under a one variable name.

* Deep Copy (Real Copy): A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values).

* Shallow Copy (Passing Referance): A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values).

! Array Methods
*  push: Adds something to the end of the array.
? Example: 
let fruits = ['apple', 'banana']; 
fruits.push('orange');

*  pop: Removes the last element from the array.
? Example: 
fruits.pop(); → ['apple', 'banana']

*  shift: Removes the first element from the array.
? Example: 
fruits.shift(); → ['banana']

*  unshift: Adds something to the start of the array.
? Example: 
fruits.unshift('kiwi'); → ['kiwi', 'banana']

*  slice: Copies a part of the array to a new array and has two parts starting index and ending index and ending inndex is not include in new array (doesn’t change the original).
? Example: 
fruits.slice(0, 1); → ['kiwi'] (original stays ['kiwi', 'banana'])

*  splice: Cuts out or adds things in the middle of the array (changes the original).
? Example: 
fruits.splice(1, 0, 'mango'); → ['kiwi', 'mango', 'banana']


! Array Iteration Methods: These are ways to go through each element in the Array and are Higher Order Functions.

! forEach: Does something with every element.
? Example: 
fruits.forEach(fruit => console.log(fruit)); →  kiwi, mango, banana

! map: Makes a new array by changing each element.
? Example: 
let upper = fruits.map(fruit => fruit.toUpperCase()); → ['KIWI', 'MANGO', 'BANANA']

! filter: Makes a new array with only elements that pass a test.
? Example: 
let long = fruits.filter(fruit => fruit.length > 4); → ['mango', 'banana']

! reduce: Combines all elements into one value.
? Example: 
let nums = [1, 2, 3]; let sum = nums.reduce((a, b) => a + b); → 6
*/

/*
!  Objects: An object is like a container that holds info/properties of somthing (like a person’s details).

* Properties, Methods, this Keyword:


! Properties: The info inside the object (key-value pairs).
? Example: 
let person = { name: 'Alex', age: 25 }; → person.name is 'Alex'

! Methods: Functions inside the object.
? Example: 
person.sayHi = function() { return 'Hi'; }; → person.sayHi() returns 'Hi'

! this: Refers to the object itself.
? Example: 
person.sayName = function() { return this.name; }; → person.sayName() returns 'Alex'

! Object/Array Destructuring, Spread Operator

* Destructuring: Destructuring in JavaScript is a simple way to take values from arrays or properties from objects and put them into separate variables. You can use it wherever you're assigning or creating new variables, like on the left side of an assignment.
! Skip elements, rename variables, set defaults, or use rest parameters
? Example (Array):
let arr = [1,2,3,4,5,6,7,8];
let [a,b, , , ,...rest] = arr;
console.log(a,b,rest);
output: 1,2 array[6,7,8]

? Example (Object):
let obj = { a:1, b:2, c:3};
let {a,b,c} = obj;
console.log(a,b,c);
output: 1 2 3
* Rename Value:
const { name: fullName, age: years } = person;

* Spread Operator: Used to make Copies or combines objects.
? Example:
let moreInfo = { ...person, job: 'coder' }; → { name: 'Alex', age: 25, job: 'coder' }
*/

/*
! Loops and Iteration: A loop repeats something until a condition is met.

* Nested Loops: Loops inside loops (like checking every row and column in a grid).
? Example:
for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(i, j);
  };
};
* Break and Continue
* break: Stops the loop completely.
? Example: 
for (let i = 1; i <= 5; i++) {
 if (i === 3) break; console.log(i); 
 }
* continue: Skips the current step and moves to the next.
? Example: 
for (let i = 1; i <= 5; i++) { 
if (i === 3) continue; console.log(i); 
}
*/

/*
! Recursion: Recursion is when a function calls itself to solve a problem.

? Base Case and Recursive Case

* Base Case: When to stop (like hitting the end).

* Recursive Case: Keeps calling itself with a smaller problem.
? Example (countdown):
function count(num) {
  if (num <= 0) return; // Base case
  console.log(num);
  count(num - 1); // Recursive case
}
count(3); // Prints 3, 2, 1

* Stack Overflow Risks: If it keeps calling itself too many times without stopping, it crashes (like stacking too many plates).
? Example: 
function infinite() { infinite(); } → Crash!
*/

/*
! Algorithms: Algorithms are step-by-step ways to solve problems.
? Basic Algorithms

* Sorting
* Bubble Sort: Keeps swapping elements until the array is sorted.
? Example: 
[5, 3, 1] → Swap 5 and 3: [3, 5, 1] → Swap 5 and 1: [3, 1, 5] → [1, 3, 5]

* Selection Sort: Finds the smallest element and puts it first, repeats.
? Example: 
[5, 3, 1] → Pick 1: [1, 3, 5]

* Searching
* Linear Search: Checks each element one by one.
? Example: 
Find 3 in [1, 3, 5] → Check 1 (no), 3 (yes!) → Found at position 1

* Binary Search: Cuts the sorted array in half each time.
? Example: 
Find 3 in [1, 3, 5] → Check middle (3) → Found!

? Some More Methods:
* Join: Takes all elements in an array and combines them into a single string, with an optional separator between them.
? Example
let arr = ["apple", "banana", "orange"];
let result = arr.join(", ");
console.log(result); // "apple, banana, orange"

* Concat: Combines two or more arrays into a new array without changing the original arrays.
? Example
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]
console.log(arr1);     // [1, 2] (unchanged)

* (Spread/Rest Operator: ...): Takes an array and "spreads" its elements out, letting you use them individually or combine them with other things.
? Example 
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4]

* Flat: Takes an array with nested arrays and flattens it into a single-level array.
? Example
let arr = [1, [2, 3], [4, [5]]];
let flattened = arr.flat();
let flatDeep = arr.flat(2); // Flattens 2 levels deep
console.log(flattened); // [1, 2, 3, 4, [5]]
console.log(flatDeep);  // [1, 2, 3, 4, 5]

* Array.from(): Turns "array-like" stuff into an array (e.g., a string into letters).
? Example
let str = "hello";
let arr = Array.from(str);
console.log(arr); // ['h', 'e', 'l', 'l', 'o']

* Array.isArray(): Checks if something is an array (true or false).
? Example
let arr = [1, 2, 3];
let notArr = "hello";
console.log(Array.isArray(arr));     // true
console.log(Array.isArray(notArr));  // false

* Array.of(): Makes an array from the exact values you give it.
? Example
let arr = Array.of(1, 2, 3);
console.log(arr); // [1, 2, 3]

let single = Array.of(5);
console.log(single); // [5]
*/

/*
* Practical:

! Q#1: Remove Duplicates from an Array?
=======================================
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
const numbers = [1, 2, 3, 3, 4, 4, 5];
console.log(removeDuplicates(numbers)); // [1, 2, 3, 4, 5]

* Alternative approach using filter
function removeDuplicatesAlt(arr) {
  return arr.filter((element, index) => arr.indexOf(element) === index);
}
====================================================================
! Q#2: Use map to double all numbers in an array?
=================================================
let nums = [1, 2, 3, 4];
let doubled = nums.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
==================================================  
! Q#3: Create an object for a car and add a method to display its specs?
========================================================================
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  showSpecs: function() {
    return `${this.brand} ${this.model}, Year: ${this.year}`;
  }
};
console.log(car.showSpecs()); // "Toyota Camry, Year: 2020"
========================================================================
! Q#4: Destructure the object to extract specific properties?
=============================================================
let { brand, year } = car;
console.log(brand, year); // "Toyota" 2020
==================================================  
! Q#5: Print a multiplication table (e.g., 5x5) using nested loops?
===================================================================
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row += (i * j) + "\t"; // \t adds space between numbers
  }
  console.log(row);
}
// Output:
// 1   2   3   4   5
// 2   4   6   8   10
// 3   6   9   12  15
// 4   8   12  16  20
// 5   10  15  20  25
================================================================= 
! Q#6: Write a recursive function to calculate Fibonacci numbers?
=================================================================
function fibonacci(n) {
  if (n <= 1) return n; // Base case: 0 or 1
  return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}
console.log(fibonacci(6)); // 8 (sequence: 0, 1, 1, 2, 3, 5, 8)
===============================================================
! Q#7: : Implement bubble sort on an array of numbers?
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
let unsorted = [5, 3, 8, 1, 2];
console.log(bubbleSort(unsorted)); // [1, 2, 3, 5, 8]
================================================================
todo Q#8: Solve 10 easy problems on LeetCode (e.g., 'Two Sum')? //Pending...
*/
// todo: Build a Weather App (fetch API data, display temperature). //Pending...