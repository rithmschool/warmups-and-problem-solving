describe("UnitTests", function() {
  it("works_for_positive_integers", function() {
    // Failure message:
    // This test has no failure messages
    var singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList
      .push(5)
      .push(10)
      .push(15)
      .push(20)
      .push(25);

    singlyLinkedList.rotate(3);
    expect(singlyLinkedList.head.val).toBe(20);
    expect(singlyLinkedList.head.next.val).toBe(25);
    expect(singlyLinkedList.head.next.next.val).toBe(5);
    expect(singlyLinkedList.head.next.next.next.val).toBe(10);
    expect(singlyLinkedList.head.next.next.next.next.val).toBe(15);
    expect(singlyLinkedList.tail.val).toBe(15);
    expect(singlyLinkedList.tail.next).toBe(null);
  });
  it("works_for_negative_numbers", function() {
    // Failure message:
    // This test has no failure messages
    var singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList
      .push(5)
      .push(10)
      .push(15)
      .push(20)
      .push(25);
    singlyLinkedList.head; // 5
    singlyLinkedList.tail; // 25;

    singlyLinkedList.rotate(-1);
    expect(singlyLinkedList.head.val).toBe(25);
    expect(singlyLinkedList.head.next.val).toBe(5);
    expect(singlyLinkedList.head.next.next.val).toBe(10);
    expect(singlyLinkedList.head.next.next.next.val).toBe(15);
    expect(singlyLinkedList.head.next.next.next.next.val).toBe(20);
    expect(singlyLinkedList.tail.val).toBe(20);
    expect(singlyLinkedList.tail.next).toBe(null);
  });
  it("works_for_large_numbers", function() {
    // Failure message:
    // This test has no failure messages
    var singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList
      .push(5)
      .push(10)
      .push(15)
      .push(20)
      .push(25);
    singlyLinkedList.head; // 5
    singlyLinkedList.tail; // 25;

    singlyLinkedList.rotate(1000);
    expect(singlyLinkedList.head.val).toBe(5);
    expect(singlyLinkedList.head.next.val).toBe(10);
    expect(singlyLinkedList.head.next.next.val).toBe(15);
    expect(singlyLinkedList.head.next.next.next.val).toBe(20);
    expect(singlyLinkedList.head.next.next.next.next.val).toBe(25);
    expect(singlyLinkedList.tail.val).toBe(25);
    expect(singlyLinkedList.tail.next).toBe(null);
  });
});
