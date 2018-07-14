describe("UnitTests", function() {
  it("pair_count_input_6", function() {
    // Failure message:
    // expected pairCount(25) to be 300
    expect(pairCount(25)).toBe(300);
  });
  it("pair_count_input_8", function() {
    // Failure message:
    // expected pairCount(999) to be 498501
    expect(pairCount(999)).toBe(498501);
  });
  it("pair_count_input_4", function() {
    // Failure message:
    // expected pairCount(4) to be 6
    expect(pairCount(4)).toBe(6);
  });
  it("pair_count_input_3", function() {
    // Failure message:
    // expected pairCount(3) to be 3
    expect(pairCount(3)).toBe(3);
  });
  it("pair_count_input_1", function() {
    // Failure message:
    // expected pairCount(1) to be 0
    expect(pairCount(1)).toBe(0);
  });
  it("pair_count_input_7", function() {
    // Failure message:
    // expected pairCount(120) to be 7140
    expect(pairCount(120)).toBe(7140);
  });
  it("pair_count_input_2", function() {
    // Failure message:
    // expected pairCount(2) to be 1
    expect(pairCount(2)).toBe(1);
  });
  it("pair_count_input_5", function() {
    // Failure message:
    // expected pairCount(5) to be 28
    expect(pairCount(8)).toBe(28);
  });
});
