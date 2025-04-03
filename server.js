// // create HTTP server
// const http = require("http");
// // require("dotenv").config();

// // for my server to listen we have PORT
// const PORT = process.env.PORT || 8080;

// // create http server
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "application/json");
//   res.write(JSON.stringify({ message: "Hello Dipesh, wlecome to Node.js" }));
//   res.end();
// });

// server.listen(PORT, () => {
//   console.log(`Server started on Port : ${PORT}`);
// });
// see browser -> type localhost:8080 in browser
// we can also see (get) method in console-> network
// like this we cant be able to see put and other method
// so we make use of thunder client in our vs

// another method for get http server using switch method

// const http = require("http");
// const { title } = require("process");

// const PORT = process.env.PORT || 8080;

// const server = http.createServer((req, res) => {
//   switch (req.method) {
//     case "GET":
//       getReq(req, res);
//       break;
//     case "POST":
//       postReq(req, res);
//       break;
//     case "PUT":
//       putReq(req, res);
//       break;
//     case "DELETE":
//       deleteReq(req, res);
//       break;
//     default:
//       res.statusCode = 404;
//       res.setHeader("Content-Type", "application/json");
//       res.write(
//         JSON.stringify({
//           title: "Not Found",
//           message: "Route not found",
//         })
//       );
//       res.end();
//   }
// });

// server.listen(PORT, () => {
//   console.log(`Server started on Port : ${PORT}`);
// });

// for all four http request

const http = require("http");
const getReq = require("./methods/get-request");
const postReq = require("./methods/post-request");
const putReq = require("./methods/put-request");
const deleteReq = require("./methods/delete-request");
let movies = require("./data/movies.json");

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  // make use of dummy file
  req.movies = movies;
  switch (req.method) {
    case "GET":
      getReq(req, res);
      break;
    case "POST":
      postReq(req, res);
      break;
    case "PUT":
      putReq(req, res);
      break;
    case "DELETE":
      deleteReq(req, res);
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.write(
        JSON.stringify({
          title: "Not Found",
          message: "Route not found",
        })
      );
      res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server started on Port : ${PORT}`);
});
