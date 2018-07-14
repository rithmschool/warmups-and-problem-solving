describe("UnitTests", function() {
  it("correctly_returns_the_word", function() {
    // Failure message:
    // This test has no failure messages
    var t = new Trie();
    t.addWord("fun");
    t.addWord("fast");
    t.addWord("fat");
    t.addWord("fate");
    t.addWord("father");

    expect(t.findWord("taco")).toBe(undefined); // undefined
    expect(Object.keys(t.findWord("fat").characters).length).toBe(2); // {t: Trie}
    expect(t.findWord("father").characters).toEqual({}); // {}
    expect(t.findWord("father").isWord).toBe(true); // true
  });
});
