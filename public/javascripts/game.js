var addElement = function(){
  var gameSpace = document.getElementById('board');
  var cellSpace = document.createElement('div');
  cellSpace.className = 'cell';
  gameSpace.appendChild(cellSpace);
};

var Cell = function(x,y) {
  this.x = x;
  this.y = y;
};

var Board = function() {
  this.grid = [];
};

Board.prototype.initializeGrid = function (rows) {
  for (var y = 0; y < rows; y++) {
    var row = [];
    for (var x = 0; x < rows; x++) {
      row.push(randomLife(x,y));
    }
    this.grid.push(row);
  }
};






//Helper methods
var randomLife = function (x,y) {
  var rand = Math.floor(Math.random()*2);
  if (rand == 1) {
    cell = new Cell(x,y);
    return cell;
  }
  else {
    return null;
  }
};