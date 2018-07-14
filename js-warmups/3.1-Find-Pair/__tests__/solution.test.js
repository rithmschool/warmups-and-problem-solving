describe("UnitTests", function() {
  it("handles_pairs_with_different_orders", function() {
    // Failure message:
    // expect(findPair([-4,4], -8)).toBe(true) // true
    // expect(findPair([-4,4], 8)).toBe(true) // true
    expect(findPair([-4, 4], -8)).toBe(true); // true
    expect(findPair([-4, 4], 8)).toBe(true); // true
  });
  it("returns_false_if_a_pair_is_not_found", function() {
    // Failure message:
    // expect(findPair([6,1,4,10,2,4], 22)).toBe(false)
    // expect(findPair([], 0)).toBe(false) // false
    expect(findPair([6, 1, 4, 10, 2, 4], 22)).toBe(false);
    expect(findPair([], 0)).toBe(false); // false
  });
  it("works_for_the_same_value_in_an_array_if_the_sum_is_0", function() {
    // Failure message:
    // expect(findPair([5,5], 0)).toBe(true)
    expect(findPair([5, 5], 0)).toBe(true);
  });
  it("returns_true_if_a_pair_is_found", function() {
    // Failure message:
    // expect(findPair([8,6,2,4,1,0,2,5,13],1)).toBe(true)
    // expect(findPair([6,1,4,10,2,4], 2)).toBe(true)
    // expect(findPair([4,-2,3,10],-6)).toBe(true)
    // expect(findPair([1,3,4,6],-2)).toBe(true)
    // expect(findPair([0,1,3,4,6],-2)).toBe(true)
    expect(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)).toBe(true);
    expect(findPair([6, 1, 4, 10, 2, 4], 2)).toBe(true);
    expect(findPair([4, -2, 3, 10], -6)).toBe(true);
    expect(findPair([1, 3, 4, 6], -2)).toBe(true);
    expect(findPair([0, 1, 3, 4, 6], -2)).toBe(true);
  });
});
