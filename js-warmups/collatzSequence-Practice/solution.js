function collatzSequenceIterative(num) {
  if (!(Number.isInteger(num) && num > 0)) {
    return "Input must be a positive whole number.";
  }

  var arr = [num];
  var current = num;

  while (current !== 1) {
    if (current % 2 === 0) {
      current = current / 2;
    } else {
      current = 3 * current + 1;
    }
    arr.push(current);
  }
  return arr;
}

function collatzSequenceRecursive(num) {
  if (!(Number.isInteger(num) && num > 0)) {
    return "Input must be a positive whole number.";
  }
  if (num === 1) {
    return [1];
  }
  return [num].concat(
    collatzSequenceRecursive(num % 2 ? 3 * num + 1 : num / 2)
  );
}
