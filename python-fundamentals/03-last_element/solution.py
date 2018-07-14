def last_element(l):
    try:
        return l[-1]
    except IndexError as e:
        return None
