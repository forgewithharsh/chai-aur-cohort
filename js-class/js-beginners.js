// Variables --> var, let, const

let age = 24;
// console.log(age);
age = 35;

age = 45;

// console.log(age);

const age2 = 21;
// console.log(age2);

// Function --> A resueble set of instructions.
// A block of code designed to perform a specific task.

function sayHello() {
  console.log("Bye");
}

// sayHello();

function greetUser(x) {
  console.log("hello", x);
}

// greetUser("Harsh");

function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

const r = add(2, 5);

for (let i = 0; i < r; i++) {
  // console.log(`Value of i is ${i}`);
}

let cartoon = function () {
  console.log("Anime");
};

// cartoon();

// Arrow Functions
const isAllowedToVote = (age) => age >= 18;
// console.log(isAllowedToVote(23));

const isUserAllowedToOpenBankAccount = (age, minBalance) =>
  age >= 18 && minBalance >= 5000;

// console.log(isUserAllowedToOpenBankAccount(23, 6000));

// Data Structures
// Memory mai data ko ek particular structure mei store karna
// Subjectify naa kre toh kitne bdiya hoga

const fruits = ["apple", "cheeku", true, "aadu", 1, "santra", "🥭", "kela"];

fruits.push("Kiwi");
// console.log(fruits.length);
// console.log(fruits[4]);
// console.log(fruits.includes("tarbooj"));
const firstElement = fruits.slice(2, 5);
// console.log(fruits);
// console.log({ firstElement });
fruits.unshift("1", "2", "3");
// console.log(fruits);
// console.log(fruits.pop());
// console.log(fruits.indexOf("harsh"));

// High Order Function - A function that takes another function parameter.

function meraPyaraFuntion(udharKaFunction) {
  return udharKaFunction() + 40;
}

function cartoon2() {
  return 10;
}

// console.log(meraPyaraFuntion(cartoon2));

for (let i = 0; i < fruits.length; i++) {
  // console.log(fruits[i])
}

// function printKrdo(element){
//   console.log(element)
// }

// fruits.forEach(printKrdo)

// fruits.forEach((element) => console.log(`--> ${element}`));

// forEach((xyz) => console.log(`--> ${xyz}`));

function forEach(bataoKyaKarnaHai) {
  for (let i = 0; i < fruits.length; i++) {
    bataoKyaKarnaHai(fruits[i]);
  }
}

const nums = [1, 2, 3, 4, 5, 6];

const result = map((e) => e * 3);

function map(fn) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const currentElement = nums[i];
    const num = fn(currentElement);
    result.push(num);
  }

  return result;
}

// for(let i = 0; i < nums.length; i ++){
//   result.push(nums[i] * 2)
// }

console.log(result);
