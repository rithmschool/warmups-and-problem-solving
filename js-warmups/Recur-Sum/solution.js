function sum(nums) {
  if (nums.length === 0) return 0;

  return nums[0] + sum(nums.slice(1));
}
