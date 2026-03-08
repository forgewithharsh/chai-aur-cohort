let fnc = function () {
  console.log("Hello World");
};

function sum(v1, v2) {
  console.log(v1 + v2);
}

sum(2, 3);

// Default
function add(v1 = 2, v2 = 2) {
  console.log(v1, v2);
}

add();

// Rest
function abcd(a, b, c, ...abc) {
  console.log(a, b, c, abc);
}

abcd(1, 2, 3, 4, 5, 6);

// Return
function abcd() {
  return 12;
}

const val = abcd();
console.log(val);

// First class Function
function hello(val) {
  val();
}

hello(function () {
  console.log("Hello World");
});

// High Order Function
function hod(){
    return function() {
      console.log("Hii Harsh")
    }
}

hod()()
