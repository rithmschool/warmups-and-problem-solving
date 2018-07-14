describe("UnitTests", function() {
  it("reverse_reverses_all_of_the_nodes", function() {
    // Failure message:
    // This test has no failure messages
    var singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList
      .push(5)
      .push(10)
      .push(15)
      .push(20);
    var head = singlyLinkedList.head;
    var tail = singlyLinkedList.tail;

    expect(singlyLinkedList.reverse()).toBe(singlyLinkedList);
    expect(singlyLinkedList.tail).toEqual(head);
    expect(singlyLinkedList.head).toEqual(tail);
    expect(singlyLinkedList.length).toBe(4);
    expect(singlyLinkedList.tail.val).toBe(5);
    expect(singlyLinkedList.head.val).toBe(20);
    expect(singlyLinkedList.head.next.val).toBe(15);
    expect(singlyLinkedList.head.next.next.val).toBe(10);
    expect(singlyLinkedList.head.next.next.next.val).toBe(5);
  });
  it("remove_contains_a_root_that_is_null", function() {
    // Failure message:
    // This test has no failure messages
    var singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList
      .push(5)
      .push(10)
      .push(15)
      .push(20);
    expect(singlyLinkedList.remove(2).val).toBe(15);
    expect(singlyLinkedList.remove(100)).toBe(undefined);
    expect(singlyLinkedList.length).toBe(3);
    expect(singlyLinkedList.head.val).toBe(5);
    expect(singlyLinkedList.head.next.val).toBe(10);
    expect(singlyLinkedList.head.next.next.val).toBe(20);
  });
  it("insert_inserts_a_node_and_correct_adjusts_the_next_properties_of_other_nodes", function() {
    // Failure message:
    // This test has no failure messages
    var singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList
      .push(5)
      .push(10)
      .push(15)
      .push(20);
    expect(singlyLinkedList.__insert(2, 12)).toBe(true);
    expect(singlyLinkedList.__insert(100, 12)).toBe(false);
    expect(singlyLinkedList.length).toBe(5);
    expect(singlyLinkedList.head.val).toBe(5);
    expect(singlyLinkedList.head.next.val).toBe(10);
    expect(singlyLinkedList.head.next.next.val).toBe(12);
    expect(singlyLinkedList.head.next.next.next.val).toBe(15);
    expect(singlyLinkedList.head.next.next.next.next.val).toBe(20);
    expect(singlyLinkedList.__insert(5, 25)).toBe(true);
    expect(singlyLinkedList.head.next.next.next.next.next.val).toBe(25);
    expect(singlyLinkedList.tail.val).toBe(25);
  });
});
