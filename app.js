const http = require("http");
const fs = require("fs");

const hostname = "localhost";
const port = 3000;
const server = http.createServer((req, res) => {
  let urlName = req.url;
  if (urlName == "/") {
    
    let core = '"segaMD"';
    let gameName = '"Flicky"';
    let gameUrl = '"Flicky.md"';
    /*let core = '"gb"';
    let gameName = '"Pokemon - Red"'
    let gameUrl = '"Pokemon Red.gb"'*/
    let htmlData = baseHtml.replace('"core"', core);
    htmlData = htmlData.replace('"gameName"', gameName);
    htmlData = htmlData.replace('"gameUrl"', gameUrl);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(htmlData);
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

const readFile = (path, encoding=null) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, function (error, data) {
      if (error) {
        reject(error);
      }
      resolve(data);
    });
  });
};

var baseHtml = "";
readFile("./index.html", "utf-8").then((data) => {
  baseHtml = data;
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
