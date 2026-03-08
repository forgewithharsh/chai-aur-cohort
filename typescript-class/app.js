"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("This is a ts code");
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 3));
function greet(name) {
    return `Hello ${name}`;
}
console.log(greet("Harsh"));
function rockPaperScissor(user, computer) {
    if (user === computer)
        return "draw";
    if (user === "paper" && computer === "rock")
        return "user";
    if (user === "scissor" && computer === "paper")
        return "user";
    if (user === "rock" && computer === "scissor")
        return "user";
    return "computer";
}
console.log(rockPaperScissor("paper", "rock"));
//# sourceMappingURL=app.js.map