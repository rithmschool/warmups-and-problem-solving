describe("UnitTests", function() {
  it("enqueue_places_the_value_at_the_end_of_the_queue", function() {
    // Failure message:
    // This test has no failure messages
    queue = new Queue();
    expect(queue.enqueue(10)).toBe(1);
    expect(queue.first.value).toBe(10);
    expect(queue.last.value).toBe(10);
    queue.enqueue(100);
    expect(queue.first.value).toBe(10);
    expect(queue.last.value).toBe(100);
    queue.enqueue(1000);
    expect(queue.first.value).toBe(10);
    expect(queue.last.value).toBe(1000);
  });
  it("Queue_contains_a_first_and_list_property", function() {
    // Failure message:
    // This test has no failure messages
    queue = new Queue();

    expect(queue.first).toBe(null);
    expect(queue.last).toBe(null);
    expect(queue.hasOwnProperty("first")).toBe(true);
    expect(queue.hasOwnProperty("last")).toBe(true);
  });
  it("Node_contains_a_value_and_next_property", function() {
    // Failure message:
    // This test has no failure messages
    node = new Node(10);
    expect(node.value).toBe(10);
    expect(node.next).toBe(null);
    expect(node.hasOwnProperty("value")).toBe(true);
    expect(node.hasOwnProperty("next")).toBe(true);
  });
  it("peek_returns_the_first_value_in_the_queue", function() {
    // Failure message:
    // This test has no failure messages
    queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(100);
    queue.enqueue(1000);
    expect(queue.peek()).toBe(10);
  });
  it("enqueue_returns_the_new_size_of_the_queue", function() {
    // Failure message:
    // This test has no failure messages
    queue = new Queue();
    expect(queue.enqueue(10)).toBe(1);
    expect(queue.size).toBe(1);
    expect(queue.enqueue(100)).toBe(2);
    expect(queue.size).toBe(2);
    expect(queue.enqueue(1000)).toBe(3);
    expect(queue.size).toBe(3);
  });
  it("dequeue_returns_the_value_of_the_node_removed", function() {
    // Failure message:
    // This test has no failure messages
    var queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(100);
    queue.enqueue(1000);
    var removed = queue.dequeue();
    expect(removed).toBe(10);
    expect(queue.size).toBe(2);
    queue.dequeue();
    queue.dequeue();
    expect(queue.size).toBe(0);
  });
});
