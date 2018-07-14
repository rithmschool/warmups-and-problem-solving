describe("UnitTests", function() {
  it("swap_pair_input_3", function() {
    // Failure message:
    // expected swapPair([4,5,6,1],[10]) to be false
    expect(swapPair([4, 5, 6, 1], [10])).toBe(false);
  });
  it("swap_pair_input_1", function() {
    // Failure message:
    // expected swapPair([4,1,2,1,1,2], [3,6,3,3]) to be true
    expect(swapPair([4, 1, 2, 1, 1, 2], [3, 6, 3, 3])).toBe(true);
  });
  it("swap_pair_input_2", function() {
    // Failure message:
    // expected swapPair([7,5,6,4], [8,1,3,2]) to be true
    expect(swapPair([7, 5, 6, 4], [8, 1, 3, 2])).toBe(true);
  });
  it("roman_to_integer_input_5", function() {
    // Failure message:
    // expected romanToInteger('DCL') to be 650
    expect(romanToInteger("DCL")).toBe(650);
  });
  it("roman_to_integer_input_3", function() {
    // Failure message:
    // expected romanToInteger('IX') to be 9
    expect(romanToInteger("IX")).toBe(9);
  });
  it("roman_to_integer_input_1", function() {
    // Failure message:
    // expected romanToInteger('IV') to be 4
    expect(romanToInteger("IV")).toBe(4);
  });
  it("roman_to_integer_input_4", function() {
    // Failure message:
    // expected romanToInteger('LXVIII') to be 68
    expect(romanToInteger("LXVIII")).toBe(68);
  });
  it("roman_to_integer_input_7", function() {
    // Failure message:
    // expected romanToInteger('MCMXCVI') to be 1996
    expect(romanToInteger("MCMXCVI")).toBe(1996);
  });
  it("roman_to_integer_input_6", function() {
    // Failure message:
    // expected romanToInteger('MDCLXIV') to be 1664
    expect(romanToInteger("MDCLXIV")).toBe(1664);
  });
  it("roman_to_integer_input_2", function() {
    // Failure message:
    // expected romanToInteger('VI') to be 6
    expect(romanToInteger("VI")).toBe(6);
  });
  it("swap_pair_input_4", function() {
    // Failure message:
    // expected swapPair([20,30,40],[1,2,3,4]) to be false
    expect(swapPair([20, 30, 40], [1, 2, 3, 4])).toBe(false);
  });
});
