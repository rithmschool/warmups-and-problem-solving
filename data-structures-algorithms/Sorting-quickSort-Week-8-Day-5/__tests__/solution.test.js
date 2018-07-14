describe("UnitTests", function() {
  it("pivot_mutation", function() {
    var comp = (a, b) => a - b;
    var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
    var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
    var idx1 = pivot(arr1, comp);
    var idx2 = pivot(arr2, comp);
    expect(arr1.slice(0, idx1).sort(comp)).toEqual([2, 3, 4]);
    expect(arr1.slice(idx1).sort(comp)).toEqual([5, 7, 8, 9, 10, 20]);
    expect(arr2.slice(0, idx2).sort(comp)).toEqual([0, 2, 4, 5]);
    expect(arr2.slice(idx2).sort(comp)).toEqual([8, 10, 11, 12, 13, 16]);
  });
  it("compare_objects", function() {
    // Failure message:
    // This test has no failure messages
    var arr3 = [];
    arr3.push({
      id: 34,
      name: "Moxie",
      age: 5,
      job: "sleeping"
    });

    arr3.push({
      id: 23,
      name: "Tim",
      age: 32,
      job: "teaching"
    });

    arr3.push({
      id: 24,
      name: "Kira",
      age: 28,
      job: "growth"
    });

    arr3.push({
      id: 33,
      name: "Whiskey",
      age: 3,
      job: "eating"
    });

    var arr3Soln = arr3.slice();

    function comp2(a, b) {
      if (a.age < b.age) {
        return 1;
      } else if (a.age > b.age) {
        return -1;
      }
      return 0;
    }

    arr3Soln.sort(comp2);

    expect(quickSort(arr3, comp2)).toEqual(arr3Soln);
  });
  it("pivot_return_value", function() {
    // Failure message:
    // This test has no failure messages
    var comp = (a, b) => a - b;
    var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
    var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
    var idx1 = pivot(arr1, comp);
    var idx2 = pivot(arr2, comp);
    expect(idx1).toEqual(3);
    expect(idx2).toEqual(4);
  });
});
