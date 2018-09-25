def includes(collection, val, start=None):
    """Is val in collection, starting at index start?"""

    if isinstance(collection, dict):
        return val in collection.values()

    if start is None:
        return val in collection

    return val in collection[start:]
