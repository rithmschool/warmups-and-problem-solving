def letter_counter(phrase):
    """Return function that provides freq counter."""

    phrase = phrase.lower()

    def inner(char):
        """Return frequency of char in phrase, case insensitively."""

        return phrase.count(char.lower())

    return inner
