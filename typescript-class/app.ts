console.log("This is a ts code");

function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(3, 3));

function greet(name: string): string {
  return `Hello ${name}`;
}

console.log(greet("Harsh"));

type Items = "rock" | "paper" | "scissor";
type Response = "user" | "computer" | "draw";

function rockPaperScissor(user: Items, computer: Items): Response {
  if (user === computer) return "draw";

  if (user === "paper" && computer === "rock") return "user";
  if (user === "scissor" && computer === "paper") return "user";
  if (user === "rock" && computer === "scissor") return "user";

  return "computer";
}

console.log(rockPaperScissor("paper", "rock"));
