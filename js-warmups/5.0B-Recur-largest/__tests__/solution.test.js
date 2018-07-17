describe("UnitTests", function() {
  it("should_find_largest", function() {
    // Failure message:
    // This test has no failure messages
    expect(largest([])).toEqual(undefined);
    expect(largest([1, 3, 2])).toBe(3);
    expect(largest([2, 2])).toBe(2);
  });
});
