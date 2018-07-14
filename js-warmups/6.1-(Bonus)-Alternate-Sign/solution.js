/**
 * Recurse by chopping up the array, and pushing the last
 *  element of each subarray to the result each time.
 *  If the array has even length, the last number must be negative.
 *  If the array has odd length, the last number must be positive.
 *  This holds for all the sub-arrays as well.
 */
function alternateSign(arr) {
  // the first number should be positive; also base case
  if (arr.length === 1) {
    return [Math.abs(arr[0])];
  }

  // recurse, slicing up the array 1 smaller each time
  let res = alternateSign(arr.slice(0, -1));
  // pointer to the last index in the array
  let lastIdx = arr.length - 1;

  if (arr.length % 2 === 0) {
    // if the current array is even, push the last element negative
    res.push(Math.abs(arr[lastIdx]) * -1);
  } else {
    // if the array is odd, push the last element positive
    res.push(Math.abs(arr[lastIdx]));
  }
  return res;
}
