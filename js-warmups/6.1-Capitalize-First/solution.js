/**
 * Helper function to capitalize strings
 */
function capitalizeString(str) {
  return str[0].toUpperCase() + str.slice(1);
}

/**
 * Capitalize the string at each array index, then
 *  feed new slices of the array 1 element at a time
 *  to the function recursively
 */
function capitalizeFirst(arr, result = []) {
  if (arr.length === 0) {
    return result;
  }

  result.push(capitalizeString(arr[0]));
  capitalizeFirst(arr.slice(1), result);

  return result;
}
