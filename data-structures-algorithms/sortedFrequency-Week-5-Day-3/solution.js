// Given a sorted array of numbers, find frequency of num in list.
//
// Uses two binary searches for O(log n) runtime,
// (where n=length-of-array)

const NOT_FOUND = -1;

function sortedFrequency(arr, num) {
  // find last index and first index and distance between them

  const firstIdx = findFirst(arr, num);
  if (firstIdx == NOT_FOUND) return NOT_FOUND;

  const lastIdx = findLast(arr, num);
  return lastIdx - firstIdx + 1;
}

function findFirst(arr, num, low = 0, high = arr.length - 1) {
  // find first index of num in arr; return NOT_FOUND if missing

  // use binary search to find num in arr

  if (high >= low) {
    let mid = Math.floor((low + high) / 2);

    if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) return mid;
    else if (num > arr[mid]) return findFirst(arr, num, mid + 1, high);
    else return findFirst(arr, num, low, mid - 1);
  }

  return NOT_FOUND;
}

function findLast(arr, num, low = 0, high = arr.length - 1) {
  // find last index of num in arr; return NOT_FOUND if missing

  // use binary search to find num in arr

  if (high >= low) {
    let mid = Math.floor((low + high) / 2);

    if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num)
      return mid;
    else if (num < arr[mid]) return findLast(arr, num, low, mid - 1);
    else return findLast(arr, num, mid + 1, high);
  }

  return NOT_FOUND;
}
