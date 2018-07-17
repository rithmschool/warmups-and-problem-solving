describe("UnitTests", function() {
  it("insertion_compare_strings", function() {
    // Failure message:
    // This test has no failure messages
    var arr = ["Tim", "Matt", "Elie", "Kira", "Moxie", "Angelina"];
    var arrSoln = arr.slice();
    arrSoln.sort();
    function strComp(a, b) {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      }
      return 0;
    }
    expect(insertionSort(arr, strComp)).toEqual(arrSoln);
  });
  it("default_comparator", function() {
    // Failure message:
    // This test has no failure messages
    expect(insertionSort([])).toEqual([]);
    expect(insertionSort([-11])).toEqual([-11]);
    expect(insertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    var nums = [
      4,
      3,
      5,
      3,
      43,
      232,
      4,
      34,
      232,
      32,
      4,
      35,
      34,
      23,
      2,
      453,
      546,
      75,
      67,
      4342,
      32
    ];
    expect(insertionSort(nums)).toEqual([
      2,
      3,
      3,
      4,
      4,
      4,
      5,
      23,
      32,
      32,
      34,
      34,
      35,
      43,
      67,
      75,
      232,
      232,
      453,
      546,
      4342
    ]);
  });
  it("insertion_compare_objects", function() {
    // Failure message:
    // This test has no failure messages
    var arr3 = [];
    arr3.push({
      id: 34,
      name: "Moxie",
      job: "sleeping"
    });

    arr3.push({
      id: 23,
      name: "Tim",
      job: "teaching"
    });

    arr3.push({
      id: 24,
      name: "Kira",
      job: "growth"
    });

    arr3.push({
      id: 33,
      name: "Whiskey",
      job: "eating"
    });

    var arr3Soln = arr3.slice();

    function comp2(a, b) {
      if (a.id < b.id) {
        return 1;
      } else if (a.id > b.id) {
        return -1;
      }
      return 0;
    }

    arr3Soln.sort(comp2);

    expect(insertionSort(arr3, comp2)).toEqual(arr3Soln);
  });
});
