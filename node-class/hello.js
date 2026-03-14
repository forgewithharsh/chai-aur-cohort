import fs from "fs"

console.log("Chai Code");


setTimeout(() => console.log("Hello From SetInetrval 1"), 0); // Callback Function

const a = 2 + 2;
console.log("a", a)

fs.readFile("sample.txt", 'utf-8',(err, data) => {
  console.log("File Reading complete");

})
