describe("UnitTests", function() {
  it("set_finds_a_node_and_replaces_its_val_or_returns_undefined_if_the_node_is_not_found", function() {
    // Failure message:
    // This test has no failure messages
    doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList
      .push(5)
      .push(10)
      .push(15)
      .push(20);
    expect(doublyLinkedList.length).toBe(4);
    expect(doublyLinkedList.set(0, 10)).toBe(true);
    expect(doublyLinkedList.length).toBe(4);
    expect(doublyLinkedList.head.val).toBe(10);
    expect(doublyLinkedList.set(10, 10)).toBe(false);
    expect(doublyLinkedList.length).toBe(4);
    expect(doublyLinkedList.head.val).toBe(10);
    expect(doublyLinkedList.set(2, 100)).toBe(true);
    expect(doublyLinkedList.length).toBe(4);
    expect(doublyLinkedList.head.next.next.val).toBe(100);
  });
  it("get_finds_a_node_and_returns_its_val_", function() {
    // Failure message:
    // This test has no failure messages
    doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList
      .push(5)
      .push(10)
      .push(15)
      .push(20);
    expect(doublyLinkedList.__get(0).val).toBe(5);
    expect(doublyLinkedList.__get(1).val).toBe(10);
    expect(doublyLinkedList.__get(2).val).toBe(15);
    expect(doublyLinkedList.__get(3).val).toBe(20);
    expect(doublyLinkedList.__get(4)).toBe(null);
  });
});
