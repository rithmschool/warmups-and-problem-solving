Write a function on the Trie.prototype called getWords which returns an array of all of the words in the Trie. The order you return these words does not matter, the tests are simply sorting by smallest to largest length.

```js
var t = new Trie();
t.addWord("fo");
t.addWord("fat");
t.addWord("fate");
t.addWord("fatal");
t.addWord("father");
t.addWord("fathers");
t.addWord("fanatics");
t.addWord("fantastic");

t.getWords(); // ["fo", "fat", "fate", "fatal", "father", "fathers", "fanatics", "fantastic"]

t.getWords().length; // 8
```
