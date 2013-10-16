describe("Cell", function() {
  var cell;

  beforeEach(function() {

  });

  it("should be able to tell you it's position", function() {
    cell = new Cell(3,2);
    expect(cell.x).toEqual(3);
    expect(cell.y).toEqual(2);
  });

  it("should be able to tell you it's neighbors coordinates", function() {
    cell = new Cell(3,2);
    expect(cell.neighbors()).toEqual([[2,1],[3,1],[4,1],[2,2],[4,2],[2,3],[3,3],[4,3]]);
  });
});
