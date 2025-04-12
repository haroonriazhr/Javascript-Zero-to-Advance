//! Week 1:
//! The Basics:
// =========================================================================
// ? Variables: these are like containers that holds data of any type, and can be changed or updated.
/*
in javascript there two types variables var and let and for constant we use const
! es5: var
! es6: let, for constant we use const

* the difference:
as Js has two versions es5 and es6.
? es5: var => it is function scoped and adds itself to window object.
? es6: let, const => both are braces scoped and does'nt adds itself to window object.

* data types: number, string, boolean, undefind, null, etc.
their are two types of data in js.
? primitive: number, string, undefind, boolean, null.
? referance: array:[], object:{}, function:().
===================================================================================================
? type coersion: means converting one data type to another. When it sees different types, it tries to convert them so the code "works.But sometimes, this creates weird results. 

types of type coersion:
? implicit(auto-coersion): happens when using +, -, ==.
example:
console.log('5' + 3); //'53'
console.log('4' - 3); //1
console.log(4 == '4'); //true

? explicit(manual-coersion): coersion using functions like (String(), Number(), Boolean()).
example:
let num = 3;
console.log(String(num)); //'3'
console.log(Number('100')); //100
console.log(Boolean(0)); //false

? equality(== vs ===): loose equality (==) make coersion, while strict equality (===) does'nt.
example:
console.log('5' == 5); //true
console.log('4' === 4); //false
===================================================================================================
*/

/*
? operators
=========================================================
there four types of operators:
* arithmetic(+, -, *, /):
* logical(&&, ||, !):
* comparision(>, <, ==, !=, ===)
* Operator Precedence: What runs first?
? Order:
() → Parentheses first

/ * % →  Division,  Multiplication, Modulo

+ - → Addition, Subtraction

> < >= <= → Comparisons

&& → AND

|| → OR

= → Assignment happens last
example:
let result = 5 + 2 * 3 > 10 && true;
console.log(result); //true
======================================================================
todo: turnary(if=> ?, else=> :) Advanced concept
======================================================
*/
// ? Control Flow (Conditionals and Loops)
// ====================================================
/*
? if else: it is a conditional statment used in a code when we have to make decisions or choices.
=> If: Runs code only (if) condition is true.
=> Else If: Checks another condition if the first one is false.
=> Else: Runs if no conditions are true.
example:
let score = 75;

if (score >= 90) {
  console.log("A Grade");
} else if (score >= 75) {
  console.log("B Grade");
} else {
  console.log("Fail");
}
====================================================================================================
* Switch: is an alternative to if statment when you don't want to make multiple else-if statments.
example:
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Friday":
    console.log("Weekend is coming!");
    break;
  default:
    console.log("Another day...");
}
=> break stops the code after a match.
=> default runs if no cases match.
================================================================================================
? Loops: A loop repeats code until a condition is met.
=======================================
the three main types of loops commonly used:

! for: Used when you know how many times you want to repeat something
Has three parts: initialization, condition, and increment/decrement.
example:
for(let i = 0; i<=5;i++){
console.log(i);
}

! while: Used when you don't know how many times you want to repeat something
Condition is checked after the code executes.
example:
let x = 0;
while (x < 3) {
    console.log("Hi"); // Prints "Hi"
    x = x + 1;  // Increases x by 1 each time
}

! do-while: Similar to while loop, but runs at least once
Runs at least once even the condition is false.
example:
let x = 0;
do {
    console.log("Hi") ; // Prints "Hi"
    x = x + 1;  // Increases x by 1
} while (x < 3);
==================================================================
? Function: a function is a reuseable block of code which can be used anywhere in the whole script.
example:
function abcd(a){
  console.log("Hi" + " " + a);
  }
  abcd("Haroon");

! Function Declarations vs. Expressions: declarations are hoisted (usable before defined), while expressions aren’t.
=======================================
? Function Declarations: a function declaration is giving a name to a block of code or function.
example:
function abcd(){}, abcd() => is known as function declaration. 

? Expressions: an expression is simply storing a function in a variable. the function stored in a variable is known as anonymous function.
example:
let sayHi = function(){
console.log("Hi")
}
sayHi();
================================================================
! Parameters and Return
=============================
? Parameters: parameters are the values that we give to a function to perform something on it.
example:
function abcd(name){console.log("Hi " + name)}
abcd("Haroon");
here the name inside the abcd(name) is a parameter.
================================================================================================
! Return: the return statement is what a function will return or give back to user, and it return this value where we make that function call. 
example:
function abcd(a){
return "Hi " + a; // Hi Haroon
}
abcd("Haroon");
there are two types of return  statement:
* Explicit: when we use return keyword in a function like function abcd(){ return "Hi"}.
* Implicit: when we use parantheses () instead of return keyword in a function like let abcd = () => ('Hi').
================================================================================
? Default Parameters: when a function expect a parameter and you don’t give anything. then default parameters get into action to take over,if it is defined. 
example:
let dp = function(a = 'noName'){
return "Hi " + a;
}
console.log(dp());
==================================================
! Arrow function: arrow functions are from (es6) and a simple and shoter way to write a function. syntax: () => {}.
====================================================
! THIS: this is a keyword that refers to the "current object" or "context" where your code is running.
example:
? Alone (Global): 
console.log(this); // {} in js runtime environment , window in browser

? In regular function:
function sayHi() {
  console.log(this);
}
sayHi(); // window

? In object with regular function:
const obj = {
  name: "Alex",
  say: function() {
      console.log(this.name);
  }
};
obj.say(); // refers to the current object or value that we want

? In In object with arrow function 
const obj1 = {
  name: "Alex",
  say: () => {
      console.log(this.name);
  }
};
obj1.say(); // undefined because it ignores obj1 and check name in global area like window,and in window there is no name property.

! Arrow (=>): Ignores obj1, looks outside (to window), finds no name, says undefined.
! Regular (function): Sticks with obj1, sees "Alex," and says it.
========================================================================================================
! Scope is just "where something lives" in your code or where you can use it.
==========================================================================
? Scope: Global vs. Local
* Global Scope: Lives everywhere in your program. Anyone can see or use it.
example:
var hello = 'Hi everyone!'
console.log(hello);

* Local Scope: Lives only inside a smaller area, like a function. Only that area can see it.
example:
function hi(){  
let a = 'hello, user';
 console.log(a);
}
console.log(hi()); // undefined
=============================================================================================
? hoisting: when we declare a variable or function their declaration move to the top of the code and ignores initialization.
example:
* variable:
console.log(a); // a is undefind it means a exists this is hoisting.
var a = 5;
* function:
sayHi();
function sayHi(){
console.log('Hi')
}
==============================================================================================================
*/
//? Basic Practical:
//  ! Q#1: Write a program to swap two variables without a third variable?
// ===============================================
//* array destructuring
// let a = 10;
// let b = 12;
// [a,b] = [b,a];
// console.log(a,b);
//* second methoed (+,-)
// a = a+b;
// b = a-b;
// a = a-b;
// console.log(a);
// console.log(b);
// =====================================================
// ! Q#2: Create an object representing a person and log their details?
// ==================================================================
// let obj = {
//   name:"HAROON",
//   age:21,
//   profession:"SE",
//   hobby:"photography, song writing, videography",
// }
// console.log(obj)
// ==================================================================
// ! Q#3: Build a simple calculator function for +, -, *, /?
// ==============================================================
// function calculator(num1, num2, operator) {
//   if (operator === "+") {
//     console.log(num1 + num2);
//   }
//   else if (operator === "-") {
//     console.log(num1 - num2);
//   }
//   else if (operator === "*") {
//     console.log(num1 * num2);
//   }
//   else if (operator === "/") {
//     if (num2 !== 0) {
//       console.log(num1 / num2);
//     } else {
//       console.log("cannot divide a number by 0");
//     }
//   }
// };

