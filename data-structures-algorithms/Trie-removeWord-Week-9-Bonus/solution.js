function Trie() {
  this.characters = {};
  this.isWord = false;
}

Trie.prototype.addWord = function(word, index = 0) {
  if (index === word.length) {
    this.isWord = true;
  } else if (index < word.length) {
    var char = word[index];
    var subTrie = this.characters[char] || new Trie();
    subTrie.addWord(word, index + 1);
    this.characters[char] = subTrie;
  }
  return this;
};

Trie.prototype.getWords = function(words = [], currentWord = "") {
  if (this.isWord) {
    words.push(currentWord);
  }
  for (var char in this.characters) {
    var nextWord = currentWord + char;
    this.characters[char].getWords(words, nextWord);
  }
  return words;
};

Trie.prototype.findWord = function(word, index = 0) {
  var char = word[index];
  if (index < word.length - 1 && this.characters[char]) {
    index += 1;
    return this.characters[char].findWord(word, index);
  } else {
    return this.characters[char];
  }
};

Trie.prototype.removeWord = function(word) {
  let foundWord = this.findWord(word);
  if (foundWord === undefined) {
    return;
  }

  // if the word has additional characters, just remove the isWord property
  if (Object.keys(foundWord.characters).length > 0) {
    foundWord.isWord = false;
    return;
  }

  // otherwise we have to make our way to that word
  // and delete anytime there is only 1 characters property
  let currentTrie = this;
  let index = 0;
  var char = word[index];
  while (index < word.length - 1 && currentTrie) {
    var char = word[index];
    currentTrie = currentTrie.characters[char];
    var skip = currentTrie.characters[word[index + 1]].characters;
    if (Object.keys(skip).length === 1) {
      delete currentTrie.characters[word[index + 1]];
      break;
    }
    index++;
  }
};
