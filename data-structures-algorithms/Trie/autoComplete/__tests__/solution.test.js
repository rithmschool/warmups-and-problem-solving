describe("UnitTests", function() {
  it("should_autocomplete_correctly", function() {
    // Failure message:
    // This test has no failure messages
    var t = new Trie();
    t.addWord("fun");
    t.addWord("fast");
    t.addWord("fat");
    t.addWord("fate");
    t.addWord("father");
    t.addWord("forget");
    t.addWord("awesome");
    t.addWord("argue");

    expect(t.autoComplete("fa")).toEqual(["fast", "fat", "fate", "father"]); //
    expect(t.autoComplete("a")).toEqual(["awesome", "argue"]); //
    expect(t.autoComplete("arz")).toEqual([]); // []
  });
});