// calculator(2,5,'+');
// ========================================================
// ! Q#4: Write a program to check if a number is even or odd?
// ===================================================================
// function evenOdd(num) {
//   if(num % 2===0){
//     console.log(`number is even = ${num}`);
//   }else{
//     console.log('number is odd');
//   }
// };
// evenOdd(98);
// ========================================================
// ! Q#5: Create a for loop to print the first 10 Fibonacci numbers?
// ================================================================
// function Fibonacci() {
//   let a = 0, b = 1; // Start with 0 and 1
// console.log(a);   // Print the first number (0)

// for (let i = 1; i < 10; i++) {
//     console.log(b); // Print the next number
//     let next = a + b; // Add the last two
//     a = b;           // Shift a forward
//     b = next;        // Shift b forward
// }
// }
// console.log(Fibonacci())
// ===================================================================
// ! Q#6: Write a function to calculate the factorial of a number. Convert it to an arrow function and test it?
// ===========================================================================
// function factorial(n) {
//   let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result = result * i;
//     }
//     return result;
// }
// console.log(factorial(0));
// ======================================================
// let factorial = (n) => {
//   let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result = result * i;
//     }
//     return result;
// }
// console.log(factorial(0));
// ===========================================================================
// ! Q#7: Experiment with var vs. let in a loop to see hoisting effects?
// ===================================================================
// for (var i = 0; i < 3; i++) {
//   console.log("Inside loop, i:", i);
// }
// console.log("Outside loop, i:", i);
// ? the loop, i is still accessible outside because var doesn’t respect block scope (the {} of the for loop).

// for (let j = 0; j < 3; j++) {
//   console.log("Inside loop, j:", j);
// }
// console.log("Outside loop, j:", j);
// ? After the loop, j is undefined outside because its scope is limited to the loop block.