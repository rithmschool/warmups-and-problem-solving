def find_factors(num):
    """Find factors of num, in increasing order."""

    return [n for n in range(1, num + 1) if num % n == 0]

    # or could write by hand with a while loop
    #
    # factors = []
    #
    # while(n <= num):
    #     if num % n == 0:
    #         factors.append(n)
    #     n += 1
    #
    # return factors
