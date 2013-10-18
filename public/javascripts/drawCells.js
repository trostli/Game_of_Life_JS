var canvas = document.getElementById('board');
var ctx = canvas.getContext("2d");

var drawCell = function(x,y,width,height, border) {
  ctx.fillRect(x,y,width-border,height-border);
};

var cellDimension = function(){
  var cellWidth = (canvas.width/5);
  return cellWidth
};

var allCells = board.allCells();

_.each(allCells, function(cell){
  var cellDim = cellDimension();
  drawCell((cell.x)*cellDim,(cell.y)*cellDim,cellDim,cellDim, 5);
});