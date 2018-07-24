const View = require("./ttt-view.js");
const Game = require("./game.js");

$( () => {
  let figure = $("figure.ttt");
  let game = new Game();
  let view = new View(game, figure);
});
