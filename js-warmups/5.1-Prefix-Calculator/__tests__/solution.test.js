describe("UnitTests", function() {
  it("should_work_with_plus_and_mult", function() {
    // Failure message:
    // This test has no failure messages
    expect(calc("+ 1 2")).toBe(3);
    expect(calc("* 2 + 1 2")).toBe(6);
    expect(calc("+ 9 * 2 3")).toBe(15);
  });
  it("should_work_with_minus_and_div", function() {
    // Failure message:
    // This test has no failure messages
    expect(calc("- 1 2")).toBe(-1);
    expect(calc("- 9 * 2 3")).toBe(3);
    expect(calc("/ 6 - 4 2")).toBe(3);
  });
});
