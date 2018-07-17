Implement the following function on the BinarySearchTree.prototype. insertIteratively is implemented to help with testing.

remove

This function should remove a node from a binary search tree. Your remove function should be able to handle removal of the root node, removal of a node with one child and removal of a node with two children. The function should return the node removed.

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
binarySearchTree.remove(50);
binarySearchTree.root.right.value; // 20
binarySearchTree.root.right.right; // null

binarySearchTree.remove(5);
binarySearchTree.root.left.left.value; // 1
binarySearchTree.root.left.left.right; // null

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insertIteratively(15)
  .insertIteratively(20)
  .insertIteratively(10)
  .insertIteratively(12)
  .insertIteratively(1)
  .insertIteratively(5)
  .insertIteratively(50);

binarySearchTree.remove(1);
binarySearchTree.root.left.left.value; // 5
binarySearchTree.root.left.left.left; // null
binarySearchTree.root.left.left.right; // null

binarySearchTree.remove(20);
binarySearchTree.root.right.value; // 50
binarySearchTree.root.right.right; // null
binarySearchTree.root.right.left; // null

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insertIteratively(15)
  .insertIteratively(20)
  .insertIteratively(10)
  .insertIteratively(12)
  .insertIteratively(1)
  .insertIteratively(5)
  .insertIteratively(50)
  .insertIteratively(60)
  .insertIteratively(30)
  .insertIteratively(25)
  .insertIteratively(23)
  .insertIteratively(24)
  .insertIteratively(70);

binarySearchTree.remove(10);
binarySearchTree.root.left.value; // 12
binarySearchTree.root.left.left.value; // 1
binarySearchTree.root.left.left.right.value; // 5

binarySearchTree.remove(50);
binarySearchTree.root.right.value; // 20
binarySearchTree.root.right.right.value; // 60
binarySearchTree.root.right.right.left.value; // 30

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insertIteratively(22)
  .insertIteratively(49)
  .insertIteratively(85)
  .insertIteratively(66)
  .insertIteratively(95)
  .insertIteratively(90)
  .insertIteratively(100)
  .insertIteratively(88)
  .insertIteratively(93)
  .insertIteratively(89);

binarySearchTree.remove(85);
binarySearchTree.root.right.right.value; // 88
binarySearchTree.root.right.right.right.left.left.value; // 89
```
