function numToText(str, arr = str.split(" "), result = [], count = 0) {
  if (arr.length === count) {
    return result.join(" ");
  }

  let lookup = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
  };

  let switched = lookup[arr[count]] || arr[count];
  return numToText(str, arr, result.concat(switched), ++count);
}
