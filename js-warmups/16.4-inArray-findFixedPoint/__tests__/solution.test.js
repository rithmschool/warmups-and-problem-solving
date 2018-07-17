describe("UnitTests", function() {
  it("inArray_returns_all_common_words_sorted", function() {
    // Failure message:
    // This test has no failure messages
    var a1 = ["arp", "live", "strong", "sharper"];
    var a2 = ["lively", "harp", "sharp", "armstrong", "ham"];
    var a3 = ["hammer", "olive", "string"];
    var a4 = ["sharper", "live", "strong", "arp"];

    expect(inArray(a1, a2)).toEqual(["arp", "live", "strong"]);
    expect(inArray(a2, a1)).toEqual(["harp", "sharp"]);
    expect(inArray(a1, a3)).toEqual(["live"]);
    expect(inArray(a2, a3)).toEqual(["ham"]);
    expect(inArray(a3, a2)).toEqual([]);
    expect(inArray(a4, a2)).toEqual(["arp", "live", "strong"]);
  });
  it("findFixedPoint_returns_the_correct_index_or_negative_one_if_not_found", function() {
    // Failure message:
    // This test has no failure messages
    expect(findFixedPoint([-3, 1, 5])).toEqual(1);
    expect(findFixedPoint([-10, -5, 0, 3, 7])).toEqual(3);
    expect(findFixedPoint([0, 2, 5, 8, 17])).toEqual(0);

    expect(findFixedPoint([-10, -5, 3, 4, 7, 9])).toEqual(-1);
    expect(findFixedPoint([1, 2, 3, 4, 5, 6])).toEqual(-1);
    expect(findFixedPoint([-3, 0, 3, 6, 10])).toEqual(-1);
  });
});
