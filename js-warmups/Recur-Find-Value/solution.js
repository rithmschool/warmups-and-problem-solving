function seek(nums, sought) {
  for (let n of nums) {
    if (Array.isArray(n) && seek(n, sought)) return true;
    else if (n === sought) return true;
  }

  return false;
}
