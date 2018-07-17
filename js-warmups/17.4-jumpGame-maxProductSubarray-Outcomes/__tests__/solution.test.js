describe("UnitTests", function() {
  it("returns_true_if_a_valid_jump_exists", function() {
    // Failure message:
    // This test has no failure messages
    expect(jumpGame([2, 3, 1, 1, 4])).toBe(true);
    expect(jumpGame([3, 2, 1, 0, 4])).toBe(false);
    expect(jumpGame([1, 4, 1, 4])).toBe(true);
    expect(jumpGame([1, 1, 0, 0])).toBe(false);
    expect(jumpGame([])).toBe(true);
    expect(jumpGame([1])).toBe(true);
    expect(jumpGame([0, 2])).toBe(false);
  });
  it("returns_the_highest_product_in_a_contiguous_subarray", function() {
    // Failure message:
    // This test has no failure messages
    expect(maxProductSubarray([2, 3, -2, 4])).toBe(6);
    expect(maxProductSubarray([-2, 0, -1])).toBe(0);
    expect(maxProductSubarray([4, 1, 2, 1, 0, 10])).toBe(10); // 10
    expect(maxProductSubarray([4, 1, -2, 2, 1, 4, -6])).toBe(384); // 384
  });
});
