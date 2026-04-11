import fs from "node:fs"

// 1. Write

fs.writeFileSync("test.txt", "Hello from sync fs!")

// 2. Read
const data = fs.readFileSync("test.txt", "utf-8")

// console.log(data);

// Append
fs.appendFileSync("test.txt", "\nHello from append")

// Mkdir
fs.mkdirSync("myFolder/innerFolder", {recursive: true})

// Unlink
// fs.unlinkSync("test.txt")

// Rename
fs.renameSync("test.txt", "text.txt")

// Copy -> Structured Clone
fs.cpSync("text.txt", "finalTest.txt")

// rm
fs.rmSync("myFolder", {recursive: true})
