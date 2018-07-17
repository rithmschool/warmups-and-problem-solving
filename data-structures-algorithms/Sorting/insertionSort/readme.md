Implement insertionSort. Given an array, both algorithms will sort the values in the array. The functions take 2 parameters: an array and an optional comparator function. The comparator function is a callback that will take two values from the array to be compared. The function returns a negative value if the first value is less than the second, a positive value if the first value is greater than the second, and 0 if both values are equal. The default comparator you provide should assume that the two parameters are numbers and that we are sorting the values from smallest to largest.

Insertion Sort

Here's some guidance for how insertion sort should work:

Start by picking the second element in the array (we will assume the first element is the start of the "sorted" portion)
Now compare the second element with the one before it and swap if necessary.
Continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place.
Repeat until the array is sorted.Implement insertion sort. Your function should accept an array and return an array of sorted values.

Examples

```js
insertionSort([]); // []
insertionSort([-11]); // [-11]
insertionSort([5, 4, 3, 2, 1]); // [1,2,3,4,5]
var nums = [
  4,
  3,
  5,
  3,
  43,
  232,
  4,
  34,
  232,
  32,
  4,
  35,
  34,
  23,
  2,
  453,
  546,
  75,
  67,
  4342,
  32
];
insertionSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

var arr1 = ["Tim", "Matt", "Elie", "Kira", "Moxie", "Angelina"];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

insertionSort(arr1, strComp); // ["Angelina", "Elie", "Kira", "Matt", "Moxie", "Tim"]

var arr2 = [
  {
    id: 34,
    name: "Moxie",
    job: "sleeping"
  },
  {
    id: 23,
    name: "Tim",
    job: "teaching"
  },
  {
    id: 24,
    name: "Kira",
    job: "growth"
  },
  {
    id: 33,
    name: "Whiskey",
    job: "eating"
  }
];

function comp2(a, b) {
  if (a.id < b.id) {
    return 1;
  } else if (a.id > b.id) {
    return -1;
  }
  return 0;
}

insertionSort(arr2, comp2); // sorted by id in descending order
```
