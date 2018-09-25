def all_lists(lst):
    """Are all items a list?"""

    for item in lst:
        if not isinstance(item, lst):
            return False

    return True

    # Alternate possibilities: use all() with a generator comprehension,
    # though that isn't something we've covered yet:
    #
    # return all(isinstance(item, list) for item in lst)
