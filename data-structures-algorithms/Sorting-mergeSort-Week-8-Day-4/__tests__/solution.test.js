describe("UnitTests", function() {
  it("should_be_a_pure_function", function() {
    // Failure message:
    // it should not modify the input arrays at all
    var arr1 = [1, 3, 4, 5];
    var arr2 = [2, 4, 6, 8];
    mergeSortedArrays(arr1, arr2);
    expect(arr1).toEqual([1, 3, 4, 5]);
    expect(arr2).toEqual([2, 4, 6, 8]);
  });
  it("passes_input_cases", function() {
    // Failure message:
    // This test has no failure messages
    expect(mergeSortedArrays([1, 3, 4, 5], [2, 4, 6, 8])).toEqual([
      1,
      2,
      3,
      4,
      4,
      5,
      6,
      8
    ]);
    expect(
      mergeSortedArrays([-2, -1, 0, 4, 5, 6], [-3, -2, -1, 2, 3, 5, 7, 8])
    ).toEqual([-3, -2, -2, -1, -1, 0, 2, 3, 4, 5, 5, 6, 7, 8]);
    expect(mergeSortedArrays([3, 4, 5], [1, 2])).toEqual([1, 2, 3, 4, 5]);
  });
});
