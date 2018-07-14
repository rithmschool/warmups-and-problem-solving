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
