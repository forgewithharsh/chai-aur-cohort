const artifcat = {
  name: "Obsidian Crown",
  era: "Ancient",
  value: 5000,
  material: "volcanic glass",
};

const keys = Object.keys(artifcat);
const values = Object.values(artifcat);
const entries = Object.entries(artifcat);

console.log(keys);
console.log(values);
console.log(entries);

for (const [key, value] of Object.entries(artifcat)) {
  console.log(`${key}: ${value}`);
}

const priceList = [
  ["Obsidian Crown", 50000],
  ["Ruby Pendant", 30000],
  ["Iron Shield", 5000],
];

const priceObject = Object.fromEntries(priceList);
console.log(priceObject);

const displayCase = {
  artifact: "Obsidian",
  location: "Hall A, Case 3",
  locked: true,
};

Object.freeze(displayCase);
delete displayCase.locked;

const catalogEntry = {
  id: "ART-001",
  description: "Ancient Crows",
  verified: true,
};

// Seal use to when you allowed to edit the existing property

const sealed = Object.seal(catalogEntry);
console.log(sealed);

const secureArtificats = { name: "Ruby Pendant" };
Object.defineProperty(secureArtificats, "catalogId", {
  value: "SEC-999",
  writable: false,
  enumerable: true,
  configurable: false,
});

console.log(secureArtificats.catalogId);
secureArtificats.catalogId = "HACKED";
console.log(secureArtificats.catalogId);

for (const [key, value] of Object.entries(secureArtificats)) {
  console.log(`${key}: ${value}`);
}

const desc = Object.getOwnPropertyDescriptor(secureArtificats, "name");
console.log(desc);

