VOWELS = set("aeiou")


def vowel_count(phrase):
    """Return frequency map of vowels."""

    phrase = phrase.lower()
    counter = {}

    for ltr in phrase:
        if ltr in VOWELS:
            counter[ltr] = counter.get(ltr, 0) + 1

    return counter