Given an array of numbers (which can also contain nested arrays of numbers), return true if a given value can be found.

Use recursion for this.

```js
find([1, 2, 3], 2); // true
find([1, 2, 3], 4); // false
find([1, [2, 3]], 2); // true
find([1, [2, 3]], 4); // false
find([[[[[3]]]]]); // true
```
