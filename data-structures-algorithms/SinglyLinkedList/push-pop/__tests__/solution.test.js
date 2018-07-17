describe("UnitTests", function() {
  it("pop_removes_a_node_at_the_end_of_the_list_and_decrements_the_length_of_the_list", function() {
    // Failure message:
    // This test has no failure messages
    var singlyLinkedList = new SinglyLinkedList();

    singlyLinkedList
      .push(5)
      .push(10)
      .push(15)
      .push(20);
    expect(singlyLinkedList.length).toBe(4);
    expect(singlyLinkedList.pop().val).toBe(20);
    expect(singlyLinkedList.tail.val).toBe(15);
    expect(singlyLinkedList.length).toBe(3);
  });
  it("inserts_a_node_at_the_end_of_the_list_and_increments_the_length_of_the_list", function() {
    // Failure message:
    // This test has no failure messages
    var singlyLinkedList = new SinglyLinkedList();

    singlyLinkedList.push(5);
    expect(singlyLinkedList.length).toBe(1);
    expect(singlyLinkedList.head.val).toBe(5);
    expect(singlyLinkedList.tail.val).toBe(5);
    singlyLinkedList.push(10);
    expect(singlyLinkedList.length).toBe(2);
    expect(singlyLinkedList.head.val).toBe(5);
    expect(singlyLinkedList.head.next.val).toBe(10);
    expect(singlyLinkedList.tail.val).toBe(10);
    singlyLinkedList.push(15);
    expect(singlyLinkedList.length).toBe(3);
    expect(singlyLinkedList.head.val).toBe(5);
    expect(singlyLinkedList.head.next.next.val).toBe(15);
    expect(singlyLinkedList.tail.val).toBe(15);
  });
  it("returns_the_singlyLinkedList_so_that_the_method_can_be_chained", function() {
    // Failure message:
    // This test has no failure messages
    var singlyLinkedList = new SinglyLinkedList();

    singlyLinkedList
      .push(5)
      .push(10)
      .push(15);
    expect(singlyLinkedList.length).toBe(3);
    expect(singlyLinkedList.head.next.next.val).toBe(15);
  });
  it("returns_undefined_if_there_are_no_nodes_to_remove", function() {
    // Failure message:
    // This test has no failure messages
    var singlyLinkedList = new SinglyLinkedList();

    expect(singlyLinkedList.pop()).toBe(undefined);
    expect(singlyLinkedList.length).toBe(0);
  });
});
