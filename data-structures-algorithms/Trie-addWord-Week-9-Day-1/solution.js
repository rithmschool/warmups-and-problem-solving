function Trie() {
  this.characters = {};
  this.isWord = false;
}

Trie.prototype.addWord = function(word, index = 0) {
  if (index === word.length) {
    this.isWord = true;
    return;
  } else if (index < word.length) {
    var char = word[index];
    var subTrie = this.characters[char] || new Trie();
    subTrie.addWord(word, index + 1);
    this.characters[char] = subTrie;
  }
};

module.exports = Trie;
