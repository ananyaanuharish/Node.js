// Environment Variable
// to pass env variables -> terminal -> NAME=ANANYA PROFESSION=DEVELOPER node env.js
// it does not work so we gonna make use of process
// require("dotenv").config();
console.log(process.env.NAME);
console.log(process.env.PROFESSION);
console.log("I am starting a new series on", process.env.COURSE);

// create .env file
