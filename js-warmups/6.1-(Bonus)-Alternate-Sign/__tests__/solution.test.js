describe("UnitTests", function() {
  it("alternate_Sign", function() {
    var input1 = [2, 7, 8, 3, 1, 4];
    var input2 = [-2, -7, 8, 3, -1, 4];
    var input3 = [1, 2, 3];
    var input4 = [1, 2, 3, 4];

    expect(alternateSign(input1)).toEqual([2, -7, 8, -3, 1, -4]);
    expect(alternateSign(input2)).toEqual([2, -7, 8, -3, 1, -4]);
    expect(alternateSign(input3)).toEqual([1, -2, 3]);
    expect(alternateSign(input4)).toEqual([1, -2, 3, -4]);
  });
});
