def is_odd_string(string):
    total = sum((ord(c) - 96) for c in string.lower()) or 0
    return total % 2 == 1
