def is_odd_string(phrase):
    """Is the sum of the character-positions odd?"""

    # to find the char position, we'll change it's ordinal ASCII number into
    # a 1-based number ("a" = 1, "b" = 2). To do that, let's subtract
    # this from it

    DIFF = ord("a") - 1

    total = sum((ord(c) - DIFF) for c in phrase.lower())

    return total % 2 == 1
