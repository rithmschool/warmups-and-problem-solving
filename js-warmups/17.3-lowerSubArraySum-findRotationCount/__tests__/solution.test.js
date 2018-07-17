describe("UnitTests", function() {
  it("returns_the_lowest_sum", function() {
    // Failure message:
    // This test has no failure messages
    expect(lowerSubArraySum([1, 2, 3, 4, 5], 11)).toBe(10);
    expect(lowerSubArraySum([2, 4, 6, 8, 10], 7)).toBe(6);
    expect(lowerSubArraySum([5, 3, 2, 6, 7], 12)).toBe(11);
    expect(lowerSubArraySum([6, 3, 2, 5, 7], 15)).toBe(14);
  });
  it("returns_the_number_of_rotations", function() {
    // Failure message:
    // This test has no failure messages
    expect(findRotationCount([15, 18, 2, 3, 6, 12])).toBe(2);
    expect(findRotationCount([7, 9, 11, 12, 5])).toBe(4);
    expect(findRotationCount([7, 9, 11, 12, 15])).toBe(0);
  });
});
