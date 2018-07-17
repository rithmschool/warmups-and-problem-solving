function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

/**
 * Time Complexity: O(h) where h is the height of the tree
 * Space Complexity: O(1)
 */
function lowestCommonAncestorBST(root, p, q) {
  // if root is greater than both values, look in the left sub-tree
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestorBST(root.left, p, q);
  }
  // if root is less than both values, look in the right sub-tree
  else if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestorBST(root.right, p.val, q.val);
  }
  // root should be greater than one of them and less than the other
  else {
    return root;
  }
}
