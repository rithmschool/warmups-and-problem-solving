describe("UnitTests", function() {
  it("returns_the_correct_output", function() {
    // Failure message:
    // See the sample test cases for input
    var q1 = new Queue();
    q1.enqueue(3); // returns the queue
    q1.enqueue(4); // returns the queue
    q1.enqueue(5); // returns the queue
    q1.enqueue(6).enqueue(7); // returns the queue
    expect(q1.dequeue()).toBe(3);
    expect(q1.dequeue()).toBe(4); // 4
    expect(q1.dequeue()).toBe(5); // 5
    expect(q1.dequeue()).toBe(6); // 6
    expect(q1.dequeue()).toBe(7); // 7
    expect(q1.dequeue()).toBe(null); // null
  });
});
