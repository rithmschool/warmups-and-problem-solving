Selection Sort

Here's some guidance for how selection sort should work:

Assign the first element to be the smallest value (this is called the minimum). It does not matter right now if this actually the smallest value in the array.
Compare this item to the next item in the array until you find a smaller number.
If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
If the "minimum" is not the value (index) you initially began with, swap the two values. You will now see that the beginning of the array is in the correct order (similar to how after the first iteration of bubble sort, we know the rightmost element is in its correct place).
Repeat this with the next element until the array is sorted.

This algorithm has a O(n^2) time complexity. You can read more about them here: https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/basic-sorting-algorithms

Examples

```js
selectionSort([]); // []
selectionSort([-11]); // [-11]
selectionSort([5, 4, 3, 2, 1]); // [1,2,3,4,5]
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
selectionSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

var arr1 = ["Tim", "Matt", "Elie", "Kira", "Moxie", "Angelina"];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

selectionSort(arr1, strComp); // ["Angelina", "Elie", "Kira", "Matt", "Moxie", "Tim"]

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

selectionSort(arr2, comp2); // sorted by id in descending order
```
