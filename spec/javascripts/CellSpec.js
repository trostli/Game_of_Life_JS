describe("Cell", function() {
  var cell;

  beforeEach(function() {

  });

  it("should be able to tell you if it's alive or dead", function() {
    cell = new Cell(true)
    expect(cell.status).toEqual(true);
  });
});
