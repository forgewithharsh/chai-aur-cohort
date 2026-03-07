// Q1
for (let i = 1; i <= 10; i++) {
  // console.log(i)
}

// Q2
let i = 10;
while (i >= 1) {
  // console.log(i);
  i--;
}

// Q3
for (let i = 1; i <= 20; i = i + 1) {
  // console.log(i);
}

// Q4
let j = 1;
while (j <= 15) {
  // console.log(j);
  j += 2;
}

// Q5
for (let i = 0; i <= 10; i++) {
  let table = 5;
  // console.log(`${table} * ${i} = ${table * i}`);
}

// Q6
let sum = 0;
for (i = 1; i <= 100; i++) {
  sum += i;
}
// console.log(sum);

// Q7
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    // console.log(i);
  }
}

// Q8
// let value = prompt("Give a number");
// for (let i = 0; i <= value; i++) {
//   if (i % 2 === 0) {
// console.log(i + "is Even");
//   } else {
// console.log(i + "is Odd");
//   }
// }

// Q9
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    // console.log(i);
  }
}

// Q10
for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) {
    break;
  }
  // console.log(i);
}

// Q11
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    continue;
  }
  // console.log(i);
}

// Q12
let counter = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    counter++;
    console.log(i);
  }

  if (counter === 5) {
    break;
  }
}
