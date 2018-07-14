def only_strings(*args, **kwargs):
    vals = list(args)
    vals.extend(kwargs.values())
    return all([isinstance(s, str) for s in vals])
