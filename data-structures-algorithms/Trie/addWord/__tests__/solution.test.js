let Trie = require("../solution");

describe("UnitTests", function() {
  it("should_add_a_word_correct_from_the_root", function() {
    // Failure message:
    // This test has no failure messages
    var firstTrie = new Trie();
    firstTrie.addWord("fun");
    expect(!!firstTrie.characters["f"]).toBe(true);

    expect(!!firstTrie.characters["f"].characters["u"]).toBe(true);

    expect(
      firstTrie.characters["f"].characters["u"].characters["n"].isWord
    ).toBe(true);
    expect(!!firstTrie.characters["f"].characters["u"].characters["n"]).toBe(
      true
    ); // true
    expect(
      firstTrie.characters["f"].characters["u"].characters["n"].characters
    ).toEqual({}); // {}

    expect(!!firstTrie.characters["f"].characters["u"].characters["l"]).toBe(
      false
    ); // false
  });
  it("should_handle_multiple_words", function() {
    // Failure message:
    // This test has no failure messages
    var secondTrie = new Trie();
    secondTrie.addWord("ha");
    secondTrie.addWord("hat");
    secondTrie.addWord("has");
    secondTrie.addWord("have");
    secondTrie.addWord("hate");

    expect(secondTrie.characters.h.characters.a.isWord).toBe(true); // true
    expect(secondTrie.characters.h.characters.a.characters.t.isWord).toBe(true); // true
    expect(secondTrie.characters.h.characters.a.characters.v.isWord).toBe(
      false
    ); // false
    expect(
      secondTrie.characters.h.characters.a.characters.v.characters.e.isWord
    ).toBe(true); // true
    expect(
      secondTrie.characters.h.characters.a.characters.t.characters.e.isWord
    ).toBe(true); // true

    expect(
      Object.keys(secondTrie.characters.h.characters.a.characters).length
    ).toBe(3); // 3
  });
});
