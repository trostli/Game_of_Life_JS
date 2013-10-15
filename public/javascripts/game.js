var Cell = function(status) {
  this.status = status;
};

var Board = function() {
  this.grid = []
}

Board.prototype.initializeGrid = function (rows) {
  for (var y = 0; y < rows; y++) {
    var row = [];
    for (var x = 0; x < rows; x++) {
      var cell = new Cell(true);
      row.push(cell);
    }
    this.grid.push(row);
  };
};


