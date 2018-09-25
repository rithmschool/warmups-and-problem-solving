Write a function called is_odd_string which returns True if sum of each character's position in the alphabet is odd.

For example, "a" is in the first position, "b" is in the second position, and so on.

If the sum is even, return False.

Hint: one way you could do this would be to find a function that
returns the ASCII value of a character in Python.

Examples

```py
is_odd_string('a') # True
is_odd_string('aaaa') # False
is_odd_string('amazing') # True
is_odd_string('veryfun') # True
is_odd_string('veryfunny') # False
```
