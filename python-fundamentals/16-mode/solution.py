def mode(nums):
    """Return most-common value in list."""

    # Make frequency counter of num:freq
    counts = {}

    for num in nums:
        counts[num] = counts.get(num, 0) + 1

    # find the highest value (the most frequent number)

    max_value = max(counts.values())

    # now we need to see at which index the highest value is at

    for (num, freq) in counts.items():
        if freq == max_value:
            return num
