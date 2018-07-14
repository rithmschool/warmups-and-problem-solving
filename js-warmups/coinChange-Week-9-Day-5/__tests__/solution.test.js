describe("UnitTests", function() {
  it("returns_the_number_of_ways_to_make_change_based_on_denominations_and_an_amount", function() {
    // Failure message:
    // This test has no failure messages
    const denominations = [1, 5, 10, 25];

    expect(coinChange(denominations, 1)).toBe(1);
    expect(coinChange(denominations, 2)).toBe(1);
    expect(coinChange(denominations, 5)).toBe(2);
    expect(coinChange(denominations, 10)).toBe(4);
    expect(coinChange(denominations, 25)).toBe(13);
    expect(coinChange(denominations, 45)).toBe(39);
    expect(coinChange(denominations, 100)).toBe(242);
    expect(coinChange(denominations, 145)).toBe(622);
    expect(coinChange(denominations, 1451)).toBe(425663);
    expect(coinChange(denominations, 14511)).toBe(409222339);
  });
});
