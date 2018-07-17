describe("UnitTests", function() {
  it("Insert_iteratively_inserts_a_node_at_the_correct_position", function() {
    // Failure message:
    // This test has no failure messages
    var binarySearchTree = new BinarySearchTree();
    binarySearchTree.insertIteratively(15);
    binarySearchTree.insertIteratively(20);
    binarySearchTree.insertIteratively(10);
    binarySearchTree.insertIteratively(12);
    expect(binarySearchTree.root.value).toEqual(15);
    expect(binarySearchTree.root.right.value).toEqual(20);
    expect(binarySearchTree.root.left.right.value).toEqual(12);
  });
  it("Insert_iteratively_inserts_a_node_at_the_root_if_there_is_nothing_there", function() {
    // Failure message:
    // This test has no failure messages
    var binarySearchTree = new BinarySearchTree();
    binarySearchTree.insertIteratively(15);
    expect(binarySearchTree.root.value).toEqual(15);
    expect(binarySearchTree.root.left).toBe(null);
    expect(binarySearchTree.root.right).toBe(null);
  });
  it("Insert_recursively_inserts_a_node_at_the_root_if_there_is_nothing_there", function() {
    // Failure message:
    // This test has no failure messages
    var binarySearchTree = new BinarySearchTree();
    binarySearchTree.insertRecursively(15);
    expect(binarySearchTree.root.value).toBe(15);
    expect(binarySearchTree.root.left).toBe(null);
    expect(binarySearchTree.root.right).toBe(null);
  });
  it("Insert_recursively_inserts_a_node_at_the_correct_position", function() {
    // Failure message:
    // This test has no failure messages
    var binarySearchTree = new BinarySearchTree();

    binarySearchTree.insertRecursively(15);
    binarySearchTree.insertRecursively(20);
    binarySearchTree.insertRecursively(10);
    binarySearchTree.insertRecursively(12);
    expect(binarySearchTree.root.value).toBe(15);
    expect(binarySearchTree.root.right.value).toBe(20);
    expect(binarySearchTree.root.left.right.value).toBe(12);
  });
  it("Insert_recursively_returns_the_binarySearchTree_so_that_the_method_can_be_chained", function() {
    // Failure message:
    // This test has no failure messages
    var binarySearchTree = new BinarySearchTree();
    expect(binarySearchTree.insertRecursively(15)).toBe(binarySearchTree);
    binarySearchTree
      .insertRecursively(20)
      .insertRecursively(10)
      .insertRecursively(12);
    expect(binarySearchTree.root.value).toBe(15);
    expect(binarySearchTree.root.right.value).toBe(20);
    expect(binarySearchTree.root.left.right.value).toBe(12);
  });
  it("Insert_iteratively_returns_the_binarySearchTree_so_that_the_method_can_be_chained", function() {
    // Failure message:
    // This test has no failure messages
    var binarySearchTree = new BinarySearchTree();
    expect(binarySearchTree.insertIteratively(15)).toBe(binarySearchTree);
    binarySearchTree
      .insertIteratively(20)
      .insertIteratively(10)
      .insertIteratively(12);
    expect(binarySearchTree.root.value).toBe(15);
    expect(binarySearchTree.root.right.value).toBe(20);
    expect(binarySearchTree.root.left.right.value).toBe(12);
  });
});
