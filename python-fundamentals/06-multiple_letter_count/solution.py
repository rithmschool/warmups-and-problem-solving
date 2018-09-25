def multiple_letter_count(phrase):
    """Return dict of {ltr: frequency} from phrase."""

    counter = {}

    for ltr in phrase:
        counter[ltr] = counter.get(ltr, 0) + 1

    return counter
