describe("UnitTests", function() {
  it("passes_standard_cases", function() {
    expect(anagramPalindrome("carrace")).toBe(true);
    expect(anagramPalindrome("bba")).toBe(true);
    expect(anagramPalindrome("e")).toBe(true);
    expect(anagramPalindrome("zzzaaa")).toBe(false);
    expect(anagramPalindrome("cattaco")).toBe(true);
    expect(anagramPalindrome("jjqqqjjx")).toBe(false);
  });
});
