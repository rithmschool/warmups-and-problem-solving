describe("UnitTests", function() {
  it("returns_the_longest_substring", function() {
    // Failure message:
    // see the sample input for test cases
    expect(findLongestSubstring("")).toBe(0);
    expect(findLongestSubstring("thisisawesome")).toBe(6);
    expect(findLongestSubstring("bbbbbb")).toBe(1);
    expect(findLongestSubstring("longestsubstring")).toBe(8);
    expect(findLongestSubstring("rithmschool")).toBe(7); // 7
    expect(findLongestSubstring("thecatinthehat")).toBe(7); // 7
    expect(findLongestSubstring("thisishowwedoit")).toBe(6);
  });
});
