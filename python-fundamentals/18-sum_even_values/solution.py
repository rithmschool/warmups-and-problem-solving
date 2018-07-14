def sum_even_values(*args):
    return sum(arg for arg in args if arg % 2 == 0) or 0
