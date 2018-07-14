def includes(item, val, start=None):
    if type(item) == dict:
        return val in item.values()
    if start is None:
        return val in item
    return val in item[start:]
