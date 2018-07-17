describe("UnitTests", function() {
  it("can_find_product", function() {
    // Failure message:
    // This test has no failure messages
    expect(prod([1, 2, 3, 4])).toBe(24);
    expect(prod([1, 2, 0])).toBe(0);
  });
});
