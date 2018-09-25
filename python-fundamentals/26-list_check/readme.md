Write a function called `all_lists`, which accepts a list and returns True if each value in the list is a list. Otherwise the function should return False.

You can discover if an thing is a list with "isinstance(item, list)".

Examples

```py
all_lists([[], [1], [2, 3], (1, 2)]) # False
all_lists([1, True, [], [1], [2, 3]]) # False
all_lists([[], [1], [2, 3]]) # True
```
