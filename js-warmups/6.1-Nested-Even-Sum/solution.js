/**
 * Use a for...in loop to iterate over the keys in the object
 *  every time you encounter a nested object, recurse.
 *  But if the key is a number and is even, add it to the sum
 */
function nestedEvenSum(obj, sum = 0) {
  for (let key in obj) {
    // remember there is a bug in JavaScript where typeof null === 'object'
    if (typeof obj[key] === "object" && obj[key] !== null) {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}
