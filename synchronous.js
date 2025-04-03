// synchronous is a blocking code
console.log("start operation");

function sleep(miliseconds) {
  let startTime = new Date().getTime();
  console.log("operation is running");
  while (new Date().getTime() < startTime + miliseconds) {
    console.log("In progress");
  }
  console.log("Operation is done");
}

sleep(1000);
console.log("do something else");
