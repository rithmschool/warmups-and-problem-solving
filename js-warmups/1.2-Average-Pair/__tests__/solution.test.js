describe("UnitTests", function() {
  it("has_valid_function_signature", function() {
    expect(typeof averagePair === "function").toBe(true);
  });
  it("passes_test_cases", function() {
    expect(averagePair([1, 2, 3], 2.5)).toBe(true);
    expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBe(true);
    expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBe(false);
    expect(averagePair([], 4)).toBe(false);
  });
});
