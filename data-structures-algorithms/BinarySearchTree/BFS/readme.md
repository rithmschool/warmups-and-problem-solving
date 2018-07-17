Implement the following function on the BinarySearchTree.prototype. insertIteratively is implemented to help with testing.

breadthFirstSearch

This function should search through each node in the binary search tree using breadth first search and return an array containing each node's value.

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
binarySearchTree.breadthFirstSearch(); // [(15, 10, 20, 1, 12, 50, 5)];
```
