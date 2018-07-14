function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.findRecursively = function(value, current) {
  var node = current || this.root;

  if (value < node.value) {
    if (node.left === null) return;
    return this.findRecursively(value, node.left);
  } else if (value > node.value) {
    if (node.right === null) return;
    return this.findRecursively(value, node.right);
  }
  return node;
};

BinarySearchTree.prototype.findIteratively = function(value) {
  var start = this.root,
    found = false;

  if (value === start.value) {
    return start;
  }

  while (start && !found) {
    if (value < start.value) {
      start = start.left;
    } else if (value > start.value) {
      start = start.right;
    } else {
      found = true;
    }
  }
  if (!found) return undefined;
  return start;
};
