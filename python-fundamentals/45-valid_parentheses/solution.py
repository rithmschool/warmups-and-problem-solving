def valid_parentheses(parens):
    """Are the parentheses valid?"""

    count = 0

    for p in parens:
        if p == '(':
            count += 1
        elif p == ')':
            count -= 1

        # fast fail: too many right parens
        if count < 0:
            return False

    return count == 0
