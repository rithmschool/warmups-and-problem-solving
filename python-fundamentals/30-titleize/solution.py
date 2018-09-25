def titleize(phrase):
    """Return phrase in title case."""

    # there's a built-in method for this!
    return phrase.title()

    # or, if you didn't know that, could capitalize each word by hand
    # return ' '.join([s.capitalize() for s in phrase.split(' ')])
