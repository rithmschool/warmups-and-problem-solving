describe("UnitTests", function() {
  it("default_comparator", function() {
    // Failure message:
    // This test has no failure messages
    var arr = [
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
    var arrSoln = arr.slice();
    arrSoln.sort((a, b) => a - b);
    expect(bubbleSort(arr)).toEqual(arrSoln);

    expect(bubbleSort([])).toEqual([]);

    expect(bubbleSort([-11])).toEqual([-11]);

    var arr2 = [5, 4, 3, 2, 1];
    var arr2Soln = arr2.slice();
    arr2Soln.sort((a, b) => a - b);
    expect(bubbleSort(arr2)).toEqual(arr2Soln);
  });
  it("compare_strings", function() {
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
    expect(bubbleSort(arr, strComp)).toEqual(arrSoln);

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

    expect(bubbleSort(arr3, comp2)).toEqual(arr3Soln);
  });
});
