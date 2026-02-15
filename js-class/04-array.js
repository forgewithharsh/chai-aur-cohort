const names = ["Harsh", "Harry", "Guleria"];
const emp = [];

const emptyArr = Array(3);
console.log(emptyArr);
console.log(emptyArr.length);

const singlePassenger = Array.of(3);
console.log(singlePassenger);

const trainCode = Array.from("DUST");
console.log(trainCode);

const tempTrain = ["A", "B", "C", "D", "E"];
tempTrain.length = 3;
console.log(tempTrain);

tempTrain.length = 5;
console.log(tempTrain);

console.log(typeof []);
console.log(Array.isArray([]));
console.log(Array.isArray("Ravi"));
