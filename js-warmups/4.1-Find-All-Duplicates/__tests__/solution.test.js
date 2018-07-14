describe("UnitTests", function() {
  it("works_with_results_in_any_order", function() {
    expect(
      findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]).sort((a, b) => a - b)
    ).toEqual([2, 3]);
    expect(findAllDuplicates([4, 3, 2, 1, 0])).toEqual([]);
    expect(
      findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]).sort((a, b) => a - b)
    ).toEqual([1, 2, 3]);
  });
});
