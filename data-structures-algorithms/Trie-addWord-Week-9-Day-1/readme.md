This function should accept a string and add the word to the Trie. You must mark nodes which are the ends of words so that the words can be reconstructed later.

Hint - you will most likely solve this using recursion. To make the recursion easier, pass in an index in each recursive call to see what character in the string you are currently at.

```js
var firstTrie = new Trie();
firstTrie.addWord("fun");
firstTrie.characters; // {f: Trie}
!!firstTrie.characters["f"]; // true

firstTrie.characters.f.characters.u; // Trie
!!firstTrie.characters.f.characters.u; // true

firstTrie.characters.f.characters.u.characters.n.isWord; // true
!!firstTrie.characters.f.characters.u.characters.n; // true
!!firstTrie.characters.f.characters.u.characters.n.characters; // {}

!!firstTrie.characters.f.characters.u.characters.l; // false

var secondTrie = new Trie();
secondTrie.addWord("ha");
secondTrie.addWord("hat");
secondTrie.addWord("has");
secondTrie.addWord("have");
secondTrie.addWord("hate");

secondTrie.characters.h.characters.a.isWord; // true
secondTrie.characters.h.characters.a.characters.t.isWord; // true
secondTrie.characters.h.characters.a.characters.v.isWord; // false
secondTrie.characters.h.characters.a.characters.v.characters.e.isWord; // true
secondTrie.characters.h.characters.a.characters.t.characters.e.isWord; // true

Object.keys(secondTrie.characters.h.characters.a.characters).length; // 3
```
