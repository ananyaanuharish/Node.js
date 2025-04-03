// to run argument -> terminal-> node argument.js name=ananya
// ntg gonna happen
// so make use of process.argv
// console the argument
// run the file
// now we can see array which contains ---
// -path of my node
// -path of my file which we want to execute
// -argument

// console.log(process.argv);

// make use of slice
// console.log(process.argv.slice(2)[0]);

// if we want to print all three
// process.argv.forEach((val, index) => {
//   console.log(`${index}:${val}`);
// });

// instal minimist -> npm i minimist
const minimist = require("minimist");
const argNew = minimist(process.argv.slice(2));
console.log(argNew.name);
// whenever we use minimist we need to run with key , e.g -> node argument.js --name=ananya