console.log(this);

function stageOfThis() {
  return typeof this;
}

console.log(stageOfThis());

function thisWithNoScript() {
  "use strict";
  return this;
}

console.log(thisWithNoScript());

const bollywoodFilm = {
  name: "Bajirao Mastani",
  lead: "Ranveer",

  introduce() {
    return `${this.lead} performs in ${this.name}`;
  },
};

console.log(bollywoodFilm.introduce());

const filmDirector = {
  name: "Sanjay Leela Bhansali",
  cast: ["Ranveer", "Deepika", "Priyanka"],

  announceCast() {
    this.cast.forEach((actor) => {
      console.log(`${this.name} introduces ${actor}`);
    });
  },
};

filmDirector.announceCast();

const filmSet = {
  crew: "Spot boys",
  prepareProps() {
    console.log(`Outer this.crew: ${this.crew}`);

    function arrangeChairs() {
      console.log(`Inner this.crew: ${this.crew}`);
    }
    arrangeChairs();

    const arrangeLights = () => {
      console.log(`Arrow this.crew: ${this.crew}`);
    };
    arrangeLights();
  },
};

filmSet.prepareProps();

// Detached Methods

const actor = {
  name: "Ranveer",
  bow() {
    return `${this.name} takes a bow`
  }
}

const detachedBow = actor.bow

console.log(detachedBow());

// Call, apply -> retruns result and BInd returns functions

