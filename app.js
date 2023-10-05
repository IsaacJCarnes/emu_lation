const availableGames = [
  "Flicky",
  "PokemonRed",
  "BigBangMini",
  "FossilFighters",
  "Tetris",
  "MarioLuigi-BowsersInsideStory",
  "PokemonMysteryDungeon",
  "DonkeyKongCountry",
  "StrawberryShortcake-TheFourSeasonsCake",
  "CookingMama"
];
const randomGame = () => {
  loadPage(availableGames[Math.floor(Math.random() * availableGames.length)]);
};

const loadPage = (currentGame) => {
  switch (currentGame) {
    case availableGames[0]:
      core = "segaMD";
      gameName = "Flicky";
      gameUrl = "Flicky.md";
      break;
    case availableGames[1]:
      core = "gb";
      gameName = "Pokemon Red";
      gameUrl = "PokemonRed.gb";
      break;
    case availableGames[2]:
      core = "nds";
      gameName = "Big Bang Mini";
      gameUrl = "BigBangMini.nds";
      break;
    case availableGames[3]:
      core = "nds";
      gameName = "Fossil Fighters";
      gameUrl = "FossilFighters.nds";
      break;
    case availableGames[4]:
      core = "gb";
      gameName = "Tetris";
      gameUrl = "Tetris.gb";
      break;
    case availableGames[5]:
      core = "nds";
      gameName = "Mario and Luigi - Bowser's Inside Story";
      gameUrl = `MarioLuigi-BowsersInsideStory.nds`;
      break;
    case availableGames[6]:
      core = "nds";
      gameName = "Pokemon Mystery Dungeon";
      gameUrl = "PokemonMysteryDungeon.nds";
      break;
    case availableGames[7]:
      core = "snes";
      gameName = "Donkey Kong Country";
      gameUrl = "DonkeyKongCountry.smc";
      break;
    case availableGames[8]:
      core = "nds";
      gameName = "Strawberry Shortcake - The Four Seasons Cake";
      gameUrl = "StrawberryShortcake-TheFourSeasonsCake.nds";
      break;
    case availableGames[9]:
      core = "nds";
      gameName = "Cooking Mama";
      gameUrl = "CookingMama.nds";
      break;
  }
  window.location.assign(
    `./gamePage.html?core=${core}&gameName=${gameName}&gameUrl=${gameUrl}`
  );
};

const loadGame = () => {
  var gameTitle = document.getElementById("gameTitle");
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  var core = urlParams.get("core");
  var gameName = urlParams.get("gameName");
  var gameUrl = urlParams.get("gameUrl");
  gameTitle.innerText = gameName;

  console.log(
    "hello " +
      urlParams.get("core") +
      " " +
      urlParams.get("gameName") +
      " " +
      urlParams.get("gameUrl")
  );

  const parent = document.createElement("div");
  const div = document.createElement("div");
  const sub = document.createElement("div");
  const script = document.createElement("script");

  sub.id = "game";
  div.id = "display";
  div.style = "width:80vmin;height:60vmin;display:flex;";
  div.appendChild(sub);
  parent.style = "width:100%;height:85%;display:flex;justify-content: center;";
  parent.appendChild(div);
  document.body.appendChild(parent);

  window.EJS_player = "#game";
  window.EJS_color = "#ff0000";
  window.EJS_startOnLoaded = false;
  window.EJS_pathtodata = "data/";
  window.EJS_core = core;
  window.EJS_gameName = gameName;
  window.EJS_gameUrl = `ROMs/${gameUrl}`;

  script.src = "data/loader.js";
  document.body.appendChild(script);
};
/*const http = require("http");
const fs = require("fs");

const hostname = "localhost";
const port = 3000;

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
    case availableGames[3]:
      core = '"nds"';
      gameName = '"Fossil Fighters"';
      gameUrl = '"FossilFighters.nds"';
      break;
    case availableGames[4]:
      core = '"gb"';
      gameName = '"Tetris"';
      gameUrl = '"Tetris.gb"';
      break;
    case availableGames[5]:
        core = '"nds"';
        gameName = `"Mario & Luigi - Bowser's Inside Story"`;
        gameUrl = `"Mario&Luigi-Bowser'sInsideStory.nds"`;
        break;
    case availableGames[6]:
      core = '"nds"';
      gameName = '"Pokemon Mystery Dungeon"';
      gameUrl = '"PokemonMysteryDungeon.nds"';
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
});*/
