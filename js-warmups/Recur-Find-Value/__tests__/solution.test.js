describe("UnitTests", function() {
  it("should_work", function() {
    // Failure message:
    // This test has no failure messages
    expect(seek([1, 2, 3], 3)).toBe(true);
    expect(seek([1, 2, 3], 4)).toBe(false);
    expect(seek([1, [2, 3]], 3)).toBe(true);
    expect(seek([1, 2, 3], 4)).toBe(false);
    expect(seek([[[[[3]]]]], 3)).toBe(true);
    expect(seek([[[[[3]]]]], 4)).toBe(false);
  });
});
