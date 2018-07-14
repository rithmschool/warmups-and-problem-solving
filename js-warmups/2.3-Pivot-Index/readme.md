Write a function called pivotIndex which accepts an array of integers, and returns the pivot index where the sum of the items to the left equal to the sum of the items to the right. If there are more than one valid pivot index, return the smallest value.

Constraints:
Time Complexity: O(N)
Space Complexity: O(1)

Sample Input / Output:

```js
pivotIndex([1, 2, 1, 6, 3, 1]); // 3
pivotIndex([5, 2, 7]); // -1 no valid pivot index
pivotIndex([-1, 3, -3, 2]); // 1 valid pivot at 2: -1 + 3 = 2 however there is a smaller valid pivot at 1: -1 = -3 + 2
```
