Write a function called list_manipulation. This function should take in three parameters (a list, command, and location), along with an optional fourth parameter (a value).

If the command is "remove" and the location is "end", the function should remove the last value in the list and return the value removed.
If the command is "remove" and the location is "beginning", the function should remove the first value in the list and return the value removed.
If the command is "add" and the location is "beginning", the function should add the value (fourth parameter) to the beginning of the list and return the list.
If the command is "add" and the location is "end", the function should add the value (fourth parameter) to the end of the list and return the list.

Examples

```py
l = [1, 2, 3]
list_manipulation(l, "remove", "end" # 3)
l # [1, 2]
list_manipulation(l, "remove", "beginning") # 1
l # [2]
list_manipulation(l, "add", "beginning", 20) # [20, 2]
list_manipulation(l, "add", "end", 30) # [20, 2, 30]
```
