var Cell = function(status) {
  this.status = status;
};

var Board = function() {

}

Board.prototype.initializeGrid = function (rows) {
  var grid = [];
  for (var y = 0; y < rows; y++) {
    var row = [];
    for (var x = 0; x < rows; x++) {
      row.push(x);
    }
    grid.push(row);
  };
  return grid;
};