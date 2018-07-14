Part I

Write a function called lowerSubArraySum which accepts an array of integers and a number. This function should return the sum of a contiguous subarray having a maximum sum less than or equal to the number passed to the function

```js
lowerSubArraySum([1, 2, 3, 4, 5], 11); // 10
lowerSubArraySum([2, 4, 6, 8, 10], 7); // 6
lowerSubArraySum([5, 3, 2, 6, 7], 12); // 11
lowerSubArraySum([6, 3, 2, 5, 7], 15); // 14
```

Part II

Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order.

The array has been rotated n number of times. Given such an array, find the value of n.

```js
findRotationCount([15, 18, 2, 3, 6, 12]); // 2
findRotationCount([7, 9, 11, 12, 5]); // 4
findRotationCount([7, 9, 11, 12, 15]); // 0
```

Time Complexity - O(log n)
