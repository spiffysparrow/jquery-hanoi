/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var HanoiView = __webpack_require__(2);
	var HanoiGame = __webpack_require__(1);
	
	$(function () {
	  console.log("boo");
	  var rootEl = $('.hanoi');
	  var game = new HanoiGame();
	  var view = new HanoiView(game, rootEl);
	
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	function Game () {
	  this.towers = [[3, 2, 1], [], []];
	};
	
	Game.prototype.isValidMove = function (startTowerIdx, endTowerIdx) {
	  var startTower = this.towers[startTowerIdx];
	  var endTower = this.towers[endTowerIdx];
	
	  if (startTower.length === 0) {
	    return false;
	  } else if (endTower.length == 0) {
	    return true;
	  } else {
	    var topStartDisc = startTower[startTower.length - 1];
	    var topEndDisc = endTower[endTower.length - 1];
	    return topStartDisc < topEndDisc;
	  }
	};
	
	Game.prototype.isWon = function () {
	  // move all the discs to the last or second tower
	  return (this.towers[2].length == 3) || (this.towers[1].length == 3);
	};
	
	Game.prototype.move = function (startTowerIdx, endTowerIdx) {
	  if (this.isValidMove(startTowerIdx, endTowerIdx)) {
	    this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());
	    return true;
	  } else {
	    return false;
	  }
	};
	
	Game.prototype.print = function () {
	  console.log(JSON.stringify(this.towers));
	};
	
	Game.prototype.promptMove = function (reader, callback) {
	  this.print();
	  reader.question("Enter a starting tower: ", function (start) {
	    var startTowerIdx = parseInt(start);
	    reader.question("Enter an ending tower: ", function (end) {
	      var endTowerIdx = parseInt(end);
	      callback(startTowerIdx, endTowerIdx)
	    });
	  });
	};
	
	Game.prototype.run = function (reader, gameCompletionCallback) {
	  this.promptMove(reader, (function (startTowerIdx, endTowerIdx) {
	    if (!this.move(startTowerIdx, endTowerIdx)) {
	      console.log("Invalid move!");
	    }
	
	    if (!this.isWon()) {
	      // Continue to play!
	      this.run(reader, gameCompletionCallback);
	    } else {
	      this.print();
	      console.log("You win!");
	      gameCompletionCallback();
	    }
	  }).bind(this));
	};
	
	module.exports = Game;


/***/ },
/* 2 */
/***/ function(module, exports) {

	function View(game, rootEl){
	  this.game = game;
	  this.rootEl = rootEl;
	  this.setupTowers(rootEl);
	  this.render();
	}
	
	View.prototype.setupTowers = function(rootEl){
	  var $display = $("<div></div>").addClass("display");
	
	  var i = 0;
	  while(i<3){
	    var $ul = $("<ul></ul>").addClass("tower");
	    var j = 0;
	    while(j<3){
	      var $li = $("<li></li>").addClass("block");
	      if (i===0) {
	        // $li.addClass("disk-" + (j+1));
	      }
	      $ul.append($li);
	      j++;
	    }
	    $display.append($ul);
	    i++;
	  }
	  rootEl.append($display);
	};
	
	View.prototype.render = function () {
	  var towers = this.game.towers;
	  console.log(towers);
	  var j = 0;
	  while (j < towers.length) {
	    for (var i = 1; i < towers[j].length + 1; i++) {
	      var diskLocation = towers[j].indexOf(i);
	      var $disk = $(".disk-" + i);
	
	      if (diskLocation !== -1) {
	        $disk.removeClass("disk-" + i);
	        var $tower = $(".tower:nth-child(" + (j + 1) + ")");
	        $disk = $tower.find(".block:nth-child(" + diskLocation + 1 + ")");
	        // console.log($block.css("border","solid 1px red"));
	        // console.log($tower.children());
	        console.log("disk-" + i);
	        console.log($disk);
	        $disk.addClass("disk-" + i);
	      }
	
	
	    }
	    j++;
	  }
	
	};
	
	module.exports = View;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map