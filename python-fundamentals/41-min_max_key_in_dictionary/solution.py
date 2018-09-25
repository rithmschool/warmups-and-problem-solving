def min_max_key_in_dictionary(d):
    """Return [min-keys, max-keys] in d."""

    keys = d.keys()

    return [min(keys), max(keys)]
