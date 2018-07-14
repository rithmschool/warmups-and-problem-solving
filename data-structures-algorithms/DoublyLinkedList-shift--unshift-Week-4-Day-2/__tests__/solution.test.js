describe("UnitTests", function() {
  it("unshift_inserts_a_node_at_the_beginning_of_the_list_and_increments_the_length_of_the_list", function() {
    // Failure message:
    // This test has no failure messages
    doublyLinkedList = new DoublyLinkedList();

    doublyLinkedList.unshift(5);
    expect(doublyLinkedList.length).toBe(1);
    expect(doublyLinkedList.head.val).toBe(5);
    expect(doublyLinkedList.tail.val).toBe(5);
    doublyLinkedList.unshift(10);
    expect(doublyLinkedList.length).toBe(2);
    expect(doublyLinkedList.head.val).toBe(10);
    expect(doublyLinkedList.tail.val).toBe(5);
    expect(doublyLinkedList.head.next.val).toBe(5);
    doublyLinkedList.unshift(15);
    expect(doublyLinkedList.length).toBe(3);
    expect(doublyLinkedList.head.val).toBe(15);
    expect(doublyLinkedList.tail.val).toBe(5);
    expect(doublyLinkedList.head.next.val).toBe(10);
    expect(doublyLinkedList.head.next.next.val).toBe(5);
  });
  it("shift_removes_a_node_at_the_beginning_of_the_list_and_decrements_the_length_of_the_list", function() {
    // Failure message:
    // This test has no failure messages
    doublyLinkedList = new DoublyLinkedList();

    doublyLinkedList
      .push(5)
      .push(10)
      .push(15)
      .push(20);
    expect(doublyLinkedList.length).toBe(4);
    expect(doublyLinkedList.shift().val).toBe(5);
    expect(doublyLinkedList.length).toBe(3);
    expect(doublyLinkedList.shift().val).toBe(10);
    expect(doublyLinkedList.length).toBe(2);
    expect(doublyLinkedList.shift().val).toBe(15);
    expect(doublyLinkedList.length).toBe(1);
    expect(doublyLinkedList.shift().val).toBe(20);
    expect(doublyLinkedList.length).toBe(0);
  });
  it("unshift_returns_the_doublyLinkedList_so_that_the_method_can_be_chained", function() {
    // Failure message:
    // This test has no failure messages
    doublyLinkedList = new DoublyLinkedList();

    doublyLinkedList
      .unshift(5)
      .unshift(10)
      .unshift(15);
    expect(doublyLinkedList.length).toBe(3);
    expect(doublyLinkedList.head.next.next.val).toBe(5);
  });
  it("shift_returns_undefined_if_there_are_no_nodes_to_remove", function() {
    // Failure message:
    // This test has no failure messages
    doublyLinkedList = new DoublyLinkedList();

    expect(doublyLinkedList.shift()).toBe(undefined);
    expect(doublyLinkedList.length).toBe(0);
  });
});
