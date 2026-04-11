import fs from "node:fs";

// Write
fs.writeFile("async.txt", "Hello Async!", (err) => {
  if (err) {
    console.log("Error", err);
  }
  console.log("File written successfully!");
});

// Read
fs.readFile("async.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error", err);
  }
  console.log("READ:", data);
});

// Callback Hell
// fs.readFile("a.txt", "utf-8", (error, data) => {
//   fs.writeFile("b.txt", data, (err) => {
//     fs.appendFile("b.txt", "\nDone", (err) => {
//       fs.unlink("a.txt", (err) => {
//         console.log("a.txt deleted");
//       });
//     });
//   });
// });
