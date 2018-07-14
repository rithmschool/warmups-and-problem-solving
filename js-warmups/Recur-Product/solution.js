function prod(nums) {
  if (nums.length === 0) return 1;

  return nums[0] * prod(nums.slice(1));
}
