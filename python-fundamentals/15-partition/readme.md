Write a function called partition. This function accepts a list and a callback function (which you can assume returns True or False). The function should iterate over each element in the list and invoke the callback function at each iteration. If the result of the callback function is True, the element should go into one list. If it's False, the element should go into another list. When it's finished, partition should return both lists inside of one larger list.

Examples

```py
def isEven(num):
  return num % 2 == 0

def isString(el):
  return isinstance(el, str)

partition([1, 2, 3, 4], isEven)
# [[2, 4], [1, 3]]

partition(["hi", None, 6, "bye"], isString)
# [["hi", "bye"], [None, 6]]
```
