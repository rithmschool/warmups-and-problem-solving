// Categorize by Sorted String - Time (N * M log M) / Space (N * M)

// N - length of strings
// M - max length of a string in strings

function groupAnagrams(words) {
  if (words.length === 0) return [""];
  let wordsMap = new Map();
  words.forEach(function(word) {
    let currentKey = word
      .split("")
      .sort()
      .join("");
    if (wordsMap.has(currentKey)) {
      wordsMap.get(currentKey).push(word);
    } else {
      wordsMap.set(currentKey, [word]);
    }
  });

  return Array.from(wordsMap.values());
}

// https://leetcode.com/problems/group-anagrams/solution/
