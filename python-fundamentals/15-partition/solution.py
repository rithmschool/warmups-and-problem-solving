def partition(lst, fn):
    """Partition lst by predicate fn into two lists, and return list of those two."""

    # Best solution:

    a = []
    b = []

    for val in lst:
        if fn(val):
            a.append(val)
        else:
            b.append(val)

    return [a, b]

    # Clever, but less optimal solution --- this runs fn() twice on each element,
    # not once:
    #
    # return [
    #     [val for val in lst if fn(val)],
    #     [val for val in lst if not fn(val)]
    # ]
