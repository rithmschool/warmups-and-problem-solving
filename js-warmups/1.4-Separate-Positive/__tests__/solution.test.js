describe("UnitTests", function() {
  it("moves_positives_to_the_left_and_negatives_to_the_right", function() {
    // Failure message:
    // See the sample input for test cases and make sure that you are modifying the original array as well!
    var arr = [2, -1, -3, 6, -8, 10];
    separatePositive(arr);

    expect(arr[0] > 0).toBe(true);
    expect(arr[1] > 0).toBe(true);
    expect(arr[2] > 0).toBe(true);
    expect(arr[3] < 0).toBe(true);
    expect(arr[3] < 0).toBe(true);
    expect(arr[3] < 0).toBe(true);

    expect(separatePositive([-5, 5])).toEqual([5, -5]);
    expect(separatePositive([1, 2, 3])).toEqual([1, 2, 3]);

    var arr2 = [5, 10, -15, 20, 25];

    separatePositive(arr2);

    expect(arr2[0] > 0).toBe(true);
    expect(arr2[1] > 0).toBe(true);
    expect(arr2[2] > 0).toBe(true);
    expect(arr2[3] > 0).toBe(true);
    expect(arr2[4]).toBe(-15);
  });
});
