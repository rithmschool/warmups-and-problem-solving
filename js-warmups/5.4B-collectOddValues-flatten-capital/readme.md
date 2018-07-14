Write a recursive function called collectOddValues which accepts an array of numbers and returns a new array of only the odd values.

```js
collectOddValues([1, 2, 3, 4, 5, 6, 7]); // [1,3,5,7]
collectOddValues([-2, 1, -11, 3, 9, 16, 17]); // [-1,-11,3,9,17]
```

Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

```js
var words = ["i", "am", "learning", "recursion"];
capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
```

BONUS

Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

```js
flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
flatten([[1], [2], [3]]); // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3]
```
