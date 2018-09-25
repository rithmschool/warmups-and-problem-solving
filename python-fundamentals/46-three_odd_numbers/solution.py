def three_odd_numbers(nums):
    """Are any 3 seq numbers odd?"""

    for i in range(len(nums) - 2):
        if (nums[i] + nums[i + 1] + nums[i + 2]) % 2 != 0:
            return True

    return False
