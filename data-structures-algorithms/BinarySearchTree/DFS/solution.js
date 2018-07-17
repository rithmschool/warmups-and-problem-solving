function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.DFSPreOrder = function() {
  var data = [];
  var current = this.root;
  function traverse(node) {
    data.push(node.value);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }
  traverse(current);
  return data;
};

BinarySearchTree.prototype.DFSInOrder = function() {
  var data = [];
  var current = this.root;
  function traverse(node) {
    if (node.left) traverse(node.left);
    data.push(node.value);
    if (node.right) traverse(node.right);
  }
  traverse(current);
  return data;
};

BinarySearchTree.prototype.DFSPostOrder = function() {
  var data = [];
  var current = this.root;
  function traverse(node) {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    data.push(node.value);
  }
  traverse(current);
  return data;
};
