describe("UnitTests", function() {
  it("pop_returns_undefined_if_there_are_no_nodes_to_remove", function() {
    // Failure message:
    // This test has no failure messages
    var doublyLinkedList = new DoublyLinkedList();
    expect(doublyLinkedList.pop()).toBe(undefined);
    expect(doublyLinkedList.length).toBe(0);
  });
  it("push_returns_the_doublyLinkedList_so_that_the_method_can_be_chained", function() {
    // Failure message:
    // This test has no failure messages
    var doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList
      .push(5)
      .push(10)
      .push(15);
    expect(doublyLinkedList.length).toBe(3);
    expect(doublyLinkedList.head.next.next.val).toBe(15);
  });
  it("pop_removes_a_node_at_the_end_of_the_list_and_decrements_the_length_of_the_list", function() {
    // Failure message:
    // This test has no failure messages
    var doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList
      .push(5)
      .push(10)
      .push(15)
      .push(20);
    expect(doublyLinkedList.length).toBe(4);
    expect(doublyLinkedList.pop().val).toBe(20);
    expect(doublyLinkedList.length).toBe(3);
  });
  it("push_inserts_a_node_at_the_end_of_the_list_and_increments_the_length_of_the_list", function() {
    // Failure message:
    // This test has no failure messages
    var doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.push(5);
    expect(doublyLinkedList.length).toBe(1);
    expect(doublyLinkedList.head.val).toBe(5);
    expect(doublyLinkedList.tail.val).toBe(5);
    expect(doublyLinkedList.head.prev).toBe(null);
    doublyLinkedList.push(10);
    expect(doublyLinkedList.length).toBe(2);
    expect(doublyLinkedList.head.next.val).toBe(10);
    expect(doublyLinkedList.tail.val).toBe(10);
    expect(doublyLinkedList.head.val).toBe(5);
    expect(doublyLinkedList.head.next.prev.val).toBe(5);
    doublyLinkedList.push(15);
    expect(doublyLinkedList.length).toBe(3);
    expect(doublyLinkedList.head.val).toBe(5);
    expect(doublyLinkedList.head.next.next.val).toBe(15);
    expect(doublyLinkedList.tail.prev.val).toBe(10);
    expect(doublyLinkedList.tail.val).toBe(15);
  });
});
