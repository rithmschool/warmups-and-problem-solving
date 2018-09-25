def only_strings(*args, **kwargs):
    """Are all arguments to function strings?"""

    vals = list(args) + list(kwargs.values())

    return all([isinstance(s, str) for s in vals])
