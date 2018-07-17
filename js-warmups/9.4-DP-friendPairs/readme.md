Write a function called friendPairs.

Given n friends, find out the total number of ways in which friends can remain single or can be paired up.

Each friend can be paired only once in each combination.

```js
friendPairs(3) // 4

/_
first way -> [1], [2], [3] -> all single
second way -> [1], [2,3] -> 2 and 3 paired but 1 is single.
third way -> [1,2], [3] -> 1 and 2 are paired but 3 is single.
fourth way -> [1,3], [2] -> 1 and 3 are paired but 2 is single.
_/

// Note that [1,2] and [2,1] are considered same.

friendPairs(2) // 2
friendPairs(4) // 10
friendPairs(5) // 26
friendPairs(6) // 76
friendPairs(10) // 9496
friendPairs(20) // 23758664096
```

Time Complexity - O(n)
Space Complexity - O(n)
