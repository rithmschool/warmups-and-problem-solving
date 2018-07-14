describe("UnitTests", function() {
  it("standard_tests", function() {
    // Failure message:
    // This test has no failure messages
    var input1 = [2, 0, 0, 0, 1, 4];
    var input2 = [2, 0, 0, 0, 1, 0, 0, 4];
    expect(minimizeZeroes(input1)).toEqual([2, 0, 1, 4]);
    expect(minimizeZeroes(input2)).toEqual([2, 0, 1, 0, 4]);
  });
});
