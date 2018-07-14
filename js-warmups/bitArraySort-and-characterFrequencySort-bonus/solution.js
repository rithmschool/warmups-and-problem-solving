function bitArraySort(arr) {
  let countZeros = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      countZeros++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (countZeros) {
      arr[i] = 0;
      countZeros--;
    } else {
      arr[i] = 1;
    }
  }
  return arr;
}

function characterFrequencySort(str) {
  var cache = {};
  for (let i = 0; i < str.length; i++) {
    cache[str[i]] = (cache[str[i]] || 0) + 1;
  }
  return Object.keys(cache)
    .map(v => v.repeat(cache[v]))
    .sort((a, b) => a.length < b.length)
    .join("");
}

function characterFrequencySort(s) {
  let characters = new Set();
  let freqMap = {};
  let charStore = {};
  let letters = [];

  for (let i = 0; i < s.length; i++) {
    characters.add(s[i]);
    freqMap[s[i]] = (freqMap[s[i]] || 0) + 1;
  }

  for (let char of characters) {
    if (!charStore[freqMap[char]]) charStore[freqMap[char]] = [];
    charStore[freqMap[char]].push(new Array(freqMap[char] + 1).join(char));
  }

  for (let i = s.length; i > 0; i--) {
    if (charStore[i]) {
      letters = letters.concat(charStore[i]);
    }
  }

  return letters.join("");
}
