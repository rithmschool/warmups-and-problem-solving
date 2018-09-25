def single_letter_count(word, letter):
    """How many times does letter appear in word (case-insensitively)?"""

    return word.lower().count(letter.lower())
