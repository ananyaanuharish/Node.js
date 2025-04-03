// Asynchronous is a non-blocking code and single threaded
console.log("start operation");

function sleep(miliseconds) {
  console.log("operation is running");
  setTimeout(() => {
    console.log("Operation is done!");
  }, miliseconds);
}

sleep(1000);
console.log("do something else");

// chapter 6 --> Callbacks & Callback Hell
