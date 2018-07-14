Part 1

Write a function called stairs which accepts n number of stairs. Imagine that a person is standing at the bottom of the stairs and wants to reach the top and the person can climb either 1 stair or 2 stairs at a time. Your function should return the number of ways the person can reach the top by only climbing 1 or 2 stairs at a time.

Examples:

```js
stairs(1); // 1
stairs(2); // 2 (1,1 or 2)
stairs(3); // 3 (1,1,1 or 1,2 or 2,1)
stairs(5); // 8
stairs(10); // 89
stairs(12); // 233
stairs(44); // 1134903170
stairs(332); // 1.751455877444437e+69
```

Part 2

Write a function called minimumStepsToOne which takes a positive whole number n and returns the number of steps it takes to get from n to 1. A step is allowed to be one of the following three operations:

1.  subtracting one from the number,
2.  dividing the number by 2,
3.  dividing the number by 3.

Examples:

```js
minimumStepsToOne(1); // 0
minimumStepsToOne(4); // 2 (4 -> 2 -> 1)
minimumStepsToOne(7); // 3 (7 -> 6 -> 2 -> 1)
minimumStepsToOne(10); // 3 (10 -> 9 -> 3 -> 1)
minimumStepsToOne(25); // 5
minimumStepsToOne(101); // 8
minimumStepsToOne(747); // 8
minimumStepsToOne(3338); // 13
minimumStepsToOne(5003); // 15
```

BONUS FOR EACH

Time Complexity - O(n)
Space Complexity - O(n)
