function almostSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] < arr[i - 1]) {
      let j = i - 1;
      while (j >= 0 && arr[i] < arr[j]) {
        j--;
      }
      [arr[i], arr[j + 1]] = [arr[j + 1], arr[i]];
      break;
    }
  }
  return arr;
}

// O(n^2) time and O(n) space
function findTriplets(arr) {
  // add whatever parameters you deem necessary - good luck!
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let store = new Set();
    for (let j = i + 1; j < arr.length; j++) {
      let missing = -(arr[i] + arr[j]);
      if (store.has(missing)) {
        count++;
      } else {
        store.add(arr[j]);
      }
    }
  }
  return count;
}

// O(n^2) time and O(1) space
function findTriplets(arr) {
  let count = 0;
  arr.sort((a, b) => a - b);
  if (arr.length <= 3) {
    let sum = arr[0] + arr[1] + arr[2];
    return sum === 0 ? 1 : 0;
  }
  for (let i = 0; i < arr.length - 3; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      if (sum === 0) {
        count++;
        left++;
        right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }
  return count;
}
