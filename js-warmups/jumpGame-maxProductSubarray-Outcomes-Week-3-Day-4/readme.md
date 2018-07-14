Part I

Given an array of non-negative integers, you are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position. Write a function called jumpGame, which determines if you are able to reach the last index.

Example 1:

```js
jumpGame([2, 3, 1, 1, 4]); // true (Jump 1 step from index 0 to 1, then 3 steps to the last index.)
jumpGame([3, 2, 1, 0, 4]); // false (You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.)
jumpGame([1, 4, 1, 4]); // true
jumpGame([1, 1, 0, 0]); // false
jumpGame([]); // true
jumpGame([1]); // true
jumpGame([0, 2]); // false
```

Bonus:

Time Complexity - O(N)
Space Complexity - O(1)

Part II

Given an array of integers, write a function called maxProductSubarray, which finds the contiguous subarray within an array (containing at least one number) which has the largest product.

```js
maxProductSubarray([2,3,-2,4]) // 6 ([2,3] has the largest product 6)
maxProductSubarray([-2,0,-1] // 0 (The result cannot be 2, because [-2,-1] is not a contiguous subarray.)
maxProductSubarray([4,1,2,1,0,10]) // 10
maxProductSubarray([4,1,-2,2,1,4,-6]) // 384
```

Bonus:

Time Complexity - O(N)
Space Complexity - O(1)
