def same_frequency(num1, num2):
    d1 = {letter: str(num1).count(letter) for letter in str(num1)}
    d2 = {letter: str(num2).count(letter) for letter in str(num2)}

    for key, val in d1.items():
        if not key in d2.keys() or d2[key] != val:
            return False
    return True
