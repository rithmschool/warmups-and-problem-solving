describe("UnitTests", function() {
  it("works_with_large_integers", function() {
    expect(addCommas(1000)).toBe("1,000");
    expect(addCommas(9999)).toBe("9,999");
    expect(addCommas(10000)).toBe("10,000");
    expect(addCommas(99999)).toBe("99,999");
    expect(addCommas(100000)).toBe("100,000");
    expect(addCommas(999999)).toBe("999,999");
    expect(addCommas(1000000)).toBe("1,000,000");
    expect(addCommas(9999999)).toBe("9,999,999");
    expect(addCommas(10000000)).toBe("10,000,000");
    expect(addCommas(99999999)).toBe("99,999,999");
    expect(addCommas(100000000)).toBe("100,000,000");
    expect(addCommas(999999999)).toBe("999,999,999");
    expect(addCommas(1000000000)).toBe("1,000,000,000");
    expect(addCommas(9999999999)).toBe("9,999,999,999");
  });
  it("works_for_small_floats", function() {
    expect(addCommas(0.12345)).toBe("0.12345");
    expect(addCommas(1.2345)).toBe("1.2345");
    expect(addCommas(12.345)).toBe("12.345");
    expect(addCommas(123.45)).toBe("123.45");
  });
  it("works_for_small_ints", function() {
    expect(addCommas(1)).toBe("1");
    expect(addCommas(10)).toBe("10");
    expect(addCommas(99)).toBe("99");
    expect(addCommas(100)).toBe("100");
    expect(addCommas(999)).toBe("999");
  });
  it("works_for_large_floats", function() {
    expect(addCommas(1234.5)).toBe("1,234.5");
    expect(addCommas(987654321.012345)).toBe("987,654,321.012345");
    expect(addCommas(87654321.01234)).toBe("87,654,321.01234");
    expect(addCommas(7654321.01234)).toBe("7,654,321.01234");
    expect(addCommas(654321.4567)).toBe("654,321.4567");
    expect(addCommas(54321.07)).toBe("54,321.07");
  });
});
