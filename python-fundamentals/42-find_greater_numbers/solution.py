def find_greater_numbers(lst):
    count = 0
    for i in range(len(lst)):
        for j in range(i+1, len(lst)):
            if lst[j] > lst[i]:
                count += 1
    return count
