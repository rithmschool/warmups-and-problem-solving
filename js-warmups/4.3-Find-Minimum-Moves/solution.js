/**
 * We can sort the array and iterate with two pointers.
 *  We constantly find the difference between the two pointers
 *  until we reach the middle, when we've balanced the array
 *  and that is how many moves it takes.
 */
function findMinMoves(nums) {
  nums = nums.sort((a, b) => a > b);

  let minMoves = 0;
  let left = 0;
  let right = nums.length - 1;

  // difference between right and left until middle is reached
  while (left < right) {
    minMoves += nums[right] - nums[left];
    left++;
    right--;
  }

  return minMoves;
}
