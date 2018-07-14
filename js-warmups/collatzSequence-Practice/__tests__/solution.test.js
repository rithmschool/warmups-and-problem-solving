describe("UnitTests", function() {
  it("collatzSequenceIterative_invalid_input", function() {
    // Failure message:
    // collatzSequenceIterative should ensure the input is valid
    expect(collatzSequenceIterative(0)).toBe(
      "Input must be a positive whole number."
    );
    expect(collatzSequenceIterative(-1)).toBe(
      "Input must be a positive whole number."
    );
    expect(collatzSequenceIterative(2.5)).toBe(
      "Input must be a positive whole number."
    );
    expect(collatzSequenceIterative("a")).toBe(
      "Input must be a positive whole number."
    );
    expect(collatzSequenceIterative(null)).toBe(
      "Input must be a positive whole number."
    );
  });
  it("collatzSequenceRecursive_invalid_input", function() {
    // Failure message:
    // collatzSequenceRecursive should ensure the input is valid
    expect(collatzSequenceRecursive(0)).toBe(
      "Input must be a positive whole number."
    );
    expect(collatzSequenceRecursive(-1)).toBe(
      "Input must be a positive whole number."
    );
    expect(collatzSequenceRecursive(2.5)).toBe(
      "Input must be a positive whole number."
    );
    expect(collatzSequenceRecursive("a")).toBe(
      "Input must be a positive whole number."
    );
    expect(collatzSequenceRecursive(null)).toBe(
      "Input must be a positive whole number."
    );
  });
  it("collatzSequenceRecursive_valid_input", function() {
    // Failure message:
    // collatzSequenceRecursive should return the correct array of values for a given n
    expect(collatzSequenceRecursive(1)).toEqual([1]);
    expect(collatzSequenceRecursive(2)).toEqual([2, 1]);
    expect(collatzSequenceRecursive(3)).toEqual([3, 10, 5, 16, 8, 4, 2, 1]);
    expect(collatzSequenceRecursive(4)).toEqual([4, 2, 1]);
    expect(collatzSequenceRecursive(5)).toEqual([5, 16, 8, 4, 2, 1]);
    expect(collatzSequenceRecursive(6)).toEqual([6, 3, 10, 5, 16, 8, 4, 2, 1]);
    expect(collatzSequenceRecursive(7)).toEqual([
      7,
      22,
      11,
      34,
      17,
      52,
      26,
      13,
      40,
      20,
      10,
      5,
      16,
      8,
      4,
      2,
      1
    ]);
    expect(collatzSequenceRecursive(8)).toEqual([8, 4, 2, 1]);
    expect(collatzSequenceRecursive(9)).toEqual([
      9,
      28,
      14,
      7,
      22,
      11,
      34,
      17,
      52,
      26,
      13,
      40,
      20,
      10,
      5,
      16,
      8,
      4,
      2,
      1
    ]);
    expect(collatzSequenceRecursive(10)).toEqual([10, 5, 16, 8, 4, 2, 1]);
  });
  it("collatzSequenceIterative_valid_input", function() {
    // Failure message:
    // collatzSequenceIterative should return the correct array of values for a given n
    expect(collatzSequenceIterative(1)).toEqual([1]);
    expect(collatzSequenceIterative(2)).toEqual([2, 1]);
    expect(collatzSequenceIterative(3)).toEqual([3, 10, 5, 16, 8, 4, 2, 1]);
    expect(collatzSequenceIterative(4)).toEqual([4, 2, 1]);
    expect(collatzSequenceIterative(5)).toEqual([5, 16, 8, 4, 2, 1]);
    expect(collatzSequenceIterative(6)).toEqual([6, 3, 10, 5, 16, 8, 4, 2, 1]);
    expect(collatzSequenceIterative(7)).toEqual([
      7,
      22,
      11,
      34,
      17,
      52,
      26,
      13,
      40,
      20,
      10,
      5,
      16,
      8,
      4,
      2,
      1
    ]);
    expect(collatzSequenceIterative(8)).toEqual([8, 4, 2, 1]);
    expect(collatzSequenceIterative(9)).toEqual([
      9,
      28,
      14,
      7,
      22,
      11,
      34,
      17,
      52,
      26,
      13,
      40,
      20,
      10,
      5,
      16,
      8,
      4,
      2,
      1
    ]);
    expect(collatzSequenceIterative(10)).toEqual([10, 5, 16, 8, 4, 2, 1]);
  });
});
