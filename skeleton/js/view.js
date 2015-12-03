function View(game, rootEl){
  this.setupTowers(rootEl);
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
        $li.addClass("disk-" + (j+1));
      }
      $ul.append($li);
      j++;
    }
    $display.append($ul);
    i++;
  }
  rootEl.append($display);
};

module.exports = View;
