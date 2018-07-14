describe("UnitTests", function() {
  it("same_frequency_input_1", function() {
    // Failure message:
    // sameFrequency(182,281) should be true
    expect(sameFrequency(182, 281)).toBe(true);
  });
  it("same_frequency_input_2", function() {
    // Failure message:
    // sameFrequency(34,14) should be false
    expect(sameFrequency(34, 14)).toBe(false);
  });
  it("same_frequency_input_3", function() {
    // Failure message:
    // sameFrequency(3589578, 5879385) should be true
    expect(sameFrequency(3589578, 5879385)).toBe(true);
  });
  it("same_frequency_input_4", function() {
    // Failure message:
    // sameFrequency(22,222) should be false
    expect(sameFrequency(22, 222)).toBe(false);
  });
});
