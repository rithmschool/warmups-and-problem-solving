Write a function called removeWord which accepts a string and removes the word from the Trie. addWord is implement to help you test the function.

```js
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
t.characters.f.characters.a.characters.t.isWord; // false
t.characters.f.characters.a.characters.t.characters.e.isWord; // true

t.removeWord("argue");

t.characters.a.characters.r; // undefined
```
