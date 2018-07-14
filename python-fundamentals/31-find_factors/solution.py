def find_factors(num):
    factors = []
    i = 1
    while(i <= num):
        if num % i == 0:
            factors.append(i)
        i += 1
    return factors
