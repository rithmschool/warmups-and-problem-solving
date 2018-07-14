describe("UnitTests", function() {
  it("remove_should_correctly_remove_a_node_with_no_children", function() {
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
    binarySearchTree.remove(50);
    expect(binarySearchTree.root.right.value).toBe(20);
    expect(binarySearchTree.root.right.right).toBe(null);

    binarySearchTree.remove(5);
    expect(binarySearchTree.root.left.left.value).toBe(1);
    expect(binarySearchTree.root.left.left.right).toBe(null);
  });
  it("remove_should_correctly_remove_a_node_with_one_child", function() {
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

    binarySearchTree.remove(1);
    expect(binarySearchTree.root.left.left.value).toBe(5);
    expect(binarySearchTree.root.left.left.left).toBe(null);
    expect(binarySearchTree.root.left.left.right).toBe(null);

    binarySearchTree.remove(20);
    expect(binarySearchTree.root.right.value).toBe(50);
    expect(binarySearchTree.root.right.right).toBe(null);
    expect(binarySearchTree.root.right.left).toBe(null);
  });
  it("remove_should_correctly_remove_a_node_with_two_children", function() {
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
      .insertIteratively(50)
      .insertIteratively(60)
      .insertIteratively(30)
      .insertIteratively(25)
      .insertIteratively(23)
      .insertIteratively(24)
      .insertIteratively(70);

    binarySearchTree.remove(10);
    expect(binarySearchTree.root.left.value).toBe(12);
    expect(binarySearchTree.root.left.left.value).toBe(1);
    expect(binarySearchTree.root.left.left.right.value).toBe(5);

    binarySearchTree.remove(50);
    expect(binarySearchTree.root.right.value).toBe(20);
    expect(binarySearchTree.root.right.right.value).toBe(60);
    expect(binarySearchTree.root.right.right.left.value).toBe(30);
  });
  it("should_remove_a_node_with_two_children_and_handle_the_children_of_the_removed_node", function() {
    // Failure message:
    // This test has no failure messages
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
    expect(binarySearchTree.root.right.right.value).toBe(88); // 88
    expect(binarySearchTree.root.right.right.right.left.left.value).toBe(89); // 89
  });
});
