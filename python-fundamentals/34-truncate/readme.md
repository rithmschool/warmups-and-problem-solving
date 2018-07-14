Write a function called truncate which takes in a string and a number.

The function should truncate the string to a shorter string containing at most number characters.

If the string gets truncated, the truncated return string should have a "..." at the end.

Because of this, the smallest number passed in as a second argument should be 3.

Examples

```py
truncate("Cool", 2) # "Truncation must be at least 3 characters."
truncate("Cool", 1) # "Truncation must be at least 3 characters."
truncate("Cool", 0) # "Truncation must be at least 3 characters."
truncate("Hello World", 6) # "Hel..."
truncate("Problem solving is the best!", 10) # "Problem..."
truncate("Another test", 12) # "Another t..."
truncate("Woah", 4) # "W..."
truncate("Woah", 3) # "..."
truncate("Yo", 100) # "Yo")
truncate("Holy guacamole!", 152) # "Holy guacamole!"
```
