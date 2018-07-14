Write a function called lowestCommonAncestorBST.

Given a binary search tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia:
The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).

https://en.wikipedia.org/wiki/Lowest_common_ancestor

Notes
All three arguments: root, p, q are instances of TreeNode.
Your return value should also be a TreeNode.
You can assume that all the values in the tree are unique.
You can assume that p and q are definitely in the tree.

Examples

/\*

        _______6______
       /              \
    __2__            __8__

/ \ / \
 0 4 7 9
/ \
 3 5

\*/

```js
const root = new TreeNode(6);

/_ build left sub-tree _/;

const left = new TreeNode(2);
root.left = left;

const left_left = new TreeNode(0);
left.left = left_left;

const left_right = new TreeNode(4);
left.right = left_right;

const left_right_left = new TreeNode(3);
left_right.left = left_right_left;

const left_right_right = new TreeNode(5);
left_right.right = left_right_right;

/_ build right sub-tree _/;

const right = new TreeNode(8);
root.right = right;

const right_left = new TreeNode(7);
right.left = right_left;

const right_right = new TreeNode(9);
right.right = right_right;

/_ example tests _/;

// root = 6, p = 3, q = 9
lowestCommonAncestorBST(root, left_right_left, right_right);
// --> root (6) is the LCA

// root = 6, p = 3, q = 5
lowestCommonAncestorBST(root, left_right_left, left_right_right);
// --> left_right (4) is the LCA

// root = 6, p = 0, q = 2
lowestCommonAncestorBST(root, left_left, left);
// --> left (2) is the LCA

// root = 6, p = 0, q = 9
lowestCommonAncestorBST(root, left_left, right_right);
// --> root (6) is the LCA
```
