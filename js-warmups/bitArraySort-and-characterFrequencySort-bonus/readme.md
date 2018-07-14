Part I

Write a function called bitArraySort which accepts an array of integers containing only 0's and 1's returns the same array back in sorted order. You can assume that all inputs will be valid.

```js
bitArraySort([0, 0, 0]); // [0, 0, 0]
bitArraySort([1, 1, 1, 1]); // [1, 1, 1, 1]
bitArraySort([0, 1, 1, 0, 1, 1, 0]); // [0, 0, 0, 1, 1, 1, 1]
bitArraySort([1, 1, 1, 0, 1]); // [0, 1, 1, 1, 1]
bitArraySort([1, 0, 0, 0, 0]); // [0, 0, 0, 0, 1]
bitArraySort([1, 0, 1, 0, 0]); // [0, 0, 0, 1, 1]
```

This should be done in place as well so be mindful of the following constraints below:

Time Complexity - O(N)
Space Complexity - O(1)

Part II

Write a function called characterFrequencySort which accepts a string and sorts it in decreasing order based on the frequency of characters and returns a new string.

The most frequent character should appear first with its frequency, followed by the second most frequent character with its frequency, and so on. You can assume that all of the letters passed to the function will be lowercased and each letter will appear a different number of times.

```js
characterFrequencySort("ttttrreee"); // "tttteeerr"
characterFrequencySort("cacac"); // "cccaa"
characterFrequencySort("eeeeffalll"); // "eeeelllffa"
characterFrequencySort("abbcccdddd"); // "ddddcccbba"
characterFrequencySort("xyzxyyzzzxyyyyzzzzz"); // "zzzzzzzzzyyyyyyyxxx"
```

Time Complexity - O(n log n)

Bonus Time Complexity - O(n)
