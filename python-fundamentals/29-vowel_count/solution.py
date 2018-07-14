def vowel_count(string):
    lower_s = string.lower()
    return {
        letter: lower_s.count(letter)
        for letter in string
        if letter in "aeiou"
    }
