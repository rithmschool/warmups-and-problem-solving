Part I

Write a function called swapPair which accepts two arrays of integers. The function should return true if you only need one swap to give the two arrays the same sum.

If this can not be done with one swap, the function should return false. You can assume that each array passed to the function will have different values than the other.

```js
swapPair([4, 1, 2, 1, 1, 2], [3, 6, 3, 3]); // true
swapPair([7, 5, 6, 4], [8, 1, 3, 2]); // true
swapPair([4, 5, 6, 1], [10]); // false
swapPair([20, 30, 40], [1, 2, 3, 4]); // false
```

Solve this problem with the following constraints:

Time Complexity - Better than O(n^2)

Part II

Write a function called romanToInteger which accepts a roman numeral as a string and returns the integer value.

```js
romanToInteger("IV"); // 4
romanToInteger("VI"); // 6
romanToInteger("IX"); // 9
romanToInteger("LXVIII"); // 68
romanToInteger("DCL"); // 650
romanToInteger("MDCLXIV"); // 1664
romanToInteger("MCMXCVI"); // 1996
```

Here is a lookup for letters:

- I = 1
- V = 5
- X = 10
- L =50
- C=100
- D=500
- M=1000
