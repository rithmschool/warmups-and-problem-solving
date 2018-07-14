Write a recursive function called augmentElements, which takes an array of arrays and a value. The function should return a new array of arrays with the value appended to each subarray.

The function should not mutate the original input! (Pure Function)

```js
var arr1 = [[1, 2], [3, 4, 5]];
var arr2 = [[], [3], [7]];

augmentElements(arr1, 6); // [[1, 2, 6], [3, 4, 5, 6]]
augmentElements(arr2, 5); // [[5], [3, 5], [7, 5]]

arr1; // [[1, 2], [3, 4, 5]]
arr2; // [[],[3],[7]]
```
