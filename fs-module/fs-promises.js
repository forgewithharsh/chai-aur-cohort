import fs from "node:fs/promises";

async function main() {
  const data = await fs.readFile("promise.txt", "utf-8");
  console.log(data);
}

main();
