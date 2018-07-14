/**
 * This problem takes a sliding window approach, where
 *  the width of the window is set to "k". In a loop,
 *  it compares the difference between the current item in
 *  the array with the i - kth item of the array, thereby
 *  computing each possible window in the array, and taking
 *  the max.
 */

function maxSubarraySum(arr, k) {
  // there can be no valid sum if the array length is less than k
  if (arr.length < k) return null;

  let maxSum = 0;
  let currentSum = 0;

  // get sum of initial window 0...k
  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }

  // our current sum is the best we've seen
  maxSum = currentSum;

  // slide: add new element, remove oldest, keeping track of largest sum
  for (let i = k; i < arr.length; i++) {
    currentSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
