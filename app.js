const http = require("http");
const fs = require("fs");

const hostname = "localhost";
const port = 3000;
const availableGames = ["/Flicky.md", "/PokemonRed.gb", "/BigBangMini.nds"];
const server = http.createServer((req, res) => {
  let urlName = req.url;
  if (urlName == "/") {
    let htmlData = loadGame(availableGames[0]);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(htmlData);
  } else if (availableGames.includes(urlName)) {
    readFile("./ROMs" + urlName).then((data) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(data);
    });
  } else {
    console.log(req.url);
    res.end();
  }
});

const loadGame = (urlName) => {
  let core = "";
  let gameName = "";
  let gameUrl = "";
  switch (urlName) {
    case availableGames[0]:
      core = '"segaMD"';
      gameName = '"Flicky"';
      gameUrl = '"Flicky.md"';
      break;
    case availableGames[1]:
      core = '"gb"';
      gameName = '"Pokemon - Red"';
      gameUrl = '"PokemonRed.gb"';
      break;
    case availableGames[2]:
      core = '"nds"';
      gameName = '"Big Bang Mini"';
      gameUrl = '"BigBangMini.nds"';
      break;
  }
  let htmlData = baseHtml.replace('"core"', core);
  htmlData = htmlData.replace('"gameName"', gameName);
  htmlData = htmlData.replace('"gameUrl"', gameUrl);
  return htmlData;
};

const readFile = (path, encoding = null) => {
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
