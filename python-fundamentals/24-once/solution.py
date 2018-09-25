def once(fn):
    """Return new function that allows calling passed-in function only once."""

    def inner(*args, **kwargs):
        """Call inner function."""

        if inner.called:
            return None

        inner.called = True
        return fn(*args, **kwargs)

    inner.called = False
    return inner
