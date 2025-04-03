// 3rd way is filesystem promises

const path = require("path");
const filePath =
  "C:\\Users\\Ananya harish\\Desktop\\Nodejs\\pfiles\\text.txt";

const fs = require("fs");
const fsPromise = require("fs").promises;

// add try block

const filereading = async () => {
  try {
    const data = await fsPromise.readFile(filePath, { encoding: "utf-8" });
    console.log("FS PROMISES:", data);
  } catch (err) {
    console.log(err);
  }
};
filereading();

// writing into file
const txtFile = path.join("C:\\Users\\Ananya harish\\Desktop\\Nodejs\\pfiles\\text.txt");
const content = "I Love this node.js";

fs.writeFile(txtFile, content, (err) => {
  if (err) throw new Error("something wrong!");
  console.log("Write operation sucessful");
});

// chapter 5 -> async vs sync programmimg
