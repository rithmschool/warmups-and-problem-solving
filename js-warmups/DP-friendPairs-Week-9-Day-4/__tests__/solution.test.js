describe("UnitTests", function() {
  it("n_is_2", function() {
    // Failure message:
    // Expected 2 to yield 2 pairs.
    expect(friendPairs(2)).toBe(2);
  });
  it("n_is_3", function() {
    // Failure message:
    // Expected 3 to yield 4 pairs
    expect(friendPairs(3)).toBe(4);
  });
  it("n_is_4", function() {
    // Failure message:
    // Expected 4 to yield 10 pairs
    expect(friendPairs(4)).toBe(10);
  });
  it("n_is_5", function() {
    // Failure message:
    // Expected 5 to yield 26 pairs
    expect(friendPairs(5)).toBe(26);
  });
  it("n_is_6", function() {
    // Failure message:
    // Expected 6 to yield 76 pairs
    expect(friendPairs(6)).toBe(76);
  });
  it("n_is_10", function() {
    // Failure message:
    // Expected 10 to yield 9496 pairs
    expect(friendPairs(10)).toBe(9496);
  });
  it("n_is_20", function() {
    // Failure message:
    // Expected 20 to yield 23758664096 pairs
    expect(friendPairs(20)).toBe(23758664096);
  });
});
