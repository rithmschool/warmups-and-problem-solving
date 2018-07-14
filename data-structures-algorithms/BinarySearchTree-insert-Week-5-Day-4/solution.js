function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.insertIteratively = function(value) {
  // only accept numbers....watch out since NaN is typeof number!
  if (typeof value === "number" && !isNaN(value)) {
    // if there is nothing in the tree, start it off with a new node!
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    } else {
      // current variable used for traversal, just like linked lists!
      var current = this.root;
      // keep looping till we get to the correct spot;
      while (true) {
        if (value < current.value) {
          // if there is nothing on the left
          if (current.left === null) {
            // make a new node and get out
            current.left = new Node(value);
            return this;
          }
          // otherwise, keep moving on!
          else {
            current = current.left;
          }
        } else if (value > current.value) {
          // if there is nothing on the right
          if (current.right === null) {
            // make a new node and get out
            current.right = new Node(value);
            return this;
          } else {
            current = current.right;
          }
        }
        // otherwise it must be a duplicate so let's get out of here
        else {
          return "duplicate!";
        }
      }
    }
  } else return "Please insert a number";
};

BinarySearchTree.prototype.insertRecursively = function(value, current) {
  // another way to filter out messy input
  if (!Number.isFinite(value)) {
    return "Please insert a number";
  }

  var startNode = current || this.root;

  if (startNode && value === startNode.value) {
    return "duplicate!";
  }
  if (startNode === null) {
    this.root = new Node(value);
    return this;
  } else {
    if (value < startNode.value) {
      if (startNode.left === null) {
        startNode.left = new Node(value);
        return this;
      } else {
        return this.insertRecursively(value, startNode.left);
      }
    } else if (value > startNode.value) {
      if (startNode.right === null) {
        startNode.right = new Node(value);
        return this;
      } else {
        return this.insertRecursively(value, startNode.right);
      }
    }
  }
};
