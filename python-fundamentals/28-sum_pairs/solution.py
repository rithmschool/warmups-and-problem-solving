def sum_pairs(nums, goal):
    """Return tuple of first pair of nums that sum to goal."""

    already_visited = set()

    for i in nums:
        difference = goal - i

        if difference in already_visited:
            return (difference, i)

        already_visited.add(i)

    return ()
