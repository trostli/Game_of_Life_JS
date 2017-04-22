var GameController = function() {
  this.board = new Board(20)
  var allCells = this.board.allCells()
  this.gameView = new GameView('board', allCells)
}

GameController.prototype.runGame = function() {
  var self = this
  setInterval(function(){
    self.board.performGeneration();
    self.gameView.clearBoard();
    self.gameView.drawBoard();
  }, 400);
}

var game = new GameController()
game.runGame()