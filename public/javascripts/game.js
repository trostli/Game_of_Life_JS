var addElement = function(){
  var gameSpace = document.getElementById('board');
  var cellSpace = document.createElement('div');
  cellSpace.className = 'cell';
  gameSpace.appendChild(cellSpace);
};

var Cell = function(x,y) {
  this.x = x;
  this.y = y;
  this.neighborCount = 0;
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

Board.prototype.allCellCoord = function () {
  var allCells = this.scan();
  var allCellCoord = []
  _.each(allCells, function(cell){
    allCellCoord.push([cell.x, cell.y])
  });
  return allCellCoord;
};

Board.prototype.checkBoard = function () {
  var allCells = this.scan();
  var allCellCoord = this.allCellCoord();
  //while allCells.length != 0
  while (allCells.length > 0){
    var cell.neighborCount = 0; //Reset neighbor count
    var cell = allCells.pop();
    var cellCoord = allCellCoord.pop();
    console.log("Cell coordinates: ");
    console.log(cellCoord);
    console.log("Neighbor coordinates: ");
    var cellNeighborsCoord = cell.neighbors();
    _.each(cellNeighborsCoord, function(neighborCoord){
      console.log(neighborCoord);
    });
    console.log("All cells coordinates: ")
    _.each(allCellCoord, function(cellCoord){
      console.log(cellCoord);
    });
    console.log("Intersection: ")
    _.each(cellNeighborsCoord, function(neighborCoord){
      _.each(allCellCoord, function(otherCellCoord){
        if (_.isEqual(neighborCoord, otherCellCoord)){
          console.log("I found one")
          cell.neighborCount += 1;
        }
      })
    })
    console.log("Neighbor count: ")
    console.log(cell.neighborCount)
    console.log("--------------------")
  };
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
