describe("UnitTests", function() {
  it("returns_the_list_so_the_method_can_be_chained", function() {
    // Failure message:
    // This test has no failure messages
    singlyLinkedList = new SinglyLinkedList();
    node = new Node(15);
    singlyLinkedList
      .unshift(5)
      .unshift(10)
      .unshift(15);
    expect(singlyLinkedList.length).toBe(3);
    expect(singlyLinkedList.tail.val).toBe(5);
    expect(singlyLinkedList.head.val).toBe(15);
    expect(singlyLinkedList.head.next.next.val).toBe(5);
  });
  it("returns_undefined_if_there_are_no_nodes_to_remove", function() {
    // Failure message:
    // This test has no failure messages
    singlyLinkedList = new SinglyLinkedList();

    expect(singlyLinkedList.shift()).toBe(undefined);
    expect(singlyLinkedList.length).toBe(0);
  });
  it("inserts_a_node_at_the_beginning_of_the_list_and_increments_the_length_of_the_list", function() {
    // Failure message:
    // This test has no failure messages
    singlyLinkedList = new SinglyLinkedList();

    singlyLinkedList.unshift(5);
    expect(singlyLinkedList.length).toBe(1);
    expect(singlyLinkedList.head.val).toBe(5);
    expect(singlyLinkedList.tail.val).toBe(5);
    singlyLinkedList.unshift(10);
    expect(singlyLinkedList.length).toBe(2);
    expect(singlyLinkedList.head.val).toBe(10);
    expect(singlyLinkedList.tail.val).toBe(5);
    expect(singlyLinkedList.head.next.val).toBe(5);
    singlyLinkedList.unshift(15);
    expect(singlyLinkedList.length).toBe(3);
    expect(singlyLinkedList.head.val).toBe(15);
    expect(singlyLinkedList.tail.val).toBe(5);
    expect(singlyLinkedList.head.next.val).toBe(10);
    expect(singlyLinkedList.head.next.next.val).toBe(5);
  });
  it("shift_removes_a_node_at_the_beginning_of_the_list_and_decrements_the_length_of_the_list", function() {
    // Failure message:
    // This test has no failure messages
    SinglyLinkedList.prototype.push = function(val) {
      var newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;

      return this;
    };

    singlyLinkedList = new SinglyLinkedList();
    node = new Node(15);
    singlyLinkedList
      .push(5)
      .push(10)
      .push(15)
      .push(20);
    expect(singlyLinkedList.length).toBe(4);
    expect(singlyLinkedList.shift()).toBe(5);
    expect(singlyLinkedList.tail.val).toBe(20);
    expect(singlyLinkedList.head.val).toBe(10);
    expect(singlyLinkedList.length).toBe(3);
    expect(singlyLinkedList.shift()).toBe(10);
    expect(singlyLinkedList.length).toBe(2);
    expect(singlyLinkedList.shift()).toBe(15);
    expect(singlyLinkedList.length).toBe(1);
    expect(singlyLinkedList.shift()).toBe(20);
    expect(singlyLinkedList.length).toBe(0);
  });
});
