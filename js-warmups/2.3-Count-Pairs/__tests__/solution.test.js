describe("UnitTests", function() {
  it("count_pairs_input_1", function() {
    // Failure message:
    // countPairs([3,1,5,4,2], 6) should be 2
    expect(countPairs([3, 1, 5, 4, 2], 6)).toBe(2);
  });
  it("count_pairs_input_2", function() {
    // Failure message:
    // countPairs([10,4,8,2,6,0], 10) should be 3
    expect(countPairs([10, 4, 8, 2, 6, 0], 10)).toBe(3);
  });
  it("count_pairs_input_3", function() {
    // Failure message:
    // countPairs([4,6,2,7], 10) should be 1
    expect(countPairs([4, 6, 2, 7], 10)).toBe(1);
  });
  it("count_pairs_input_4", function() {
    // Failure message:
    // countPairs([1,2,3,4,5], 10) should be 0
    expect(countPairs([1, 2, 3, 4, 5], 10)).toBe(0);
  });
  it("count_pairs_input_5", function() {
    // Failure message:
    // countPairs([1,2,3,4,5], -3) should be 0
    expect(countPairs([1, 2, 3, 4, 5], -3)).toBe(0);
  });
  it("count_pairs_input_6", function() {
    // Failure message:
    // countPairs([0, -4], -4) should be 1
    expect(countPairs([0, -4], -4)).toBe(1);
  });
  it("count_pairs_input_7", function() {
    // Failure message:
    // countPairs([1,2,3,0,-1,-2],0) should be 2
    expect(countPairs([1, 2, 3, 0, -1, -2], 0)).toBe(2);
  });
});
