// 2nd way reading from a file -> synchronous way of readline

const path = require("path");
const filePath = "C:\\Users\\Ananya harish\\Desktop\\Nodejs\\pfiles\\sample.txt";

const fs = require("fs");
fs.readFile(filePath, (err, data) => {
  if (err) throw new Error("something wrong!");
  console.log(data.toString());
});


try {
  const data = fs.readFileSync(
    path.join(__dirname, "files", "sample.txt"),
    "utf-8"
  );
  console.log(data);
} catch (err) {}


// 3rd way is filesystem promises

