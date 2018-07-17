Write a function called autoComplete which accepts a string and returns an array of all the words in the Trie that begin with that string. addWord is implement to help you test the function. (Hint - this will be MUCH easier if you use your findWord and getWords functions)

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

t.autocomplete("fa"); // ["fast","fat", "fate", "father"]
t.autoComplete("a"); // ["awesome", "argue"]
t.autoComplete("arz"); // []
```
