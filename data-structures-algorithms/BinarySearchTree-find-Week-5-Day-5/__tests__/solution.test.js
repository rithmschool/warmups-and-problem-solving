describe("UnitTests", function() {
  it("findIteratively_finds_a_node_correctly", function() {
    // Failure message:
    // This test has no failure messages
    binarySearchTree = new BinarySearchTree();
    binarySearchTree
      .insertIteratively(15)
      .insertIteratively(20)
      .insertIteratively(10)
      .insertIteratively(12);
    var foundNode = binarySearchTree.findIteratively(20);
    expect(foundNode.value).toBe(20);
    expect(foundNode.left).toBe(null);
    expect(foundNode.right).toBe(null);
  });
  it("findIteratively_returns_undefined_if_a_node_is_not_found", function() {
    // Failure message:
    // This test has no failure messages
    binarySearchTree = new BinarySearchTree();

    binarySearchTree
      .insertIteratively(15)
      .insertIteratively(20)
      .insertIteratively(10)
      .insertIteratively(12);
    var foundNode = binarySearchTree.findIteratively(120);
    expect(foundNode).toBe(undefined);
  });
  it("findRecursively_finds_a_node_correctly", function() {
    // Failure message:
    // This test has no failure messages
    binarySearchTree = new BinarySearchTree();
    binarySearchTree
      .insertIteratively(15)
      .insertIteratively(20)
      .insertIteratively(10)
      .insertIteratively(12);
    var foundNode = binarySearchTree.findRecursively(20);
    expect(foundNode.value).toBe(20);
    expect(foundNode.left).toBe(null);
    expect(foundNode.right).toBe(null);
  });
  it("findRecursively_returns_undefined_if_the_node_is_not_found", function() {
    // Failure message:
    // This test has no failure messages
    binarySearchTree = new BinarySearchTree();
    binarySearchTree
      .insertIteratively(15)
      .insertIteratively(20)
      .insertIteratively(10)
      .insertIteratively(12);
    var foundNode = binarySearchTree.findRecursively(120);
    expect(foundNode).toBe(undefined);
  });
});
