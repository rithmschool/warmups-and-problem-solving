describe("UnitTests", function() {
  it("functions_are_declared_properly", function() {
    // Failure message:
    // This test has no failure messages
    expect(typeof serialize === "function").toBe(true);
    expect(typeof deserialize === "function").toBe(true);
    expect(typeof TreeNode === "function").toBe(true);
  });
  it("serialize_outputs_string", function() {
    // Failure message:
    // The 'serialize' function needs to output a string.
    var myTree = new TreeNode(1);
    myTree.left = new TreeNode(2);
    myTree.right = new TreeNode(3);
    myTree.right.left = new TreeNode(4);
    myTree.right.right = new TreeNode(5);

    expect(typeof serialize(myTree) === "string").toBe(true);
  });
  it("deserialize_outputs_TreeNode", function() {
    // Failure message:
    // The 'deserialize' function needs to output a TreeNode
    var myTree = new TreeNode(1);
    myTree.left = new TreeNode(2);
    myTree.right = new TreeNode(3);
    myTree.right.left = new TreeNode(4);
    myTree.right.right = new TreeNode(5);

    var serialized = serialize(myTree);
    var result = deserialize(serialized);
    expect(result instanceof TreeNode).toBe(true);
  });
  it("functions_reverse_eachother", function() {
    // Failure message:
    // the function 'deserialize' should perfectly reverse the function 'serialize'
    var myTree = new TreeNode(1);
    myTree.left = new TreeNode(2);
    myTree.right = new TreeNode(3);
    myTree.right.left = new TreeNode(4);
    myTree.right.right = new TreeNode(5);

    var serialized = serialize(myTree);
    var result = deserialize(serialized);

    expect(result).toEqual(myTree);
  });
  it("pure_functions", function() {
    // Failure message:
    // original tree must be unchanged
    var myTree = new TreeNode(1);
    myTree.left = new TreeNode(2);
    myTree.right = new TreeNode(3);
    myTree.right.left = new TreeNode(4);
    myTree.right.right = new TreeNode(5);

    var myTreeCopy = new TreeNode(1);
    myTreeCopy.left = new TreeNode(2);
    myTreeCopy.right = new TreeNode(3);
    myTreeCopy.right.left = new TreeNode(4);
    myTreeCopy.right.right = new TreeNode(5);

    var serialized = serialize(myTree);
    var result = deserialize(serialized);

    expect(myTree).toEqual(myTreeCopy);
  });
});
