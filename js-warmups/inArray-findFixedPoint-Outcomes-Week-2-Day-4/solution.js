/**
 * Shorthand way to solve it using function chaining
 */
function inArrayDeclarative(array1, array2) {
  return array1.filter(a1 => array2.find(a2 => a2.match(a1))).sort();
}

function inArray(a1, a2) {
  const result = [];
  const a2String = a2.toString();

  a1.forEach(str => {
    if (a2String.includes(str) && !result.includes(str)) {
      result.push(str);
    }
  });

  return result.sort();
}

function findFixedPoint(arr, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = Math.floor((low + high) / 2);
    if (mid === arr[mid]) {
      return mid;
    }
    if (mid > arr[mid]) {
      return findFixedPoint(arr, mid + 1, high);
    } else {
      return findFixedPoint(arr, low, mid - 1);
    }
  }
  return -1;
}
