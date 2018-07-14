describe("UnitTests", function() {
  it("standard_inputs", function() {
    // Failure message:
    // This test has no failure messages
    expect(numToText("My 2 favorite numbers are 4 and 1")).toBe(
      "My two favorite numbers are four and one"
    );
    expect(numToText("I have 5 dogs and 6 ponies")).toBe(
      "I have five dogs and six ponies"
    );
  });
});
