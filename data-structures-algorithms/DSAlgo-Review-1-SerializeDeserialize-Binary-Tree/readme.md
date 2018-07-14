Problem Description
Serialization is the process of converting a data structure or object into a sequence of bits (i.e. a string) so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree.

There is no restriction on how your serialization/deserialization algorithm should work.

You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

For example, you may serialize the following tree
1
/ \
 2 3
/ \
 4 5

as "[1,2,3,null,null,4,5]", just the same as how LeetCode OJ serializes a binary tree.

You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

You should make these pure functions, meaning you shouldn't have to modify the input tree at all.

Sample Tests
The tests will check that:

The serialize function outputs a string
The string output can then be fed into deserialize to get back a tree that is deeply equal to the first one

```js
var myTree = new TreeNode(1);
myTree.left = new TreeNode(2);
myTree.right = new TreeNode(3);
myTree.right.left = new TreeNode(4);
myTree.right.right = new TreeNode(5);

console.log(myTree);

/_
TreeNode {
val: 1,
left: TreeNode { val: 2, left: null, right: null },
right:
TreeNode {
val: 3,
left: TreeNode { val: 4, left: null, right: null },
right: TreeNode { val: 5, left: null, right: null } } }
_/

var serialized = serialize(myTree);
var deserialized = deserialize(serialized);

console.log(deserialized);

/_
TreeNode {
val: 1,
left: TreeNode { val: 2, left: null, right: null },
right:
TreeNode {
val: 3,
left: TreeNode { val: 4, left: null, right: null },
right: TreeNode { val: 5, left: null, right: null } } }
_/
```

Credit: https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/
