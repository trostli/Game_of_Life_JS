var canvas = document.getElementById('board');
canvas.height = document.body.clientHeight - 100;
canvas.width = canvas.height;
var ctx = canvas.getContext("2d");
var my_gradient = ctx.createLinearGradient(0,0,0,canvas.height);
my_gradient.addColorStop(0,"black");
my_gradient.addColorStop(1,"grey");
ctx.fillStyle = my_gradient;


var drawCell = function(x,y,width,height, border) {
  ctx.fillRect(x,y,width-border,height-border);
};

var cellDimension = function(){
  var cellWidth = (canvas.width/15);
  return cellWidth
};


var drawBoard = function(){
  var allCells = board.allCells();
  _.each(allCells, function(cell){
    if (cell.life === true) {
      var cellDim = cellDimension();
      drawCell((cell.x)*cellDim,(cell.y)*cellDim,cellDim,cellDim, 5);
    }
  });
};

var clearBoard = function(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

drawBoard();

setInterval(function(){
  board.rule1();
  board.rule3();
  board.rule4();
  board.grid = board.gridCopy;
  clearBoard();
  drawBoard();
  board.checkBoard();
}, 600);