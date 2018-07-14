describe("UnitTests", function() {
  it("contains_a_root_that_is_null", function() {
    // Failure message:
    // This test has no failure messages
    binarySearchTree = new BinarySearchTree();
    expect(binarySearchTree.root).toBe(null);
    expect(binarySearchTree.hasOwnProperty("root")).toBe(true);
  });
  it("has_a_node_that_cpntains_a_value_as_well_as_a_left_and_right", function() {
    // Failure message:
    // This test has no failure messages
    node = new Node(15);
    expect(node.value).toBe(15);
    expect(node.hasOwnProperty("value")).toBe(true);
    expect(node.left).toBe(null);
    expect(node.hasOwnProperty("left")).toBe(true);
    expect(node.right).toBe(null);
    expect(node.hasOwnProperty("right")).toBe(true);
  });
});
