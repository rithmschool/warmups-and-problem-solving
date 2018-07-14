function lowerSubArraySum(arr, sum) {
  let currentSum = arr[0];
  let maxSum = 0;
  let start = 0;
  for (let i = 1; i <= arr.length; i++) {
    // if currentSum becomes greater than sum, subtract starting elements of the array
    while (currentSum > sum && start < i) {
      currentSum -= arr[start];
      start++;
    }

    // update maxSum if it becomes greater than currentSum
    maxSum = Math.max(maxSum, currentSum);

    // add the element to the current Sum
    currentSum += arr[i];
  }

  return maxSum;
}

function findRotationCount(arr, low = 0, high = arr.length - 1) {
  if (high < low) return 0;
  if (high === low) return low;
  let mid = Math.floor((low + high) / 2);

  // Check if element (mid+1) is minimum element.
  // Consider the cases like [3, 4, 5, 1, 2]
  if (mid < high && arr[mid + 1] < arr[mid]) return mid + 1;

  // Check if mid itself is minimum element
  if (mid > low && arr[mid] < arr[mid - 1]) {
    return mid;
  }

  // Decide whether we need to go to left half or
  // right half
  if (arr[high] > arr[mid]) {
    return findRotationCount(arr, low, mid - 1);
  }

  return findRotationCount(arr, mid + 1, high);
}
