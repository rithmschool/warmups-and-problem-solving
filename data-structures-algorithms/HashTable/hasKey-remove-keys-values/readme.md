Hash Tables, Part 2
In this challenge, you'll add additional methods onto your HashTable prototype.

For these examples, we'll be using the animals-to-genus_and_species map from the last challenge:

```js
var h = new HashTable();

h.set("cat", "Felis catus");
h.set("dog", "Canis familiaris");
h.set("porcupine", "Erethizon dorsatum");
```

Implement the following on the HashTable.prototype

has(key)

This function should return true if the key specified exists in the hash table. You will need to use your set and get method from the previous exercises for this to work!

```js
h.has("cat"); // true
h.has("dog"); // true
h.has("unicorn"); // false
```

delete(key)

This function should remove a value from the hash table.

```js
h.delete("cat"); // removes from map
h.has("cat"); // false

h.delete("unicorn"); // no error if wasn't in map
```

keys

This function should return an array of all of the keys in the hash table. Note that the order of the keys is not guaranteed—they could returned in any order!

```js
h.keys(); // ["cat", "dog", "porcupine"] (in any order)
```

values

This function should return an array of all of the values in the hash table. Note that the order of the values is not guaranteed—they could returned in any order!

h.values() // ['Felis catus', 'Canis familiaris',
// 'Erethizon dorsatum'] (in any order)
