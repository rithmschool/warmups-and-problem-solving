def running_average():
    """
    Keep track of these variables in the outer function
     to be closed over by the inner function
    """
    accumulator = 0
    size = 0

    def inner(number):
        nonlocal accumulator  # reference parent function's accumulator
        nonlocal size  # reference parent function's size

        accumulator += number
        size += 1

        return accumulator / size

    return inner

#
# possible to solve using function attributes
#
# def running_average():
#   running_average.accumulator = 0
#   running_average.size = 0

#   def inner(number):
#     running_average.accumulator += number
#     running_average.size += 1
#     return running_average.accumulator / running_average.size

#   return inner
