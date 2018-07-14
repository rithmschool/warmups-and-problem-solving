def letter_counter(s):
    def inner(char):
        return len(list(c.lower() for c in s.lower() if c == char))
    return inner
