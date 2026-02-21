const player = {
  username: "Captain Price",
  health: 100,
  weapon: "AK-47",

  attack() {
    console.log(this.username + " is attacking with " + this.weapon);
  },
};

const soldier = Object.create(player);
soldier.username = "Ghost";
soldier.health = 380;
soldier.attack = function () {
  return `${this.username} is shooting with ${this.weapon}`;
};
console.log(soldier);
