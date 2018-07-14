describe("UnitTests", function() {
  it("sorts_the_array_correctly", function() {
    // Failure message:
    // you have not sorted the array correctly
    expect(almostSort([1, 2, 3, 7, 5, 6, 4])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(almostSort([1, 2, 6, 4, 5, 3])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(almostSort([-1, 1, 0, 2])).toEqual([-1, 0, 1, 2]);
    expect(almostSort([2, 1])).toEqual([1, 2]);
    expect(almostSort([])).toEqual([]); // []
  });
  it("finds_triplets_correctly", function() {
    // Failure message:
    // see sample input for test cases
    expect(findTriplets([-1, 0, 1])).toBe(1);
    expect(findTriplets([5, -2, 3, -1])).toBe(1);
    expect(findTriplets([0, -1, 2, -3, 1])).toBe(2); // 2
    expect(findTriplets([1, -2, 0, 5])).toBe(0); // 0
    expect(findTriplets([0, 4, 2, 7, 5, 3, -3, -2, -8, -12])).toBe(5); // 5
  });
});
