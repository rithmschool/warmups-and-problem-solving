def calculate(operation, first, second, make_int=False, message=None):
    """Perform operation on first + second, truncating to int if make_int.

    Returns "'The result is ...' or message.
    """

    if message is None:
        message = 'The result is'

    if operation == "add":
        res = first + second
    elif operation == "subtract":
        res = first - second
    elif operation == "multiply":
        res = first * second
    elif operation == "divide":
        res = first / second
    else:
        raise ValueError("Invalid Operation")

    if make_int:
        res = int(res)

    return f"{message} {res}"
