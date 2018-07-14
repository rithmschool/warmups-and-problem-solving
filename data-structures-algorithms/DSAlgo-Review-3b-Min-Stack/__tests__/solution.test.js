describe("UnitTests", function() {
  it("has_working_constructor", function() {
    // Failure message:
    // This test has no failure messages
    let test = new MinStack();

    expect(test instanceof MinStack).toBe(true);
  });
  it("has_working_push", function() {
    // Failure message:
    // push method is not working
    let test = new MinStack();
    expect(typeof MinStack.prototype.push === "function").toBe(true);
    test.push(5);
  });
  it("has_working_pop", function() {
    // Failure message:
    // pop method is not working
    let test = new MinStack();
    expect(typeof MinStack.prototype.pop === "function").toBe(true);
    test.push(5);
    test.pop();
  });
  it("has_working_top", function() {
    // Failure message:
    // top method is not working
    let test = new MinStack();
    expect(typeof MinStack.prototype.top === "function").toBe(true);
    test.push(5);
    expect(typeof test.top() === "number").toBe(true);
  });
  it("has_working_getMin", function() {
    // Failure message:
    // getMin method not working
    let test = new MinStack();
    expect(typeof MinStack.prototype.pop === "function").toBe(true);
    test.push(5);
    expect(typeof test.getMin() === "number").toBe(true);
  });
  it("has_working_methods", function() {
    // Failure message:
    // methods did not work together
    let m = new MinStack();
    m.push(1);
    m.push(3);
    m.push(5);
    m.push(7);
    m.push(9);

    expect(m.top() === 9).toBe(true);
    expect(m.getMin() === 1).toBe(true);
    m.pop();
    expect(m.top() === 7).toBe(true);
    expect(m.getMin() === 1).toBe(true);
    m.push(-1000);
    expect(m.getMin() === -1000).toBe(true);
    expect(m.getMin() === m.top()).toBe(true);
    m.pop();
    expect(m.getMin() === 1).toBe(true);
    expect(m.top() === 7).toBe(true);
  });
});
