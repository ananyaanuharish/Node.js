// 1st way is using Error objects

// const error = new Error("something is wrong!");
// console.log(error.stack);
// console.log(error.message);

// 2nd way is using throw keyword

// const error = new Error("something is wrong!");
// throw new Error("I am error object")

// 3rd way
// for custom error object
// create new file custom.js
// importing custom.js file

// const error = new Error("something is wrong!");

// const { CustomError } = require("./custom");
// throw new CustomError("this is a customer error");

// 4th way ->  handle exception using try and catch

// try {
//   doSomething();
// } catch (e) {
//   console.log("Error Occured");
//   console.log(e);
// }

// // to define doSomething fnc
// function doSomething() {
//   console.log("I am from doSomething function");
// }

// 5th way
// uncaught exception -> if we dont have particular exception it will fall by a default exception

function doSomething() {
  const data = fetch("localhost:300/api");
}
// process.on("uncaughtException", (err) => {
//   console.log("There was an uncaught exception", err);
//   process.exit(1);
// });

// doSomething();

// 6th way exception with promises

// const promise = new Promise((resolve, reject) => {
//   if (false) {
//     resolve(doSomething());
//   } else {
//     reject(doSomething());
//   }
// });
// to run promise
// promise
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log("error occured");
//     console.log(err);
//   });

// last way Async/await

const someFunction = async () => {
  try {
    await doSomething();
  } catch (err) {
    throw new CustomError(err.message);
  }
};

someFunction();


// chapter - 4