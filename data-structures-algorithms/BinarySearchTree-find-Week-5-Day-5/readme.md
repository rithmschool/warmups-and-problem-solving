Implement the following functions on the `BinarySearchTree.prototype`. insertIteratively has been implemented for you to help with testing.

findIteratively

This function should find a node in a binary tree. It should return the node if found, otherwise return `undefined`. This should be solved using iteration. The tests for this method assume that insertIteratively has been implemented correctly.

```js
var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insertIteratively(15)
  .insertIteratively(20)
  .insertIteratively(10)
  .insertIteratively(12);
var foundNode = binarySearchTree.findIteratively(20);
foundNode.value; // 20
foundNode.left; // null
foundNode.right; // null
var binarySearchTree = new BinarySearchTree();

binarySearchTree
  .insertIteratively(15)
  .insertIteratively(20)
  .insertIteratively(10)
  .insertIteratively(12);
var foundNode = binarySearchTree.findIteratively(120);
foundNode; // undefined
```

findRecursively

This function should find a node in a binary tree. It should return the node if found, otherwise return `undefined`. This should be solved using recursion. The tests for this method assume that insertIteratively has been implemented correctly.

```js
var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insertIteratively(15)
  .insertIteratively(20)
  .insertIteratively(10)
  .insertIteratively(12);
var foundNode = binarySearchTree.findRecursively(20);
foundNode.value; // 20
foundNode.left; // null
foundNode.right; // null

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insertIteratively(15)
  .insertIteratively(20)
  .insertIteratively(10)
  .insertIteratively(12);
var foundNode = binarySearchTree.findRecursively(120);
foundNode; // undefined
```
