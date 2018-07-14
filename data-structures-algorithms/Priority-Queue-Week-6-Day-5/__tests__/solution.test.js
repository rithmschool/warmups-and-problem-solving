describe("UnitTests", function() {
  it("dequeue_should_remove_the_highest_priority_and_reorder_correctly", function() {
    // Failure message:
    // This test has no failure messages
    var q = new PriorityQueue();
    q.enqueue("a", 100);
    q.enqueue("b", 1000);
    q.enqueue("c", 2000);
    expect(q.dequeue().val).toBe("c");
    expect(q.dequeue().val).toBe("b");
    expect(q.dequeue().val).toBe("a");
  });
  it("enqueue_should_add_the_highest_priority_and_reorder_correctly", function() {
    // Failure message:
    // This test has no failure messages
    var q = new PriorityQueue();
    q.enqueue("a", 100);
    q.enqueue("b", 1000);
    q.enqueue("c", 2000);
    expect(q.values[0].val).toBe("c");
    expect(q.values[1].priority < q.values[0].priority).toBe(true);
  });
});
