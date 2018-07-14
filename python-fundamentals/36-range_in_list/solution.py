def range_in_list(lst, start=0, end=None):
    if end is None:
        end = len(lst)
    return sum(lst[start:end + 1])
