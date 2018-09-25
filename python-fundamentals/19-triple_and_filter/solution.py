def triple_and_filter(nums):
    """Return new list of tripled nums for those nums divisible by 4."""

    return [num * 3 for num in nums if num % 4 == 0]
