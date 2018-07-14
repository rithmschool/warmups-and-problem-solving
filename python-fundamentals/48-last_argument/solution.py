def last_argument(*args):
    try:
        return args[-1]
    except IndexError:
        return None
