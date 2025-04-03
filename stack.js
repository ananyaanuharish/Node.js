// there are some cases where whenever ur working on some projects and u want to print the stack of ur code

const function1 = () => console.trace();
const function2 = () => function1();

function2();

// we can calculate the time spent by the function
const sum = () => console.log(`The sum of 2 and 3 is : ${2 + 3}`);
const multiply = () =>
  console.log(`The multiplication of 2 and 3 is : ${2 * 3}`);

const meausreTime = () => {
  console.time("sum()");
  sum();
  console.timeEnd("sum()");

  console.time("multiply()");
  multiply();
  console.timeEnd("multiply()");
};
meausreTime();


// to install packages 
// npm i progress
