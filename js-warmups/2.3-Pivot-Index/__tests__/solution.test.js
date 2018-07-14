describe("UnitTests", function() {
  it("pivot_index_input_1", function() {
    // Failure message:
    // pivotIndex([1,2,1,6,3,1]) should be 3
    expect(pivotIndex([1, 2, 1, 6, 3, 1])).toBe(3); // 3
  });
  it("pivot_index_input_2", function() {
    // Failure message:
    // pivotIndex([5,2,7]) should be -1
    expect(pivotIndex([5, 2, 7])).toBe(-1); // -1  no valid pivot index
  });
  it("pivot_index_input_3", function() {
    // Failure message:
    // pivotIndex([-1,3,-3,2]) should be 1
    expect(pivotIndex([-1, 3, -3, 2])).toBe(1); // 1
  });
});
