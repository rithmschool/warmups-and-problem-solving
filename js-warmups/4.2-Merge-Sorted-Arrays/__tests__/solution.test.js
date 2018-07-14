describe("UnitTests", function() {
  it("test_merge", function() {
    // Failure message:
    // This test has no failure messages
    expect(merge([1, 4, 5, 7, 8], [2, 3, 6])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
  it("mergeSort_on_strings", function() {
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
    expect(mergeSort(arr, strComp)).toEqual(arrSoln);
  });
  it("mergeSort_default_comparator", function() {
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

    expect(mergeSort(arr)).toEqual(arrSoln);
    expect(mergeSort([])).toEqual([]);
    expect(mergeSort([-11])).toEqual([-11]);

    var arr2 = [5, 4, 3, 2, 1];
    var arr2Soln = arr2.slice();
    arr2Soln.sort((a, b) => a - b);
    expect(mergeSort(arr2)).toEqual(arr2Soln);
  });
  it("mergeSort_on_objects", function() {
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

    expect(mergeSort(arr3, comp2)).toEqual(arr3Soln);
  });
});
