/**
 * The approach is to divide and conquer based on trying to find the
 *  location of the initial zero. Once we find the initial zero,
 *  we know that everything to the right of it is a zero, therefore
 *  we can simply subtract the length of the array from that index
 */
function countZeroes(arr) {
  let firstZero = findFirst(arr);
  if (firstZero === -1) {
    return 0;
  }
  // the length of the array minus the index of the first occurring zero
  return arr.length - firstZero;
}

/**
 * Recursively search the array for the first zero by halving
 * @param {Array} arr - input array
 * @param {Number} low - lower index bound
 * @param {Number} high - higher index bound
 */
function findFirst(arr, low = 0, high = arr.length - 1) {
  // continue searching until low exceeds high
  if (high >= low) {
    // the middle index is the average of high & low offset by the lower bound
    let mid = Math.floor((high + low) / 2);
    // the first zero is when the current index holds a zero and is either at the beginning
    //  of the array or has a one to the left of it
    if (arr[mid] === 0 && (mid === 0 || arr[mid - 1] === 1)) {
      return mid;
    } // if we're on a zero, and there is a zero to the left of us, search the left-hand side
    else if (arr[mid] === 0 && arr[mid - 1] === 0) {
      return findFirst(arr, low, mid - 1);
    } // if we're on a one, search the right-hand side for the first zero
    else if (arr[mid] === 1) {
      return findFirst(arr, mid + 1, high);
    }
  }
  // if we didn't find any zeroes, return negative 1
  return -1;
}
