/**
 * Create a set that holds the sum of every number + the absolute value of the target
 *  number. If we find the complement at i, then it follows that Math.abs(i - icomplement) === num.
 *  https://www.mathsisfun.com/numbers/subtraction-by-addition.html
 *  O(n) space + O(n) time
 */
function findPair(arr, num) {
  const diffs = new Set();
  for (let i of arr) {
    diffs.add(Math.abs(num) + i);
  }

  for (let i of arr) {
    diffs.remove(i);
    if (diffs.has(i)) {
      return true;
    }
  }
  return false;
}

// O(1) space + O(n log n) time

/**
 * Sort the array, then it becomes a two-pointer problem.
 *
 *  Start i at index 0 and j at index 1.
 *
 *  If at any point the absolute value of arr[j] - arr[i]
 *  is equal to the absolute value of the num, then we're good.
 *
 *  Otherwise if the difference is too small, increment the bigger number.
 *  If the difference is too great, increment the smaller number.
 */
function findPair(arr, num) {
  arr.sort((a, b) => a - b);

  let i = 0; // left side of the window
  let j = 1; // right side of the window

  while (i < arr.length && j < arr.length) {
    if (i !== j && Math.abs(arr[j] - arr[i]) === Math.abs(num)) {
      return true;
    } else if (arr[j] - arr[i] < num) {
      // when the difference is too small, we need a larger j
      j++;
    } else if (arr[j] - arr[i] > num) {
      /*
             when the difference is too big, we need a larger i
              so that when we subtract arr[j] - arr[i], the difference shrinks
             */
      i++;
    }
  }
  return false;
}
