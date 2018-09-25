def sum_up_diagonals(lst):
    """Given a matrix [square list of lists], return sum of diagonals."""

    total = 0

    for i in range(len(lst)):
        total += lst[i][i]
        total += lst[i][-1 - i]

    return total

    # or
    #
    # return sum([lst[i][i] + lst[i][-1 - i] for i in range(len(list))])
