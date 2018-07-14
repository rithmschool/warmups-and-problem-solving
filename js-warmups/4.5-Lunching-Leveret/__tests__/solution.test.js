describe("UnitTests", function() {
  it("works_for_empty_garden", function() {
    // Failure message:
    // This test has no failure messages
    let garden = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

    expect(lunchCount(garden)).toBe(0);
  });
  it("works_for_all_ones", function() {
    // Failure message:
    // This test has no failure messages
    let garden = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];

    expect(lunchCount(garden)).toBe(9);
  });
  it("works_for_mixed_gardens", function() {
    // Failure message:
    // This test has no failure messages
    let garden = [[9, 9, 9, 9], [9, 3, 1, 0], [9, 1, 4, 2], [9, 9, 1, 0]];

    expect(lunchCount(garden)).toBe(6);

    garden = [
      [2, 3, 1, 4, 2, 2, 3],
      [2, 3, 0, 4, 0, 3, 0],
      [1, 7, 0, 2, 1, 2, 3],
      [9, 3, 0, 4, 2, 0, 3]
    ];

    expect(lunchCount(garden)).toBe(15);
  });
});
