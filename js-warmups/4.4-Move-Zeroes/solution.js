/**
 * Strategy:
 * - keep pointer, `insertIdx`, at first zero
 * - loop over each num in nums
 *   - at val that isn't zero, place it at `insertIdx`
 *     - then increment `inesertPos` and repeat
 * - after loop, `insertIdx` is at index where all zeroes should go
 */

function moveZeroes(nums) {
  let insertIdx = 0;

  // iterate thru arr, swapping out zeroes for other numbers
  for (let num of nums) {
    if (num !== 0) {
      nums[insertIdx] = num;
      insertIdx++;
    }
  }

  // put zeroes back in, starting at insert position until end
  while (insertIdx < nums.length) {
    nums[insertIdx] = 0;
    insertIdx++;
  }

  return nums;
}
