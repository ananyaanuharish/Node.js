const progressBar = require("progress");

const bar = new progressBar("downloading [:bar] :rate/bps :percent :eats", {
  total: 20,
});

const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);

const chalk = require("chalk");
console.log(chalk.blue("This is nodejs"));

// if we want to add some color we need to install chalk -> npm i chalk
