Part I

Write a function called almostSort which accepts an array of numbers that are sorted except for a single pair and returns a sorted array.

```js
almostSort([1, 2, 3, 7, 5, 6, 4]); // [1,2,3,4,5,6,7]
almostSort([1, 2, 6, 4, 5, 3]); // [1,2,3,4,5,6]
almostSort([-1, 1, 0, 2]); // [-1,0,1,2]
almostSort([2, 1]); // [1,2]
almostSort([]); // []
```

Time Complexity - O(n)
Space Complexity - O(1)

Part II

Given an array of distinct elements, write a function called findTriplets, which returns the number of triplets in array whose sum is zero.

```js
findTriplets([-1, 0, 1]); // 1
findTriplets([5, -2, 3, -1]); // 1
findTriplets([0, -1, 2, -3, 1]); // 2 (0,-1,1 and -3,2,1)
findTriplets([1, -2, 0, 5]); // 0
findTriplets([0, 4, 2, 7, 5, 3, -3, -2, -8, -12]); // 5
```

Time Complexity - O(n^2)
