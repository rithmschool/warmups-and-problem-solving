def calculate(**kwargs):
    first = kwargs.get('first', 0)
    second = kwargs.get('second', 0)
    is_float = kwargs.get('make_float', False)
    message = kwargs.get('message', 'The result is')

    operation_lookup = {
        'add': first + second,
        'subtract': first - second,
        'multiply': first * second,
        'divide': first / second,
    }

    operation_value = operation_lookup[kwargs.get('operation', '')]

    if is_float:
        return "{} {}".format(message, float(operation_value))
    return "{} {}".format(message, int(operation_value))
