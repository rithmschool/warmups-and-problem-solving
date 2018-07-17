/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

/**
 * Output looks like this:
 *   1 2 # # 3 4 # # 5 # #
 *  Where # represents null children with an pre-order traversal.
 */

function serialize(root) {
  const values = [];

  (function traverse(node) {
    if (node) {
      values.push(node.val);
      traverse(node.left);
      traverse(node.right);
    } else {
      // # represents a null placeholder
      values.push("#");
    }
  })(root);

  return values.join(" ");
}

function deserialize(data) {
  if (!data) {
    return null;
  }

  const values = data.split(" ");

  return (function buildTree() {
    if (values.length) {
      // building a tree starting from the beginning of the array
      let cur = values.shift();

      if (cur === "#") {
        return null;
      }

      // remember to convert values back into numbers
      let node = new TreeNode(+cur);

      node.left = buildTree();
      node.right = buildTree();

      return node;
    }
  })();
}
