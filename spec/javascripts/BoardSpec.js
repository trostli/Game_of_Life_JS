describe("Board", function() {
  var board;

  beforeEach(function() {

  });

  it("to have a grid represented by a square nested array of n x n", function() {
    board = new Board
    expect(board.initializeGrid(5)[4].length).toEqual(5);
  });
});
