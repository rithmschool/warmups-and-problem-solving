Hash Table
In this exercise, we've given you part of an implementation for a hash table.

We've provided a constructor function that creates the internal array for your hash table.

We've also provided a simple but effective hash function, \_hash(key), which accepts a string key and returns a hashed value from [0...tablesize]. You should use this in your methods to turn string keys into table locations.

Implement the following on the `HashTable.prototype`

set

This function should set a value in the hashTable based on a specified key. It should be able to handle collisions so if you set with the same key it should still be able to retrieve the correct value. It should always succeed (assuming a string key is provided), and should return null.

get

This function return a value in the hashTable based on a specified key. It should be able to handle collisions so if you get two different items with the same hashed key it should still be able to retrieve the correct value. It should return the value or, if that key cannot be found in the map, it should return undefined.

For example, here is a session of using the HashTable to store a mapping of common animals to genus/species:

```js
var h = new HashTable();

h.set("cat", "Felis catus");
h.set("dog", "Canis familiaris");
h.set("porcupine", "Erethizon dorsatum");

h.get("cat"); // 'Felis catus'
h.get("dog"); // 'Canis familiaris'
h.get("porcupine"); // 'Erethizon dorsatum'
h.get("unicorn"); // undefined [we never put in mapping!]
```
