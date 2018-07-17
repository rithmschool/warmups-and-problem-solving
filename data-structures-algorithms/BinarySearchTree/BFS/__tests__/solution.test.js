describe("UnitTests", function() {
  it("returns_an_array_of_values_found_with_Breadth_First_Search", function() {
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
    expect(binarySearchTree.breadthFirstSearch()).toEqual([
      15,
      10,
      20,
      1,
      12,
      50,
      5
    ]);
  });
});
