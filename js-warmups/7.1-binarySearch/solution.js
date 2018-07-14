function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  // currentIndex is half
  let middle = Math.floor((start + end) / 2);
  // while middle is not the element and start < end
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] !== elem ? -1 : middle;
}

function binarySearchRecursive(array, val, left = 0, right = array.length) {
  console.log("LEFT!", left, "RIGHT!", right);
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (array[middle] === val) {
    return middle;
  } else if (array[middle] > val) {
    right = middle - 1;
  } else {
    left = middle + 1;
  }
  return binarySearchRecursive(array, val, left, right);
}

binarySearchRecursive([1, 3, 4, 6, 8, 10, 12, 15, 19, 20, 21, 24, 30, 50], 30); // 0
