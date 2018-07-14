describe("UnitTests", function() {
  it("returns_the_longest_consecutive_series_of_decreasing_integers", function() {
    expect(longestFall([5, 3, 1, 3, 0])).toBe(3);
    expect(longestFall([2, 2, 1])).toBe(2);
    expect(longestFall([2])).toBe(1);
    expect(longestFall([])).toBe(0);
    expect(longestFall([5, 4, 4, 4, 3, 2])).toBe(3);
    expect(longestFall([9, 8, 7, 6, 5, 6, 4, 2, 1])).toBe(5);
  });
  it("has_correct_function_signature", function() {
    // Failure message:
    // function must be named longestFall and take an array argument
    expect(typeof longestFall === "function").toBe(true);
  });
});
