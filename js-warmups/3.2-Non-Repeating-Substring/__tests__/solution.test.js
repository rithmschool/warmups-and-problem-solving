describe("UnitTests", function() {
  it("returns_the_longest_non_repeating_substring", function() {
    expect(nonRepeatSubstring("abb")).toBe("ab");
    expect(nonRepeatSubstring("abccde")).toBe("abc");
    expect(nonRepeatSubstring("aaaabbbb")).toBe("ab");
  });
  it("handles_edge_cases", function() {
    expect(nonRepeatSubstring("a")).toBe("a"); // 'a'
    expect(nonRepeatSubstring("bb")).toBe("b");
    expect(nonRepeatSubstring("cc")).toBe("c");
  });
});
