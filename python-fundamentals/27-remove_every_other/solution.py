def remove_every_other(lst):
    """Return a new list of other item."""

    return lst[::2]

    # Okay way
    #
    # return [val for i, val in enumerate(lst) if i % 2 == 0]
