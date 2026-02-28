const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Chaicode");
    reject(new Error("Chaicode"));
  }, 2000);
});

console.log(promise);

// promise.then((value) => {
//   console.log(value);
// });

// promise
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));



