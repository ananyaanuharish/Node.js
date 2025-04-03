// file systme module

const path = require("path");
const filePath = "C:\\Users\\Ananya harish\\Desktop\\Nodejs\\pfiles\\sample.txt";
// const fs = require("fs");
// console.log(fs);

// 1st way reading from a file - asynchronous way of readline
const fs = require("fs");
fs.readFile(filePath, (err, data) => {
  if (err) throw new Error("something wrong!");
  console.log(data.toString());
});
// we can also use character encoding "utf-8" instead of .tostring() -> fs.readFile(filePath, "utf-8",(err, data) => {





