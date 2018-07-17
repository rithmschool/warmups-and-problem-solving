/** HashTable: provide implementation of Map ADT: maps key=>value.
 *
 * Uses an internal `keyMap` array; each location in array is itself an
 * array of [key, val] pairs. There is a hash function, `_hash`, which
 * will hash a string key to an index in this `keyMap` array.
 *
 * Public API:
 *   - get(key) : retrieve val of `key` in map (return undefined if not there)
 *   - set(key, val): set/replace this `key` in map to `val`
 *   - has(key): is key present in map?
 *   - delete(key): remove key, if present
 *   - keys(): return array of keys [in no guaranteed order]
 *   - values(): return array of values [in no guaranteed order]
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

/** _retrieveKeyVal: helper function to find key+val for given key
 *
 * returns [key, val] or undefined if key not in map
 */

HashTable.prototype._retrieveKeyVal = function(key) {
  // find the bin where this key would be stored in our array
  let index = this._hash(key);

  // get this index in our array; this will be an *array* of keyVals;

  let keyValPairs = this.keyMap[index];

  if (!keyValPairs) return false;

  // search [key, val] pairs of keyValPairs, looking for matching key
  // note: a shorter way to do this is the awesome JS .find method of arrays
  //   return keyValPairs.find(kv => kv[0] === key);

  for (keyVal of keyValPairs) {
    if (keyVal[0] === key) {
      return keyVal;
    }
  }

  return undefined;
};

/** set: store a key/value pair in the hashmap.
 *
 * This should always succeed (assuming key is string!); returns `null`.
 */

HashTable.prototype.set = function(key, val) {
  let index = this._hash(key);

  if (!this.keyMap[index]) {
    this.keyMap[index] = [];
  }
  this.keyMap[index].push([key, val]);
};

/** get: retrieve a value given a key
 *
 * Returns value or undefined if key not present in map
 */

HashTable.prototype.get = function(key) {
  // keyVal will the array of [key, val] from array or undefined if not in map
  let keyVal = this._retrieveKeyVal(key);

  if (keyVal) {
    // return just the value
    return keyVal[1];
  } else {
    return undefined;
  }
};

/** has: is key present in map? */

HashTable.prototype.has = function(key) {
  return this._retrieveKeyVal(key) ? true : false;
};

/** delete: deletes key if present. */

HashTable.prototype.delete = function(key) {
  // find the bin where this key would be stored in our array
  let index = this._hash(key);

  // get this index in our array; this will be an *array* of keyVals;
  let keyValPairs = this.keyMap[index];

  if (!keyValPairs) return false;

  // search [key, val] pairs of keyValPairs, looking for matching key
  // when we find matching key, splice the lsit of keyValPairs to remove
  // that item

  for (let i = 0; i < keyValPairs.length; i++) {
    if (keyValPairs[i][0] === key) {
      keyValPairs.splice(i, 1);
    }
  }
};

/** keys: returns array of keys in map. */

HashTable.prototype.keys = function() {
  var keys = [];

  for (let keyValPairs of this.keyMap) {
    // If this spot in the table is empty, skip to next spot
    if (!keyValPairs) continue;

    for (let [key, val] of keyValPairs) {
      keys.push(key);
    }
  }

  return keys;
};

/** values: returns array of values in map. */

HashTable.prototype.values = function() {
  var values = [];

  for (let keyValPairs of this.keyMap) {
    // If this spot in the table is empty, skip to next spot
    if (!keyValPairs) continue;

    for (let [key, val] of keyValPairs) {
      values.push(val);
    }
  }

  return values;
};
