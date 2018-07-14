describe("UnitTests", function() {
  it("checks_if_there_are_duplicates", function() {
    expect(areThereDuplicates(1, 2, 3)).toBe(false);
    expect(areThereDuplicates(1, 2, 2)).toBe(true);
    expect(areThereDuplicates(1)).toBe(false);
    expect(areThereDuplicates(3, 3)).toBe(true);
    expect(areThereDuplicates("a", "b", "c", "a")).toBe(true);
    expect(areThereDuplicates("a", "z", "c", "d")).toBe(false);
  });
});
