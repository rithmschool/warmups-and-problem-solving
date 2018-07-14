Part I

Write a function called inArray. Given two arrays of strings a1 and a2, return a sorted array in alphabetical order of the strings of a1 which are substrings of strings of a2. Examples:

```js
const a1 = ["arp", "live", "strong", "sharper"];
const a2 = ["lively", "harp", "sharp", "armstrong", "ham"];
const a3 = ["hammer", "olive", "string"];
const a4 = ["sharper", "live", "strong", "arp"];

inArray(a1, a2); // ["arp", "live", "strong"]
inArray(a2, a1); // ["harp", "sharp"]
inArray(a1, a3); // ["live"]
inArray(a2, a3); // ["ham"]
inArray(a3, a2); // []
inArray(a4, a2); // ["arp", "live", "strong"]
```

Part II

A fixed point in an array arr is an index i such that arr[i] === i.

Given an array of unique sorted integers, write a function called findFixedPoint that returns a fixed point in the array, if a fixed point exists. Otherwise, it returns -1.

You can assume that the input array will have at most one fixed point.

```js
findFixedPoint([-3, 1, 5]); // 1
findFixedPoint([-10, -5, 0, 3, 7]); // 3
findFixedPoint([0, 2, 5, 8, 17]); // 0

findFixedPoint([-10, -5, 3, 4, 7, 9]); // -1
findFixedPoint([1, 2, 3, 4, 5, 6]); // -1
findFixedPoint([-3, 0, 3, 6, 10]); // -1
```

Time Complexity: O(log n), where n is the array length.
