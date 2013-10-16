describe("Cell", function() {
  var cell;

  beforeEach(function() {

  });

  it("should be able to tell you it's position", function() {
    cell = new Cell(3,2);
    expect(cell.x).toEqual(3);
    expect(cell.y).toEqual(2);
  });
});
