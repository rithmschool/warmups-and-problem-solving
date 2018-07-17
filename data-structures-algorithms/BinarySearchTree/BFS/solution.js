function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.breadthFirstSearch = function() {
  var node = this.root,
    queue = [],
    data = [];
  queue.push(node);

  while (queue.length) {
    node = queue.shift();
    data.push(node.value);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return data;
};
