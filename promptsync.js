const readline = require("readline");
// since prompt sync is a fnc we have empty fnc to execute it
const prompt = require("prompt-sync")();

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const name = prompt("what is your name?");
console.log(name);
// but in prompt we have to use ctrl+c to close the command line

// next
// Chapter-2 (NPM -> Node.js Package Manager)