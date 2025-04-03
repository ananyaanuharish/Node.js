const _ = require("lodash");
const arr = [1, 4, 6, 7, 8];
console.log(_.last(arr));

const cowsay = require("cowsay");
console.log(
  cowsay.say({
    text: "I am learning node.js",
    e: "^^",
    t: "U",
  })
);
