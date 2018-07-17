Merge Sort

Implement the merge sort algorithm. Given an array, this algorithm will sort the values in the array. The functions take 2 parameters: an array and an optional comparator function.

The comparator function is a callback that will take two values from the array to be compared. The function returns a negative value if the first value is less than the second, a positive value if the first value is greater than the second, and 0 if both values are equal.

The default comparator you provide should assume that the two parameters are numbers and that we are sorting the values from smallest to largest.

Here's some guidance for how merge sort should work:  
Break up the array into halves until you can compare one value with another
Once you have smaller sorted arrays, merge those arrays with other sorted pairs until you are back at the full length of the array
Once the array has been merged back together, return the merged (and sorted!) array

In order to implement this function, you'll also need to implement a merge function that takes in two sorted arrays and a comparator and returns a new sorted array. You implemented this function last week, just without the comparator; try to adapt the code you wrote then to allow for a general comparator function.

You can read more merge sort here: https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/intermediate-sorting-algorithms
Description
Write a function called mergeSortedArrays which accepts two sorted arrays and returns a new array with the combined values from each array, also sorted.

This function should run in O(n + m) time and O(n + m) space and should not modify the arrays passed to it. It should also not use the built-in sort method!

Examples

```js
var arr1 = [1, 3, 4, 5];
var arr2 = [2, 4, 6, 8];

mergeSortedArrays(arr1, arr2); // [1,2,3,4,4,5,6,8]

arr1; // still [1,3,4,5];
arr2; // still [2,4,6,8];

var arr3 = [-2, -1, 0, 4, 5, 6];
var arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];

mergeSortedArrays(arr3, arr4); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

arr3; // still [-2,-1,0,4,5,6];
arr4; // still [-3,-2,-1,2,3,5,7,8];

var arr5 = [3, 4, 5];
var arr6 = [1, 2];

mergeSortedArrays(arr5, arr6); // [1,2,3,4,5]
```

Constraints
Time: O(n + m)
Space O(n + m)
