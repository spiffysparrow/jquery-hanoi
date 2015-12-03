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
