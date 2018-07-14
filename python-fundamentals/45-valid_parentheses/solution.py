def valid_parentheses(parens):
    count = 0
    i = 0
    while i < len(parens):
        if parens[i] == '(':
            count += 1
        if parens[i] == ')':
            count -= 1
        if count < 0:
            return False
        i += 1
    return count == 0
