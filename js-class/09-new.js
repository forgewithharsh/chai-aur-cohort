function TataCar(chassisNumber, modelName) {
  this.chassisNumber = chassisNumber;
  this.modelName = modelName;
  this.fuelLevel = 100;
}

TataCar.prototype.status = function () {
  return `Tata ${this.modelName} #${this.chassisNumber} | Fuel: ${this.fuelLevel}`;
};

const car1 = new TataCar("DL-101", "Nexon");
const car2 = new TataCar("MH-202", "Harrier");

console.log(car1.status());
console.log(car2.status());
