var HanoiView = require("./view.js");
var HanoiGame = require("../../hanoi-core-solution/src/game.js");

$(function () {
  console.log("boo");
  var rootEl = $('.hanoi');
  var game = new HanoiGame();
  var view = new HanoiView(game, rootEl);

});
