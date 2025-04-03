// const promise = new Promise((resolve, reject) => {
//   console.log("Async task execution");
//   if (true) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// promise.then(
//   () => {
//     console.log("Passed");
//   },
//   () => {
//     console.log("Failed!");
//   }
// );

// another method

// const promise = new Promise((resolve, reject) => {
//   console.log("Async task execution");
//   if (true) {
//     const person = { name: "ananya" };
//     resolve(person);
//   } else {
//     const error = { errCode: "1001" };
//     reject(error);
//   }
// });

// promise.then(
//   (val) => {
//     console.log(val);
//   },
//   (err) => {
//     console.log("err");
//   }
// );

// another method

// const promise = new Promise((resolve, reject) => {
//   console.log("Async task execution");
//   if (false) {
//     const person = { name: "ananya" };
//     resolve(person);
//   } else {
//     const error = { errCode: "1001" };
//     reject(error);
//   }
// });

// promise
//   .then((val) => {
//     console.log(val);
//   })
//   .catch(() => console.log("Failed!"));

// another method
// promise has already been resolved -> already promise has been done
// let p = Promise.resolve("execution is done");
// similarly reject
// let c = Promise.reject("Execution is rejected");
// we can attach .then() to promises but we cannnot attach anything to callback fnc once it is called
// p.then((val) => {
//   console.log(val);
// });

// chaining in promise
// in promises every then handler should return something so that other then handler will accept it
// const p = Promise.resolve("done");

// p.then((val) => {
//   console.log(val);
//   return "done2";
// })
// .then((val) => {
//   console.log(val);
//   return "done3";
// })
// .then((val) => console.log(val));

// promise.all() and promise.race()
const makeApiCall = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This API executed in:" + time);
    }, time);
  });
};
let multiApiCall = [makeApiCall(1000), makeApiCall(2000), makeApiCall(500)];
Promise.all(multiApiCall).then((values) => {
  console.log(values);
});

// makeApiCall(500) should execute first coz its less time
// in order to do that we gonna make use of race()

Promise.race(multiApiCall).then((value) => {
  console.log(value);
});


// chapter 8 -> async and await