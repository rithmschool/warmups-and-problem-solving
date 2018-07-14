def partition(lst, fn):
    return [
        [val for val in lst if fn(val)],
        [val for val in lst if not fn(val)]
    ]
