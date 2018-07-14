/**
 * With O(N) space, it's trivial. Just make a set and take the size of the set
 */
function countUniqueValuesSet(arr) {
  return new Set(arr).size;
}

/**
 * For constant space, we need a two-pointers algorithm.
 *  The left pointer, lastUnique, keeps track of the most
 *    recent unique value
 *  we've seen, which works since it's a sorted array.
 *  The right pointer, i, looks for new unique values.
 *  The result is how many times we've moved up latestUnique,
 *    then + 1 because we started counting from zero.
 */

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let latestUnique = 0;
  let numUniq = 0;

  for (let a of arr) {
    // every time arr[j] is a new number
    if (a !== arr[latestUnique]) {
      // move up i
      latestUnique++;
      // store the latestUnique
      arr[latestUnique] = a;
    }
  }
  // the index of latestUnique is how many times we've moved it up
  //   i.e. how many uniques we've found
  return latestUnique + 1;
}
