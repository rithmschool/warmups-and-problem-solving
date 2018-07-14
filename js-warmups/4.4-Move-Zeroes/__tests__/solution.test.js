describe("UnitTests", function() {
  it("passes_tests", function() {
    expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
    expect(moveZeroes([1, 3, 10, 2])).toEqual([1, 3, 10, 2]);
    expect(moveZeroes([4, 1, 2, 0, 0, 1, 2, 1, 0])).toEqual([
      4,
      1,
      2,
      1,
      2,
      1,
      0,
      0,
      0
    ]);
    expect(moveZeroes([6, 1, 2, 3, 5, 1, 0])).toEqual([6, 1, 2, 3, 5, 1, 0]);
    expect(moveZeroes([0, 6, 1, 2, 3, 5, 1, 0])).toEqual([
      6,
      1,
      2,
      3,
      5,
      1,
      0,
      0
    ]);
    expect(moveZeroes([12, 2, 0, 0, 2, 1])).toEqual([12, 2, 2, 1, 0, 0]);
  });
});
