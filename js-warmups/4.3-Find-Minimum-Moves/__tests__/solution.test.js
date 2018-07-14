describe("UnitTests", function() {
  it("passes_test_cases", function() {
    expect(findMinMoves([1, 2, 3])).toBe(2);
    expect(findMinMoves([7, 1])).toBe(6);
    expect(findMinMoves([3, 3, 1])).toBe(2);
    expect(findMinMoves([11, 2, 5])).toBe(9);
    expect(findMinMoves([-2, 11, 5])).toBe(13);
    expect(findMinMoves([5, 2, 1, 7, -2, 4, 10])).toBe(21);
  });
});
