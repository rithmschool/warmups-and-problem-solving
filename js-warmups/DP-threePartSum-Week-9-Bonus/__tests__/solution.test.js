describe("UnitTests", function() {
  it("n_is_12", function() {
    // Failure message:
    // Expected n = 12 to yield a sum of 13
    expect(threePartSum(12)).toBe(13);
  });
  it("n_is_24", function() {
    // Failure message:
    // Expected n = 24 to yield a sum of 27
    expect(threePartSum(24)).toBe(27);
  });
  it("n_is_23", function() {
    // Failure message:
    // Expected n = 23 to yield a sum of 23
    expect(threePartSum(23)).toBe(23);
  });
  it("n_is_48", function() {
    // Failure message:
    // Expected n = 48 to yield a sum of 57
    expect(threePartSum(48)).toBe(57);
  });
  it("n_is_43824", function() {
    // Failure message:
    // Expected n = 43824 to yield a sum of 84399
    expect(threePartSum(43824)).toBe(84399);
  });
});
