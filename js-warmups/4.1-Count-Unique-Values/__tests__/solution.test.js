describe("UnitTests", function() {
  it("returns_the_correct_number_of_unique_values", function() {
    expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toBe(2);
    expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
    expect(countUniqueValues([])).toBe(0);
    expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4); // 4
  });
});
