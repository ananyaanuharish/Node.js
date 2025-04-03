// how we can accept the input from the user in our command line
// we cna make use of readline package

const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// now we have interface so we can have whatever the question we want

// when we have this rl.question , we will wait for the user to add input, when user adds the input and hit the enter callback() is called
rl.question(`what is your name?`, (name) => {
  console.log(`Hi ${name}`);
  rl.close();
});

// when we want to get rid of this callback() we can use prompt-sync 
// terminal -> npm i prompt-sync
