function jumpGame(nums) {
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (max < i) return false; // max steps cannot reach position i
    max = Math.max(nums[i] + i, max);
  }

  return true;
}

function maxProductSubarray(nums) {
  let res = -Infinity;
  let min = 1;
  let max = 1;
  for (let num of nums) {
    [min, max] = [
      Math.min(num, min * num, max * num),
      Math.max(num, min * num, max * num)
    ];
    res = Math.max(res, max);
  }
  return res;
}
