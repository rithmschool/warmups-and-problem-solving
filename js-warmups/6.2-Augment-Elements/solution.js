function augmentElements(array, aug) {
  if (array.length === 1) {
    return [array[0].concat([aug])];
  }
  let res = augmentElements(array.slice(0, -1), aug);
  res.push(array[array.length - 1].concat(aug));
  return res;
}
