def intersection(l1, l2):
    """Return intersection of two lists."""

    set2 = set(l2)

    return [val for val in l1 if val in set2]

    # Alternatively, using built-in set math:
    # return list(set(l1) & set(l2))

