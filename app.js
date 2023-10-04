const http = require("http");
const fs = require("fs");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  let urlName = req.url;
  if (urlName == "/") {
    readFile("./index.html").then((data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (urlName == "/Flicky.md") {
    readFile("./Flicky.md").then((data) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(data);
    });
  } else {
    console.log(req.url);
    res.end();
  }
});

const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, function (error, data) {
      if (error) {
        reject(error);
      }
      resolve(data);
    });
  });
};

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
