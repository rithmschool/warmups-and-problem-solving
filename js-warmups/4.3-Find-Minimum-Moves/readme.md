Description
Given a non-empty integer array, find the minimum number of moves required to make all array elements equal, where a move is incrementing a selected element by 1 or decrementing a selected element by 1.

Examples

```js
findMinMoves([1, 2, 3]); // 2 because 1 -> 2 is one move and 3 -> 2 is another move

findMinMoves([7, 1]); // 6

findMinMoves([3, 3, 1]); // 2 because you need to add 2 to 3

findMinMoves([11, 2, 5]); // 9

findMinMoves([-2, 11, 5]); // 13

findMinMoves([5, 2, 1, 7, -2, 4, 10]); // 21
```

Constraints
Time Complexity - O(n log n)

Space Complexity - O(1)
