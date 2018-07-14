describe("UnitTests", function() {
  it("finds_a_node_and_returns_its_value", function() {
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
    expect(singlyLinkedList.__get(0).val).toBe(5);
    expect(singlyLinkedList.__get(1).val).toBe(10);
    expect(singlyLinkedList.__get(2).val).toBe(15);
    expect(singlyLinkedList.__get(3).val).toBe(20);
    expect(singlyLinkedList.__get(4)).toBe(null);
  });
  it("finds_a_node_and_replaces_its_value_or_returns_undefined_if_the_node_is_not_found", function() {
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

    singlyLinkedList
      .push(5)
      .push(10)
      .push(15)
      .push(20);
    expect(singlyLinkedList.set(0, 10)).toBe(true);
    expect(singlyLinkedList.length).toBe(4);
    expect(singlyLinkedList.head.val).toBe(10);
    expect(singlyLinkedList.set(10, 10)).toBe(false);
    expect(singlyLinkedList.length).toBe(4);
    expect(singlyLinkedList.head.val).toBe(10);
    expect(singlyLinkedList.set(2, 100)).toBe(true);
    expect(singlyLinkedList.length).toBe(4);
    expect(singlyLinkedList.head.next.next.val).toBe(100);
  });
});
