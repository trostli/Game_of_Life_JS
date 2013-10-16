describe("Board", function() {
  var board;

  beforeEach(function() {
    board = new Board
  });

  it("to have a grid represented by a square nested array of n x n", function() {
    board.initializeGrid(5);
    expect(board.grid[4].length).toEqual(5);
  });

  it("it should have a method to populate the grid with null objects", function() {
    cell = new Cell(true);
    board.initializeGrid(5);
    expect(board.grid[4]).toContain(null);
  });

  it("should have a method to iterate over the board  ")
});
