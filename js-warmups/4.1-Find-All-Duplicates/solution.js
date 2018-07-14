/**
 * If the number hasn't been seen before, add it to the set.
 *  If the number is in the set, add it to the result.
 */
function findAllDuplicates(nums) {
  let result = [];
  let seen = new Set();

  for (let n of nums) {
    if (seen.has(n)) result.push(n);
    else seen.add(n);
  }
  return result;
}
