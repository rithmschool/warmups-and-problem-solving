def remove_every_other(lst):
    return [val for i, val in enumerate(lst) if i % 2 == 0]
