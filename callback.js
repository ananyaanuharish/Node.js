// callback fnc is passed as an argument into another function and other fnc will exceute this fnc at later point of time

function asyncTask(cb) {
  setTimeout(() => {
    cb(null, "this is data from server");
  }, 0);
}

asyncTask((err, data) => {
  if (err) {
    throw err;
  } else {
    console.log("data", data);
  }
});

// when we want to execute a logical sequence one after the another we result into the nesting of callback()
// when we have multiple nested callback we call it as callback hell
// chapter 7 -> Promises