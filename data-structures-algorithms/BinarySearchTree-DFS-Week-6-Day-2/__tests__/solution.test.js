describe("UnitTests", function() {
  it("returns_an_array_of_values_found_with_DFS_In_Order", function() {
    // Failure message:
    // This test has no failure messages
    binarySearchTree = new BinarySearchTree();
    binarySearchTree
      .insertIteratively(15)
      .insertIteratively(20)
      .insertIteratively(10)
      .insertIteratively(12)
      .insertIteratively(1)
      .insertIteratively(5)
      .insertIteratively(50);
    expect(binarySearchTree.DFSInOrder()).toEqual([1, 5, 10, 12, 15, 20, 50]);
  });
  it("returns_an_array_of_values_found_with_DFS_Pre_Order", function() {
    // Failure message:
    // This test has no failure messages
    binarySearchTree = new BinarySearchTree();
    binarySearchTree
      .insertIteratively(15)
      .insertIteratively(20)
      .insertIteratively(10)
      .insertIteratively(12)
      .insertIteratively(1)
      .insertIteratively(5)
      .insertIteratively(50);
    expect(binarySearchTree.DFSPreOrder()).toEqual([15, 10, 1, 5, 12, 20, 50]);
  });
  it("returns_an_array_of_values_found_with_DFS_Post_Order", function() {
    // Failure message:
    // This test has no failure messages
    binarySearchTree = new BinarySearchTree();
    binarySearchTree
      .insertIteratively(15)
      .insertIteratively(20)
      .insertIteratively(10)
      .insertIteratively(12)
      .insertIteratively(1)
      .insertIteratively(5)
      .insertIteratively(50);
    expect(binarySearchTree.DFSPostOrder()).toEqual([5, 1, 12, 10, 50, 20, 15]);
  });
});
