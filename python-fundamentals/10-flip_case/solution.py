def flip_case(string, letter):
    return "".join([
        char.swapcase()
        if char.lower() == letter.lower()
        else char
        for char in string
    ])
