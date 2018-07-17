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

Trie.prototype.findWord = function(word, index = 0) {
  // This function will return the node in the trie
  // which corresponds to the end of the passed in word.

  // Be sure to consider what happens if the word is not in this Trie.

  var char = word[index];
  if (index < word.length - 1 && this.characters[char]) {
    index += 1;
    return this.characters[char].findWord(word, index);
  } else {
    return this.characters[char];
  }
};
