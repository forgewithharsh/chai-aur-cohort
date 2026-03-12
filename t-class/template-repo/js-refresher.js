// Hello World
// console.log("Hello World!");

// Code Structure
// kebab-case file name. Use Semicolon

// Topic: Comments
// Interns should not touch this logic. [single line]
/*
  Line one
  Line two
  Line three
[Multiline]
 */

// Topic: Variables
// Steps --> create, store, use, modify

let myFavLang;
myFavLang = "JavaScript";
// console.log(myFavLang);

myFavLang = "TypeScript";
// console.log("After learning TS my fav is: ", myFavLang);

// Good Practice
// Use camelCase for variable names
// Rule for Identifiers

let cool = "i am cool";
let COOL = "I AM COOL";

const G = 9.841; // m/s^2

// G = 'o ji' --> this will not work
// console.log(G);

// UPPERCASE
const VDAY = "14 Feb";

const days = "days from VDay";

// console.log(Math.PI);

// Topic: Data Types
// Numbers - integer, float

let myNum = 45.65;
// INFINITY, -INFINITY and NAN (Not A Number)
// console.log(1 / 0);
// console.log(6 / "not a number");
// console.log(NaN ** 0);

// BigInt
let bigBalance = 9000719925474099984559584958n;

// String
let single = "I am single 🥀";
let double = "I am double 😏";
let backtick = `string interpolation`;

let naam = "harsh";
// console.log(`My name is ${naam}.`);

// Boolean (true, false)
let isPassed = true;
let IsSingle = false;

// Null
let partner = null;

// Undefined (value not assigned)
let ekVariableHai;
// console.log(ekVariableHai);

let x = 12;
x = undefined;

// console.log(x);

// Symbol - To create unique identifiers for objects.

// Object
const person = {
  name: "harsh",
  age: "19",
  mobile: 9898,
  isMarried: false,
};

// typeof W return type
// console.log(typeof 12.4556);
// console.log(typeof 12.12894567655789);
// console.log(typeof "harsh");
// console.log(typeof undefined);
// console.log(typeof Symbol("id"));
// console.log(typeof Math);

// console.log("Type of null:", typeof null);
// console.log(typeof console.log);

// Type conversion
// String Conversion

let choice = false;

let strChoice = String(choice);

// Numebr Conversion
let strInput = "25";
let age = Number(strInput);

let myAge = Number("Twenty Five");
// console.log(myAge);

// Boolean Conversion
// console.log(Boolean(0))
// Truthy, Falsy

// Topic: Operators
/* Terms
  Operators [+, - ,  / , *]
  Operand - on which we apply operators [for eg. in a + b, a and b operands]
  Unary - An operator is unary if it has a single operand. (-number)
  Binary - double operand [a - b]
  Ternary - short hand if-else (?)
*/

// String Concatination
// console.log("ak" + "cool");
// Rule - Note that if any of the operands is a string, then the other one is converted to a string too.

// console.log(3 + "5"); // 35
// console.log(3 + "5" + 3); // 353
// console.log(3 + 3 + "5"); // 65

// Modify in Place
let aura = 0;
// console.log((aura += 10));
// console.log((aura *= 10));

// Increment and Decrement
let counter = 0;
counter++;
// console.log(counter);

counter--;
// console.log(counter);

// There are two ways to write [prefix and postfix]
let newCounter = 10;
// console.log(++newCounter);

// ++, --, prefix, suffix
// console.log(newCounter - 1);

// Bitwise Operators
// Comparisons - >, <, >=, <=, !==, ===
// Strict, Lose

// console.log(2 == "2"); // it compair value
// console.log(2 === "2"); // it compair value + type

let a = 19;
if (a > 19) {
  console.log("adult");
} else {
  console.log("chotti bacchi");
}

// Function declaration
function sum(a, b) {
  return a + b;
}

// Function Expression
const add = function (a, b) {
  return a + b;
};

// Arrow Function
const addition = (a, b) => a + b;
