describe("UnitTests", function() {
  it("returns_the_correct_output", function() {
    // Failure message:
    // see the sample input for correct output
    var s = new Stack();
    s.push(10)
      .push(20)
      .push(30);
    expect(s.pop()).toBe(30); //
    expect(s.pop()).toBe(20); //
    expect(s.pop()).toBe(10); //
    expect(s.pop()).toBe(null); //
    s.push(30)
      .push(40)
      .push(50);
    expect(s.pop()).toBe(50); //
    s.push(60);
    expect(s.pop()).toBe(60); //
  });
});
