describe("UnitTests", function() {
  it("partial_returns_a_function_that_can_be_partially_applied", function() {
    // Failure message:
    // This test has no failure messages
    function addAlot(a, b, c, d, e, f, g, h) {
      return a + b + c + d + e + f + g + h;
    }
    function subtractAlot(a, b, c, d, e) {
      return a - b - c - d - e;
    }

    var partialAdd = partial(addAlot);
    expect(partialAdd).toEqual(jasmine.any(Function));
    expect(partialAdd()(1, 2)(3, 4)(5, 6)()()()()(6)()()(10)).toBe(37);

    var partialSub = partial(subtractAlot);

    var p1 = partialSub(1, 2, 3);
    var p2 = p1()()()()()()(4);
    var p3 = p2(5, 6); // -13

    expect(p1).toEqual(jasmine.any(Function));
    expect(p2).toEqual(jasmine.any(Function));
    expect(p3).toBe(-13);
  });
});
