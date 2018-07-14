/**
 * Use two pointers i for arr1 and j for arr2.
 *  In the first while loop, push the smaller value
 *  from each array until we reach the end of one of them.
 *
 *  The final two while loops are to handle the case where
 *   the arrays are different length. Keep pushing from the
 *   longer array into the resulting array.
 */
function mergeSortedArrays(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  // first loop, push the smaller value of the two pointers
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // if arr1 was longer, push the rest of arr1
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  // if arr2 was longer, push the rest of arr2
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}
