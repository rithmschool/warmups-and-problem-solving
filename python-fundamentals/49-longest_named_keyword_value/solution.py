def longest_named_keyword_value(**kwargs):
    """Return value of longest-named keyword argument."""

    longest = ""

    for key in kwargs:
        if len(key) > len(longest):
            longest = key

    return kwargs[longest]

    # Or, a much shorter way, but trickier: the max() function can
    # take a "key function" (read read about it!)
    #
    # return kwargs[max(kwargs, key=len)]
