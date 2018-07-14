Write a function called letter_counter which accepts a string and returns a function. When the inner function is invoked it should accept a parameter which is a letter, and the inner function should return the number of times that letter appears in the string passed to letter_counter. This inner function should be case insensitive.

Examples

```py
counter = letter_counter('Amazing')

counter('a') # 2
counter('m') # 1

counter2 = letter_counter('This Is Really Fun!')

counter2('i') # 2
counter2('t') # 1
```
