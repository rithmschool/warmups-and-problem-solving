Write a function called nth, which accepts a list and a number and returns the element in the list at index number. If number is negative, the nth element from the end is returned.

You can assume that number will always be between the negative value of the list length, and the list length minus 1.

Examples

```py
lst = ['a', 'b', 'c', 'd']
nth(lst, 1) # 'b'
nth(lst, -2) # 'c'
nth(lst, 0) # 'a'
nth(lst, -4) # 'a'
nth(lst, -1) # 'd'
nth(lst, 3) # 'd'
```
