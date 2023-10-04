const http = require("http");
const fs = require("fs");

const hostname = "localhost";
const port = 3000;
const availableGames = [
  "/Flicky.md",
  "/PokemonRed.gb",
  "/BigBangMini.nds",
  "/FossilFighters.nds",
  "/Tetris.gb",
  "/MarioLuigi-BowsersInsideStory.nds",
  "/PokemonMysteryDungeon.nds",
];
const server = http.createServer((req, res) => {
  let urlName = req.url;
  if (urlName == "/") {
    let htmlData = loadGame(availableGames[6]);
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
      core = `"segaMD"`;
      gameName = `"Flicky"`;
      gameUrl = `"Flicky.md"`;
      console.log("flicky");
      break;
    case availableGames[1]:
      core = `"gb"`;
      gameName = `"PokemonRed"`;
      gameUrl = `"PokemonRed.gb"`;
      break;
    case availableGames[2]:
      core = `"nds"`;
      gameName = `"BigBangMini"`;
      gameUrl = `"BigBangMini.nds"`;
      break;
    case availableGames[3]:
      core = `"nds"`;
      gameName = `"FossilFighters"`;
      gameUrl = `"FossilFighters.nds"`;
      break;
    case availableGames[4]:
      core = `"gb"`;
      gameName = `"Tetris"`;
      gameUrl = `"Tetris.gb"`;
      break;
    case availableGames[5]:
      core = `"nds"`;
      gameName = `"MarioLuigi-BowsersInsideStory"`;
      gameUrl = `"MarioLuigi-BowsersInsideStory.nds"`;
      break;
    case availableGames[6]:
      core = `"nds"`;
      gameName = `"PokemonMysteryDungeon"`;
      gameUrl = `"PokemonMysteryDungeon.nds"`;
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
