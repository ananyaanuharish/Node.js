// const okk = require("./car");
// console.log(okk);

// another method 

// const { dataa } = require("./car");
// console.log(dataa);


// two or more
// const { tesla, ford } = require("./car");
// console.log(tesla);
// console.log(ford);


// how to console.log the objects and also beautify them
const { tesla, ford } = require("./car");
console.log(JSON.stringify(tesla, null, 2));
console.log(JSON.stringify(ford, null, 2));




// chapter-3
// Node.js Error Handling