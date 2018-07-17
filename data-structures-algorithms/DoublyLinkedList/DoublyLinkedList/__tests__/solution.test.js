describe("UnitTests", function() {
  it("list_contains_a_length_property_that_begins_at_0", function() {
    // Failure message:
    // This test has no failure messages
    var doublyLinkedList = new DoublyLinkedList();
    expect(doublyLinkedList.length).toBe(0);
    expect(doublyLinkedList.hasOwnProperty("length")).toBe(true);
  });
  it("list_contains_a_head_and_tail_that_are_null", function() {
    // Failure message:
    // This test has no failure messages
    var doublyLinkedList = new DoublyLinkedList();
    expect(doublyLinkedList.head).toBe(null);
    expect(doublyLinkedList.tail).toBe(null);
    expect(doublyLinkedList.hasOwnProperty("head")).toBe(true);
    expect(doublyLinkedList.hasOwnProperty("tail")).toBe(true);
  });
  it("node_contains_a_value", function() {
    // Failure message:
    // This test has no failure messages
    var node = new Node(15);

    expect(node.val).toBe(15);
    expect(node.hasOwnProperty("val")).toBe(true);
    expect(node.hasOwnProperty("next")).toBe(true);
  });
  it("node_contains_a_null_next_value", function() {
    // Failure message:
    // This test has no failure messages
    var node = new Node(15);

    expect(node.hasOwnProperty("next")).toBe(true);
    expect(node.next).toBe(null);
  });
  it("node_contains_a_null_prev_value", function() {
    // Failure message:
    // This test has no failure messages
    var node = new Node(15);

    expect(node.hasOwnProperty("prev")).toBe(true);
    expect(node.prev).toBe(null);
  });
});
