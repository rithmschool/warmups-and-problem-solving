describe("UnitTests", function() {
  it("should_remove_a_word", function() {
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

    t.removeWord("fat");
    expect(t.characters.f.characters.a.characters.t.isWord).toBe(false); // true // false
    expect(t.characters.f.characters.a.characters.t.characters.e.isWord).toBe(
      true
    ); // true

    t.removeWord("argue");

    expect(t.characters.a.characters.r).toBe(undefined); // undefined
  });
});
