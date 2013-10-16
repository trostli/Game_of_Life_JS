describe("Board", function() {
  var board;

  beforeEach(function() {
    board = new Board
    board.initializeGrid(5);
  });

  it("to have a grid represented by a square nested array of n x n", function() {
    expect(board.grid[4].length).toEqual(5);
  });

  it("it should have a method to populate the grid with null or cell objects", function() {
    expect(board.grid[4]).toContain(null);
  });

  it("should have a method to iterate over the board and returns all the cells", function() {
    expect(board.scan()).toBeDefined();
  })
});
