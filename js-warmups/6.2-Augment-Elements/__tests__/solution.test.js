describe("UnitTests", function() {
  it("standard_inputs", function() {
    // Failure message:
    // This test has no failure messages
    var arr1 = [[1, 2], [3, 4, 5]];
    var arr2 = [[], [3], [7]];

    expect(augmentElements(arr1, 6)).toEqual([[1, 2, 6], [3, 4, 5, 6]]);
    expect(augmentElements(arr2, 5)).toEqual([[5], [3, 5], [7, 5]]);

    expect(arr1).toEqual([[1, 2], [3, 4, 5]]);
    expect(arr2).toEqual([[], [3], [7]]);
  });
});
