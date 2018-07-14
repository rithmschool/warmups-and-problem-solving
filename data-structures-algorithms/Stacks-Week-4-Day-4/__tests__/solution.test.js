describe("UnitTests", function() {
  it("pop_returns_the_value_of_the_node_removed", function() {
    // Failure message:
    // This test has no failure messages
    stack = new Stack();

    stack.push(10);
    stack.push(100);
    stack.push(1000);
    var removed = stack.pop();
    expect(removed).toBe(1000);
    expect(stack.size).toBe(2);
    stack.pop();
    stack.pop();
    expect(stack.size).toBe(0);
  });
  it("Stack_contains_a_size_property_that_begins_at_0", function() {
    // Failure message:
    // This test has no failure messages
    stack = new Stack();
    expect(stack.size).toBe(0);
    expect(stack.hasOwnProperty("size")).toBe(true);
  });
  it("Stack_contains_a_first_and_list_property", function() {
    // Failure message:
    // This test has no failure messages
    stack = new Stack();
    expect(stack.first).toBe(null);
    expect(stack.last).toBe(null);
    expect(stack.hasOwnProperty("first")).toBe(true);
    expect(stack.hasOwnProperty("last")).toBe(true);
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
  it("push_returns_the_new_size_of_the_stack", function() {
    // Failure message:
    // This test has no failure messages
    stack = new Stack();

    expect(stack.push(10)).toBe(1);
    expect(stack.size).toBe(1);
    expect(stack.push(100)).toBe(2);
    expect(stack.size).toBe(2);
    expect(stack.push(1000)).toBe(3);
    expect(stack.size).toBe(3);
  });
  it("push_places_the_value_at_the_top_of_the_stack", function() {
    // Failure message:
    // This test has no failure messages
    stack = new Stack();

    expect(stack.push(10)).toBe(1);
    expect(stack.first.value).toBe(10);
    expect(stack.last.value).toBe(10);
    stack.push(100);
    expect(stack.first.value).toBe(100);
    expect(stack.last.value).toBe(10);
    stack.push(1000);
    expect(stack.first.value).toBe(1000);
    expect(stack.last.value).toBe(10);
  });
  it("peek_returns_the_value_at_the_top_of_the_stack", function() {
    // Failure message:
    // This test has no failure messages
    stack = new Stack();

    stack.push(10);
    stack.push(100);
    stack.push(1000);
    expect(stack.peek()).toBe(1000);
  });
});
