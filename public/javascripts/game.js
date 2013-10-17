var addElement = function(){
  var gameSpace = document.getElementById('board');
  var cellSpace = document.createElement('div');
  cellSpace.className = 'cell';
  gameSpace.appendChild(cellSpace);
};

var Cell = function(x,y) {
  this.x = x;
  this.y = y;
  this.neighborCount;
};

Cell.prototype.neighbors = function () {
  return [
  [this.x-1,this.y-1],[this.x,this.y-1],[this.x+1,this.y-1],
  [this.x-1,this.y]                    ,[this.x+1,this.y],
  [this.x-1,this.y+1],[this.x,this.y+1],[this.x+1,this.y+1]
  ];
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

Board.prototype.scan = function () {
  var size = this.grid.length;
  var allCells = [];
  for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
      if (this.grid[y][x] !== null) {
        allCells.push(this.grid[y][x]);
      }
    }
  }
  return allCells;
};

Board.prototype.checkBoard = function () {
  var allCells = this.scan();
  _.each(allCells, function (cell) {
    if (allCells.pop().x);  
  });
};

//Helper methods
var randomLife = function (x,y) {
  var rand = Math.floor(Math.random()*2);
  if (rand === 1) {
    cell = new Cell(x,y);
    return cell;
  }
  else {
    return null;
  }
};
