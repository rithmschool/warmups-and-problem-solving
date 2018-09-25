def range_in_list(lst, start=0, end=None):
    """Return sum of numbers from start...end."""

    if end is None:
        end = len(lst)

    return sum(lst[start:end + 1])
