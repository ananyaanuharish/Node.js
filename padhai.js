// Introduction to Node.js

// Node.js is an open-source and cross-platform JavaScript runtime environment.
// Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser.
// A Node.js app runs in a single process, without creating a new thread for every request.
// Node.js uses event driven, non blocking I/O model to handle concurrent request with Single thread


// Why Node.js is popular ?

// It uses JavaScript as its main language to build web application, with just JacaScript we can build frontend and backend application i,e JavaScript Everywhere (Client + Server)
// Fast Performance coz it uses V8 Javascript engine
// Lightweight - Build in event driven architecture
// Handles multiple requests with single Asynchrnous thread , this reduces the work load of CPU as well as the memory
// Faster Time to market
// nodejs has more than 700 thousands models in their npm registery
// and using ready made modules instead of coding which reduces the development time
// Modern Architecture & Scalability
// creates apps without decreasing speed and enables performance
// nodejs is enabled to build flexible apps that can run smoothly on Cross platform - Creating APIs
// Can be hosted anywhere

// npm(node package manager) and its simple structure has helped to build the eco systme of nodejs (manage dependencies)
// npm has more than 1 million open source packages and libraries which we can use freely


// Build apps with Node.js

// Streaming web applications like Netflix, Amazon
// Real-time web applications like chat, IM(instance messaging)
// Microservices and IOT applications
// Build any MERN stack application like Ecommerce, Payments
// Social Media and Networking applications like Linkedin, Medium
// Create Restful APIs

// Node.js vs Browser

// Both the browser and Node.js use JavaScript as their programming language.
// Building apps that run in the browser is a completely different thing than building a Node.js application.
// With Browser we have access to DOM, Web API where as with Node.js we have modules provide to access to file system, OS.
// Node.js supports both the CommonJS require() and ES module systems import() while in the browser we are starting to see the ES Modules standard being implemented.

// node -v
// npm -v
// npm init
// to run -> node file-name

// whenever we make a change it should automatically detect and excute it, so for tht we have a package called nodemon
// to instal nodemon -> terminal -> npm i -g nodemon -> globall for all projects
// dev dependencies -> terminal -> npm i --save-dev nodemon

// with nodemon whenever we save the file it automatically detect and execute
// so nodemon is a useful package in nodejs

// if we want to exit from nodemon press ctrl + c to get terminal back

// REPL -> node command Line
// Read, Evaluate, Print, Loop 

//file order

// index.js
// env.js
//.env
// repl.js
// argument.js
// output.js
// stack.js
// progress.js
// input.js
// promptsync.js

// Introduction to NPM
// -> NPm is the standard package manager for Node.js
// -> as of Sep, 2022 it has around 2.1 Million packages listed in NPM registry
// -> NPM is a way of download and manage dependencies for both frontend and backend applications using JavaScript.
// -> Yarn and pnpm are the alternatives to NPM cli.

// NPM command we are going to use frequently 
// npm init -> whenever we want to bootsrap the package JSON file
// npm install -> to install all the dependencies
// npm install <package_name> [-g, —save-dev, --no-save, --save-optional, —no-optional] 
// npm install <package_name>@<version>
// npm update -> it updates all the dependencies that are listed in the package.json file
// npm update <package_name>
// npm run <task-name>
// npm list -> going to list down all the dependencies that we have installed
// npm list -g
// npm view <package_name> version
// npm uninstall <package_name>
// npm help

// npm install cowsay
// npx cowsay I am Ananya


// package.json -> Its basically a manefesting file contains all the information related to project like what is the name of the project, version of project, all the dependencies, optional dependencies etc
// package-lock.json ->  similar to package.json but it contain dependencies version 


// Semantic Versioning 
// "express" : ^4.18.1
// X : The first digit is major version
// Y : The second digit is minor version
// Z : The third digit is patch version



// file order

// npm modles.js
// Car.js
// jar.js


// chapter-3
// Node.js Error Handling

// we throw an exception using keyword throw 
// Exception handling ensures that a program runs smoothly, even when errors occur.
// If one part of a program fails, exception handling prevents the whole system from breaking down.
// Example: In an e-commerce app, if the payment processing fails, exception handling ensures the cart data is not lost.


// folder -> oerrorhandling
// file order
// error.js
// custom.js


// chapter-4 -> Node.js File System & Path Modules
// folder -> pfiles
// file order
// sample.txt
// text.txt
// indexx.js
// filesys.js
// synchro.js
// fpromise.js


// chapter 5 -> async vs sync programmimg

// file order
// synchronous.js
// Asynchronous.js

// chapter 6 --> Callbacks & Callback Hell

// file order
// callback.js

// when we want to execute a logical sequence one after the another we result into the nesting of callback()
// when we have multiple nested callback we call it as callback hell

// chapter 7 -> Promises

// file order
// promisee.js

// promise() is asynchronous by default whereas, callback() is synchronous we have to add setTimeout() in order to make it as a asynchronous execution
// we can attach .then() to promises but we cannnot attach anything to callback fnc once it is called

// chaining(sequence) in promises

// chapter 8 -> async and await

// file oder
// asyncawait.js
// need to be careful and avoid async await as they could decrease the performance of program , whereas javascript is known for its fast execution and performance


// chapter 9 -> Node.js-Build REST API CRUD Project
// CRUD Actions -> Get all movies, Get movie, Create movie, Update movie,Delete movie
// HTTP Method-> GET,POST,PUT,DELETE
// Endpoints -> 
// -/api/movies
// -/api/movies/:id
// -/api/movies
// -lapi/movies/:id
// -/api/movies/:id



