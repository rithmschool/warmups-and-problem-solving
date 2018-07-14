describe("UnitTests", function() {
  it("returns_the_number_of_zeroes_in_the_array", function() {
    // Failure message:
    // expect(countZeroes([1,1,1,1,0,0])).toBe(2)
    // expect(countZeroes([1,0,0,0,0])).toBe(4)
    // expect(countZeroes([0,0,0])).toBe(3)
    // expect(countZeroes([1,1,1,1])).toBe(0)
    // expect(countZeroes([1,0])).toBe(1)
    // expect(countZeroes([0])).toBe(1)
    // expect(countZeroes([])).toBe(0)
    expect(countZeroes([1, 1, 1, 1, 0, 0])).toBe(2);
    expect(countZeroes([1, 0, 0, 0, 0])).toBe(4);
    expect(countZeroes([0, 0, 0])).toBe(3);
    expect(countZeroes([1, 1, 1, 1])).toBe(0);
    expect(countZeroes([1, 0])).toBe(1);
    expect(countZeroes([0])).toBe(1);
    expect(countZeroes([])).toBe(0);
  });
});
