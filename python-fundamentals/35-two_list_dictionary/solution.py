def two_list_dictionary(keys, values):
    """Make dictionary from keys,values (if not enough vals, use None for missing."""

    out = {}

    for idx, val in enumerate(keys):
        if idx < len(values):
            out[keys[idx]] = values[idx] if idx < len(values) else None

    return out

    # Another way using a feature from Python's standard library. We don't expect
    # you to have found this one--but it's a good example of how knowing the
    # standard library is so useful!

    # from itertools import zip_longest
    # return dict(zip_longest(keys, values))
