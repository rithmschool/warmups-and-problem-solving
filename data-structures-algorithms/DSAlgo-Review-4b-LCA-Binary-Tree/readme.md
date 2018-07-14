Write a function called lowestCommonAncestor.

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia:
The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).
https://en.wikipedia.org/wiki/Lowest_common_ancestor

Notes

All three arguments: root, p, q are instances of TreeNode.

Your return value should also be a TreeNode.

You can assume that all the values in the tree are unique.

Examples

/\*

         _______3______
        /              \
     __5__            __1__
    /     \          /     \

6 2 0 8
/ \
 7 4

\*/

```js
const root = new TreeNode(3);

/_ build left subtree _/;

const left = new TreeNode(5);
root.left = left;

const left_left = new TreeNode(6);
left.left = left_left;

const left_right = new TreeNode(2);
left.right = left_right;

const left_right_left = new TreeNode(7);
left_right.left = left_right_left;

const left_right_right = new TreeNode(4);
left_right.right = left_right_right;

/_ build right subtree _/;

const right = new TreeNode(1);
root.right = right;

const right_left = new TreeNode(0);
right.left = right_left;

const right_right = new TreeNode(8);
right.right = right_right;

/_ test examples _/;

// root = 3, p = 5, q = 1
lowestCommonAncestor(root, left, right);
// --> root (3) is the LCA

// root = 3, p = 2, q = 7
lowestCommonAncestor(root, left_right, left_right_left);
// --> left_right (2) is the LCA

// root = 3, p = 7, q = 6
lowestCommonAncestor(root, left_right_left, left_left);
// --> left (5) is the LCA

// root = 3, p = 8, q = 0
lowestCommonAncestor(root, right_left, right_right);
// --> right (1) is the LCA
```
