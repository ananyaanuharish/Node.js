// whenever we want to execute node script -> terminal -> node index.js
// terminal -> node
// so it is basically like a help command we gonna get in node
// we can get properties of everything that we can use for e.g -> node -> Number. -> it gives all the properties
// similarly for global. (TAB)
// or if u dont wanna do this method type pgm

const repl = require("repl");

const local = repl.start();

//if we exit node command line we can print some message
local.on("exit", () => {
  console.log("exiting repl");
  process.exit();
});
