// Game Model Objects & Logic

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

var Board = function(size) {
  this.grid = [];
  this.gridCopy = [];
  this.initializeGrid(size)
  this.checkBoard()
};

Board.prototype.initializeGrid = function (size) {
  for (var y = 0; y < size; y++) {
    var row = [];
    for (var x = 0; x < size; x++) {
      row.push(this.randomLife(x,y));
    }
    this.grid.push(row);
  }
};

// Collect all cells into an array
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

// Collect all cell coordinates into an array
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

// Iterate through all cells to update neighbor count
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

// Apply Game of Life rules
Board.prototype.performGeneration = function(){
  this.rule1();
  this.rule2();
  this.rule3();
  this.rule4();
  this.grid = this.gridCopy;
  this.checkBoard();
}

// Rule 1:
// Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Board.prototype.rule1 = function() {
  var allCells = this.allCells();
  this.gridCopy = this.grid;
  var self = this
  _.each(allCells, function(cell){
    if (cell.neighborCount < 2) {
      self.gridCopy[cell.y][cell.x].life = false;
    }
  });
};

// Rule 2:
// Any live cell with two or three live neighbors lives on to the next generation.
Board.prototype.rule2 = function() {
  // Do nothing
}

// Rule 3:
// Any live cell with more than three live neighbors dies, as if by overcrowding.
Board.prototype.rule3 = function () {
  var allCells = this.allCells();
  this.gridCopy = this.grid;
  var self = this
  _.each(allCells, function(cell){
    if (cell.neighborCount > 3) {
      self.gridCopy[cell.y][cell.x].life = false;
    }
  });
}

// Rule 4:
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction
Board.prototype.rule4 = function () {
  var allCells = this.allCells();
  this.gridCopy = this.grid;
  var self = this
  _.each(allCells, function(cell){
    if (cell.neighborCount === 3) {
      self.gridCopy[cell.y][cell.x].life = true;
    }
  });
}

//Helper methods

// Randomly spring new life into action!
Board.prototype.randomLife = function (x,y) {
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