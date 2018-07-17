function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.__countChildren = function(node) {
  var count = 0;
  if (node.left !== null) count++;
  if (node.right !== null) count++;
  return count;
};

BinarySearchTree.prototype.remove = function(value) {
  var isFound = false,
    current = this.root,
    child,
    parent,
    tempNode;

  while (current && !isFound) {
    if (value < current.value) {
      parent = current;
      current = current.left;
    } else if (value > current.value) {
      parent = current;
      current = current.right;
    } else {
      isFound = true;
    }
  }

  if (!isFound) return;

  var childCount = this.__countChildren(current);
  if (childCount === 0) {
    if (parent && current.value > parent.value) {
      parent.right = null;
    } else if (parent && current.value < parent.value) {
      parent.left = null;
    } else {
      this.root = null;
    }
  } else if (childCount === 1) {
    child = current.right || current.left;

    if (parent && current.value > parent.value) {
      parent.right = child;
    } else if (parent && current.value < parent.value) {
      parent.left = child;
    } else {
      this.root = child;
    }
  } else {
    tempNode = current.right;

    while (tempNode.left !== null) {
      tempNode = tempNode.left;
    }

    tempNode.left = current.left;

    if (parent && current.value > parent.value) {
      parent.right = current.right;
    } else if (parent && current.value < parent.value) {
      parent.left = current.right;
    } else {
      this.root = current.right;
    }
  }
};
