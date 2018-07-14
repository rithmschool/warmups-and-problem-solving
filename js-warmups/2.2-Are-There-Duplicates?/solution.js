/**
 * Convert the arguments into a Set data structure,
 *  which keeps only unique values. Then check if converting
 *  it to a set made the size smaller. If so, there must be duplicates
 *  in the original arguments object.
 *
 *  Time complexity: O(n)
 *  Space complexity: O(n)
 */
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

/**
 * Sort the arguments array, then see if any element is
 *  equal to the previous element
 * O(nlgn) time complexity
 * O(1) space complexity
 */
function areThereDuplicatesBonus(...args) {
  /**
   * A comparator function that can sort
   *  strings or numbers
   */
  function compare(a, b) {
    if (typeof a === "string") {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      }
      return 0;
    } else {
      return a - b;
    }
  }

  args.sort(compare);

  for (let i = 1; i < args.length; i++) {
    if (args[i] === args[i - 1]) {
      return true;
    }
  }
  return false;
}
