Given an array of strings, write a function called groupAnagrams which returns an array of arrays grouping anagrams together.

```js
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);

/*
[
  ["eat","tea","ate"],
  ["tan","nat"],
  ["bat"]
]
*/

groupAnagrams([
  "tacocat",
  "octocat",
  "bar",
  "blizzard",
  "rab",
  "bat",
  "ball",
  "catacot"
]);
/*
[ 
  [ 'tacocat', 'catacot' ],
  [ 'octocat' ],
  [ 'bar', 'rab' ],
  [ 'blizzard' ],
  [ 'bat' ],
  [ 'ball' ] 
]
*/

groupAnagrams([
  "tacocat",
  "octocat",
  "bar",
  "blizzard",
  "rab",
  "bat",
  "ball",
  "catacot",
  "brazzild"
]);

/*
[ 
  [ 'tacocat', 'catacot' ],
  [ 'octocat' ],
  [ 'bar', 'rab' ],
  [ 'blizzard', 'brazzild' ],
  [ 'bat' ],
  [ 'ball' ] 
]
*/

groupAnagrams(["a", "b", "c", "dd", "de", "ed"]); // [ [ 'a' ], [ 'b' ], [ 'c' ], [ 'dd' ], [ 'de', 'ed' ] ]

groupAnagrams([]); // [‘’]
```
