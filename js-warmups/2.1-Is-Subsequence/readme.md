Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

```js
isSubsequence("hello", "hello world"); // true
isSubsequence("sing", "sting"); // true
isSubsequence("abc", "abracadabra"); // true
isSubsequence("notasubstring", "banana"); // false
isSubsequence("almost", "almossssss"); // false
isSubsequence("abc", "acb"); // false (order matters)
```

Your solution MUST have the following complexities:

Time Complexity - O(N + M)
Space Complexity - O(1)
