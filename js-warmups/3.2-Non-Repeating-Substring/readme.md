Write a function called nonRepeatSubstring which accepts a string and returns the longest substring where the characters in the substring do not repeat.

Non-repeating characters means there are no two consecutive letters that are the same.

You can assume the input string only has lowercase letters.

Constraints:
Time Complexity: O(N)
Space Complexity: O(N)

Examples

```js
nonRepeatSubstring("abb"); // 'ab'

nonRepeatSubstring("abccde"); // 'abc'
// 'abc' and 'cde' are equally as long, however 'abc' is leftmost

nonRepeatSubstring("aaaabbbb"); // 'ab'
// 'ab' is the longest substring without repeating characters
```
