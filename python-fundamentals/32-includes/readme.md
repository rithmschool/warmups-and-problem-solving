Write a function called includes which accepts a collection, a value, and an optional starting index. The function should return True if the value exists in the collection when we search starting from the starting index. Otherwise, it should return False.

The collection can be a string, a list, or a dictionary:
If the collection is a string or a list, the third parameter is a starting index for where to search from.
If the collection is a dictionary, the function searches for the value among values in the dictionary; since objects have no sort order, the third parameter is ignored.

You can find out of an item is a string with "isinstance(item, str)",
if it is a list with "isinstance(item, list)" and a dict with
"isinstance(item, dict)".

Examples

```py
includes([1, 2, 3], 1) # True
includes([1, 2, 3], 1, 2) # False
includes({'a': 1, 'b': 2}, 1) # True
includes({'a': 1, 'b': 2}, 'a') # False
includes('abcd', 'b') # True
includes('abcd', 'e') # False
```
