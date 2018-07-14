Given a string containing just the characters '(', ')', '{', '}', '[' and ']', write a function called validParens to determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

```js
validParens(""); // true
validParens("()"); // true
validParens("()[]{}"); // true
validParens("(]"); // false
validParens("([)]"); // false
validParens("{[]}"); // true
```
