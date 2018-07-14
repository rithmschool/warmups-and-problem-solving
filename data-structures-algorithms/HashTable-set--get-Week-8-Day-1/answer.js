/** HashTable: provide implementation of Map ADT: maps key=>value.
 *
 * Uses an internal `keyMap` array; each location in array is itself an
 * array of [key, val] pairs. There is a hash function, `_hash`, which
 * will hash a string key to an index in this `keyMap` array.
 *
 * Public API:
 *   - get(key) : retrieve val of `key` in map (return undefined if not there)
 *   - set(key, val): set/replace this `key` in map to `val`
 *
 * When creating an instance of this, you can supply as `size`, this sets
 * the size of an array. For maximum efficiency of storage/performance,
 * this should be a prime number about 2-3x larger than the number of items
 * you will store in the map.
 *
 */

function HashTable(size = 53) {
  this.keyMap = new Array(size);
}

/** _hash: hash a string value to a number from 0..keyMap.length */

HashTable.prototype._hash = function(key) {
  // NOTE: this is a reasonable example of a hash function, but, for
  // simplicity's sake, it only handles string input. A real hashmap
  // might need to store other kinds of keys (integers, null, undefined, etc),
  // and so this would need to have ways to handle those.

  // Prime number to use with Horner's method
  const H_PRIME = 31;

  if (typeof key !== "string") throw new Error("Can only use strings keys!");

  // Create a numeric representation of our string:
  // We'll use the sum of the charCodes of first 5 chars of our key,
  // using "Horner's Method" to accumulate with a prime constant
  let numKey = Array.from(key.slice(0, 5)).reduce(
    (accum, char) => accum * H_PRIME + char.charCodeAt(),
    0
  );

  // Turn this into a numeric value from 0..keyMap.length.
  return numKey % this.keyMap.length;
};

/** set: store a key/value pair in the hashmap.
 *
 * This should always succeed (assuming key is string!); returns `null`.
 */

HashTable.prototype.set = function(key, val) {
  // TODO: your code here!
};

/** get: retrieve a value given a key
 *
 * Returns value or undefined if key not present in map
 */

HashTable.prototype.get = function(key) {
  // TODO: your code here!
};
