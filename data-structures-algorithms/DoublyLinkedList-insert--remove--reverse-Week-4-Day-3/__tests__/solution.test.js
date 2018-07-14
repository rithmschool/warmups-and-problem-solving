describe("UnitTests", function() {
  it("insert_inserts_a_node_and_correct_adjusts_the_next_properties_of_other_nodes", function() {
    // Failure message:
    // This test has no failure messages
    doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList
      .push(5)
      .push(10)
      .push(15)
      .push(20);
    expect(doublyLinkedList.__insert(2, 12)).toBe(true);
    expect(doublyLinkedList.__insert(100, 12)).toBe(false);
    expect(doublyLinkedList.length).toBe(5);
    expect(doublyLinkedList.head.val).toBe(5);
    expect(doublyLinkedList.head.next.val).toBe(10);
    expect(doublyLinkedList.head.next.next.val).toBe(12);
    expect(doublyLinkedList.head.next.next.next.val).toBe(15);
    expect(doublyLinkedList.head.next.next.next.next.val).toBe(20);
  });
  it("remove_contains_a_root_that_is_null", function() {
    // Failure message:
    // This test has no failure messages
    doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList
      .push(5)
      .push(10)
      .push(15)
      .push(20);
    expect(doublyLinkedList.remove(2).val).toBe(15);
    expect(doublyLinkedList.remove(100)).toBe(undefined);
    expect(doublyLinkedList.length).toBe(3);
    expect(doublyLinkedList.head.val).toBe(5);
    expect(doublyLinkedList.head.next.val).toBe(10);
    expect(doublyLinkedList.head.next.next.val).toBe(20);
  });
  it("reverse_reverses_all_of_the_nodes", function() {
    // Failure message:
    // This test has no failure messages
    doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList
      .push(5)
      .push(10)
      .push(15)
      .push(20);
    expect(doublyLinkedList.reverse()).toBe(doublyLinkedList);
    expect(doublyLinkedList.length).toBe(4);
    expect(doublyLinkedList.head.val).toBe(20);
    expect(doublyLinkedList.head.next.val).toBe(15);
    expect(doublyLinkedList.head.next.next.val).toBe(10);
    expect(doublyLinkedList.head.next.next.next.val).toBe(5);
  });
});
