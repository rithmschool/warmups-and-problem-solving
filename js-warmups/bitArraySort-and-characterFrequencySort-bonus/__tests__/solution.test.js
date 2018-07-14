describe("UnitTests", function() {
  it("bit_array_sort_input_1", function() {
    // Failure message:
    // expected bitArraySort([0, 0, 0]) to equal [0, 0, 0]
    expect(bitArraySort([0, 0, 0])).toEqual([0, 0, 0]);
  });
  it("bit_array_sort_input_2", function() {
    // Failure message:
    // expected bitArraySort([1, 1, 1, 1]) to equal [1, 1, 1, 1]
    expect(bitArraySort([1, 1, 1, 1])).toEqual([1, 1, 1, 1]);
  });
  it("bit_array_sort_input_6", function() {
    // Failure message:
    // expected bitArraySort([1, 0, 1, 0, 0]) to equal [0, 0, 0, 1, 1]
    expect(bitArraySort([1, 0, 1, 0, 0])).toEqual([0, 0, 0, 1, 1]);
  });
  it("character_frequency_sort_input_1", function() {
    // Failure message:
    // expected characterFrequencySort("ttttrreee") to be "tttteeerr"
    expect(characterFrequencySort("ttttrreee")).toBe("tttteeerr");
  });
  it("bit_array_sort_input_5", function() {
    // Failure message:
    // expected bitArraySort([1, 0, 0, 0, 0]) to equal [0, 0, 0, 0, 1]
    expect(bitArraySort([1, 0, 0, 0, 0])).toEqual([0, 0, 0, 0, 1]);
  });
  it("bit_array_sort_input_4", function() {
    // Failure message:
    // expected bitArraySort([1, 1, 1, 0, 1]) to equal [0, 1, 1, 1, 1]
    expect(bitArraySort([1, 1, 1, 0, 1])).toEqual([0, 1, 1, 1, 1]);
  });
  it("bit_array_sort_input_3", function() {
    // Failure message:
    // expected bitArraySort([0, 1, 1, 0, 1, 1, 0]) to equal [0, 0, 0, 1, 1, 1, 1]
    expect(bitArraySort([0, 1, 1, 0, 1, 1, 0])).toEqual([0, 0, 0, 1, 1, 1, 1]);
  });
  it("character_frequency_sort_input_3", function() {
    // Failure message:
    // expected characterFrequencySort("eeeeffalll") to be "eeeelllffa"
    expect(characterFrequencySort("eeeeffalll")).toBe("eeeelllffa");
  });
  it("character_frequency_sort_input_2", function() {
    // Failure message:
    // expected characterFrequencySort("cacac") to be "cccaa"
    expect(characterFrequencySort("cacac")).toBe("cccaa");
  });
  it("character_frequency_sort_input_4", function() {
    // Failure message:
    // expected characterFrequencySort("abbcccdddd") to be "ddddcccbba"
    expect(characterFrequencySort("abbcccdddd")).toBe("ddddcccbba");
  });
  it("character_frequency_sort_input_5", function() {
    // Failure message:
    // expected characterFrequencySort("xyzxyyzzzxyyyyzzzzz") to be "zzzzzzzzzyyyyyyyxxx"
    expect(characterFrequencySort("xyzxyyzzzxyyyyzzzzz")).toBe(
      "zzzzzzzzzyyyyyyyxxx"
    );
  });
});
