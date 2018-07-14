describe("UnitTests", function() {
  it("works_for_car_taco_banana", function() {
    // Failure message:
    // This test has no failure messages
    expect(capitalizeFirst(["car", "taco", "banana"])).toEqual([
      "Car",
      "Taco",
      "Banana"
    ]);
  });
  it("works_for_1_word", function() {
    // Failure message:
    // This test has no failure messages
    expect(capitalizeFirst(["moo"])).toEqual(["Moo"]);
  });
});
