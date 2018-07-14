def sum_up_diagonals(lst):
    total = 0

    for i, val in enumerate(lst):
        total += lst[i][i]
        total += lst[i][-1 - i]
    return total
