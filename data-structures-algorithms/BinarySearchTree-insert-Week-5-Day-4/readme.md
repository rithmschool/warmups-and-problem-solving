Implement the following functions on the BinarySearchTree.prototype

insertIteratively

This function should insert a node in a binary tree. It should return the BinarySearchTree and should be solved using iteration.

```js
var binarySearchTree = new BinarySearchTree();
binarySearchTree.insertIteratively(15);
binarySearchTree.insertIteratively(20);
binarySearchTree.insertIteratively(10);
binarySearchTree.insertIteratively(12);
binarySearchTree.root.value; // 15
binarySearchTree.root.right.value; // 20
binarySearchTree.root.left.right.value; // 12

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insertIteratively(15)
  .insertIteratively(20)
  .insertIteratively(10)
  .insertIteratively(12);
binarySearchTree.root.value; // 15
binarySearchTree.root.right.value; // 20
binarySearchTree.root.left.right.value; // 12
```

insertRecursively

This function should insert a node in a binary tree. It should return the BinarySearchTree and and should be solved using recursion.

```js
var binarySearchTree = new BinarySearchTree();
binarySearchTree.insertRecursively(15);
binarySearchTree.root.value; // 15
binarySearchTree.root.left; // null
binarySearchTree.root.right; // null

var binarySearchTree = new BinarySearchTree();

binarySearchTree.insertRecursively(15);
binarySearchTree.insertRecursively(20);
binarySearchTree.insertRecursively(10);
binarySearchTree.insertRecursively(12);
binarySearchTree.root.value; // 15
binarySearchTree.root.right.value; // 20
binarySearchTree.root.left.right.value; // 12

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insertRecursively(15)
  .insertRecursively(20)
  .insertRecursively(10)
  .insertRecursively(12);
binarySearchTree.root.value; // 15
binarySearchTree.root.right.value; // 20
binarySearchTree.root.left.right.value; // 12
```
