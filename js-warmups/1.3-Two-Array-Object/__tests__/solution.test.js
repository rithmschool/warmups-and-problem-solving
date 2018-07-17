describe("UnitTests", function() {
  it("returns_an_object_with_the_correct_keys_and_values", function() {
    // Failure message:
    // see the sample input output for what the tests are looking for
    expect(twoArrayObject(["a", "b", "c", "d"], [1, 2, 3])).toEqual({
      a: 1,
      b: 2,
      c: 3,
      d: null
    });
    expect(twoArrayObject(["a", "b", "c"], [1, 2, 3, 4])).toEqual({
      a: 1,
      b: 2,
      c: 3
    });
    expect(twoArrayObject(["x", "y", "z"], [1, 2])).toEqual({
      x: 1,
      y: 2,
      z: null
    });
  });
});
