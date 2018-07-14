describe("UnitTests", function() {
  it("should_return_an_array_of_all_the_words_in_the_Trie", function() {
    // Failure message:
    // This test has no failure messages
    var t = new Trie();
    t.addWord("fo");
    t.addWord("fat");
    t.addWord("fate");
    t.addWord("fatal");
    t.addWord("father");
    t.addWord("fathers");
    t.addWord("fanatics");
    t.addWord("fantastic");

    expect(t.getWords().sort((a, b) => a.length > b.length)).toEqual([
      "fo",
      "fat",
      "fate",
      "fatal",
      "father",
      "fathers",
      "fanatics",
      "fantastic"
    ]);

    expect(t.getWords().length).toEqual(8);
  });
});
