Implement the following functions on the BinarySearchTree.prototype. insertIteratively has been implemented for you to help with testing.

DFSPreOrder

This function should search through each node in the binary search tree using pre-order depth first search and return an array containing each node's value.

```js
var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insertIteratively(15)
  .insertIteratively(20)
  .insertIteratively(10)
  .insertIteratively(12)
  .insertIteratively(1)
  .insertIteratively(5)
  .insertIteratively(50);
binarySearchTree.DFSPreOrder(); // [15, 10, 1, 5, 12, 20, 50]
```

DFSInOrder

This function should search through each node in the binary search tree using in-order depth first search and return an array containing each node's value.

```js
var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insertIteratively(15)
  .insertIteratively(20)
  .insertIteratively(10)
  .insertIteratively(12)
  .insertIteratively(1)
  .insertIteratively(5)
  .insertIteratively(50);
binarySearchTree.DFSInOrder(); // [1, 5, 10, 12, 15, 20, 50]
```

DFSPostOrder

This function should search through each node in the binary search tree using post-order depth first search and return an array containing each node's value.

```js
var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insertIteratively(15)
  .insertIteratively(20)
  .insertIteratively(10)
  .insertIteratively(12)
  .insertIteratively(1)
  .insertIteratively(5)
  .insertIteratively(50);
binarySearchTree.DFSPostOrder(); // [5, 1, 12, 10, 50, 20, 15]
```
