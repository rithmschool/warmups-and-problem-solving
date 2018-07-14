describe("UnitTests", function() {
  it("should_return_negative_one_if_the_value_is_not_found", function() {
    // Failure message:
    // This test has no failure messages
    expect(
      binarySearchRecursive(
        [1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50],
        0
      )
    ).toBe(-1);
    expect(
      binarySearchRecursive(
        [1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50],
        7
      )
    ).toBe(-1);
    expect(
      binarySearchRecursive(
        [1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50],
        40
      )
    ).toBe(-1);
    expect(
      binarySearchRecursive(
        [1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50],
        100
      )
    ).toBe(-1);
  });
  it("should_find_the_index_of_a_value_in_an_array", function() {
    // Failure message:
    // This test has no failure messages
    expect(
      binarySearch([1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50], 1)
    ).toBe(0);
    expect(
      binarySearch([1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50], 3)
    ).toBe(1);
    expect(
      binarySearch([1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50], 12)
    ).toBe(6);
    expect(
      binarySearch([1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50], 24)
    ).toBe(11);
    expect(
      binarySearch([1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50], 50)
    ).toBe(13);
  });
  it("should_return_negative_one_if_the_value_is_not_found", function() {
    // Failure message:
    // This test has no failure messages
    expect(
      binarySearch([1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50], 0)
    ).toBe(-1);
    expect(
      binarySearch([1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50], 7)
    ).toBe(-1);
    expect(
      binarySearch([1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50], 40)
    ).toBe(-1);
    expect(
      binarySearch([1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50], 100)
    ).toBe(-1);
  });
  it("should_find_the_index_of_a_value_in_an_array", function() {
    // Failure message:
    // This test has no failure messages
    expect(
      binarySearchRecursive(
        [1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50],
        1
      )
    ).toBe(0);
    expect(
      binarySearchRecursive(
        [1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50],
        3
      )
    ).toBe(1);
    expect(
      binarySearchRecursive(
        [1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50],
        12
      )
    ).toBe(6);
    expect(
      binarySearchRecursive(
        [1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50],
        24
      )
    ).toBe(11);
    expect(
      binarySearchRecursive(
        [1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50],
        50
      )
    ).toBe(13);
  });
});
