def find_the_duplicate(nums):
    """Find duplicate number in nums."""

    seen = set()

    for num in nums:
        if num in seen:
            return num
        seen.add(num)

