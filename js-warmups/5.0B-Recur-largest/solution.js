function largest(nums) {
  if (nums.length === 0) return undefined;

  let largestAfterMe = largest(nums.slice(1));

  if (largestAfterMe === undefined) return nums[0];
  else if (nums[0] > largestAfterMe) return nums[0];
  else return largestAfterMe;
}
