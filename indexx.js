// lets explore path module

const path = require("path");

const filePath = "C:\Users\Ananyaharish\Desktop\Nodejs\pfiles\sample.txt";

// dirname
console.log("Directory Name:", path.dirname(filePath));
// console.log(__dirname)

// basename
console.log("Base Name:", path.basename(filePath));
// console.log(__filename)

// extension
console.log("Extension:", path.extname(filePath));



// to join 

// const sampleFile = "sample.txt";
// console.log(path.join(path.dirname(filePath)),sampleFile );


// now lets start with the file system module
// in fs.js