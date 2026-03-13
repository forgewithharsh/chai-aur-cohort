let h1 = document.createElement("h1");
h1.textContent = "Hello Ji kaise ho , Chai pe lo";
h1.style.color = "red";
document.body.prepend(h1);

let buynow = document.querySelector(".boy-now");
// console.log(buynow);

let heading = document.querySelector("#heading");
heading.textContent = "Welcome to Chaicode";

let liTags = document.querySelectorAll("li");
liTags.forEach(function (val) {
  // console.log(val.textContent);
});

for (let i = 0; i < liTags.length; i++) {
  // console.log(liTags[i].textContent);
}

let image = document.querySelector("img");
// console.log(image.getAttribute("src"));

document
  .querySelector("img")
  .setAttribute("src", "https://ui.chaicode.com/chai-logo.png");

let div = document.querySelector("div");
div.setAttribute("title", "hello");

let ul = document.querySelector("ul");
let li = document.querySelector("li");
li.textContent = "Chaicode";
ul.appendChild(li);

let img = document.createElement("img");
img.setAttribute("src", "https://ui.chaicode.com/chai-logo.png");

document.querySelector("div").prepend(img);

let ul1 = document.querySelector("ul");
let li1 = document.querySelector("li");

ul1.removeChild(li1);

let li2 = document.querySelectorAll("ul li:nth-child(2n");
li2.forEach(function (e) {
  e.classList.add("highlight");
});

let p = document.querySelectorAll("p");
p.forEach(function (para) {
  para.style.fontSize = "18px";
});

p.addEventListener("dblclick", function () {
  p.style.color = "pink";
});

let input = document.querySelector("input");
input.addEventListener("input", function (e) {
  // console.log("typed");
  console.log(e.data);

});


