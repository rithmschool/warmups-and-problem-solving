binarySearch

This function should accept an array and value and return the index at which the value exists or -1 if the value can not be found. Do not use indexOf to solve this! This function should use iteration not recursion. Make sure that your algorithm runs in O(log(n)) and not O(n).

Examples

```js
binarySearch([1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50], 1); // 0
binarySearch([1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50], 3); // 1
binarySearch([1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50], 12); // 6
binarySearch([1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50], 24); // 11
binarySearch([1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50], 50); // 13

binarySearch([1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50], 0); // -1
binarySearch([1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50], 7); // -1
binarySearch([1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50], 40); // -1
binarySearch([1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50], 100); // -1
```

binarySearchRecursive

This function should accept an array and value and return the index at which the value exists or -1 if the value can not be found. Do not use indexOf to solve this! This function should use recursion. Make sure that your algorithm runs in O(log(n)) and not O(n).

Examples

```js
binarySearchRecursive([1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50], 1); // 0
binarySearchRecursive([1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50], 3); // 1
binarySearchRecursive([1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50], 12); // 6
binarySearchRecursive([1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50], 24); // 11
binarySearchRecursive([1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50], 50); // 13

binarySearchRecursive([1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50], 0); // -1
binarySearchRecursive([1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50], 7); // -1
binarySearchRecursive([1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50], 40); // -1
binarySearchRecursive([1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50], 100); // -1
```
