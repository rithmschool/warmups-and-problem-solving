function minimizeZeroes(array) {
  if (array.length === 1) {
    return [array[0]];
  }
  let res = minimizeZeroes(array.slice(0, -1));
  if (res[res.length - 1] !== 0 || array[array.length - 1] !== 0) {
    res.push(array[array.length - 1]);
  }
  return res;
}
