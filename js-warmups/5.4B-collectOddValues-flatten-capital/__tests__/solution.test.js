describe("UnitTests", function() {
  it("collectOddValues", function() {
    // Failure message:
    // This test has no failure messages
    expect(collectOddValues([1, 2, 3, 4, 5, 6, 7])).toEqual([1, 3, 5, 7]);
    expect(collectOddValues([-2, -1, -11, 3, 9, 16, 17])).toEqual([
      -1,
      -11,
      3,
      9,
      17
    ]);
  });
  it("flatten", function() {
    // Failure message:
    // This test has no failure messages
    expect(flatten([1, 2, 3, [4, 5]])).toEqual([1, 2, 3, 4, 5]);
    expect(flatten([1, [2, [3, 4], [[5]]]])).toEqual([1, 2, 3, 4, 5]);
    expect(flatten([[1], [2], [3]])).toEqual([1, 2, 3]);
    expect(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])).toEqual([1, 2, 3]);
  });
  it("capitalizeWords", function() {
    // Failure message:
    // This test has no failure messages
    expect(capitalizeWords(["i", "am", "learning", "recursion"])).toEqual([
      "I",
      "AM",
      "LEARNING",
      "RECURSION"
    ]);
  });
});
