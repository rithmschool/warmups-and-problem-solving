Write a function called partition. This function accepts a list and a callback function (which you can assume returns True or False). The function should iterate over each element in the list and invoke the callback function at each iteration. If the result of the callback function is True, the element should go into one list. If it's False, the element should go into another list. When it's finished, partition should return both lists inside of one larger list.

Examples

```py
def is_even(num):
  return num % 2 == 0

def is_string(el):
  return isinstance(el, str)

partition([1, 2, 3, 4], is_even)
# [[2, 4], [1, 3]]

partition(["hi", None, 6, "bye"], is_string)
# [["hi", "bye"], [None, 6]]
```
