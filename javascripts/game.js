var addElement = function(){
  var gameSpace = document.getElementById('board');
  var cellSpace = document.createElement('div');
  cellSpace.className = 'cell';
  gameSpace.appendChild(cellSpace);
};

var Cell = function(x,y, life) {
  this.x = x;
  this.y = y;
  this.neighborCount = 0;
  this.life = life;
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
  this.gridCopy = [];
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

Board.prototype.allCells = function () {
  var size = this.grid.length;
  var allCells = [];
  for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
        allCells.push(this.grid[y][x]);
    }
  }
  return allCells;
};

Board.prototype.allCellCoord = function () {
  var allCells = this.allCells();
  var allCellCoord = [];
  _.each(allCells, function(cell){
    if (cell.life === true){
      allCellCoord.push([cell.x, cell.y]);
    }
  });
  return allCellCoord;
};

Board.prototype.checkBoard = function () {
  var allCells = this.allCells();
  var allCellCoord = this.allCellCoord();
  for (var i=0; i < allCells.length; i++){
    var cell = allCells[i];
    cell.neighborCount = 0; //Reset neighbor count
    var cellCoord = allCellCoord[i];
    var cellNeighborsCoord = cell.neighbors();

    _.each(cellNeighborsCoord, function(neighborCoord){
      _.each(allCellCoord, function(otherCellCoord){
        if (_.isEqual(neighborCoord, otherCellCoord)){
          cell.neighborCount += 1;
        }
      })
    })
  };
};

Board.prototype.rule1 = function() {
  var allCells = this.allCells();
  this.gridCopy = this.grid;
  _.each(allCells, function(cell){
    if (cell.neighborCount < 2) {
      board.gridCopy[cell.y][cell.x].life = false;
    }
  });
};

Board.prototype.rule3 = function () {
  var allCells = this.allCells();
  this.gridCopy = this.grid;
  _.each(allCells, function(cell){
    if (cell.neighborCount > 3) {
      board.gridCopy[cell.y][cell.x].life = false;
    }
  });
}

Board.prototype.rule4 = function () {
  var allCells = this.allCells();
  this.gridCopy = this.grid;
  _.each(allCells, function(cell){
    if (cell.neighborCount === 3) {
      board.gridCopy[cell.y][cell.x].life = true;
    }
  });
}

//Helper methods
var randomLife = function (x,y) {
  var rand = Math.floor(Math.random()*2);
  if (rand === 1) {
    cell = new Cell(x,y,true);
    return cell;
  }
  else {
    cell = new Cell(x,y,false);
    return cell;
  }
};


board = new Board
board.initializeGrid(20);
board.checkBoard();

