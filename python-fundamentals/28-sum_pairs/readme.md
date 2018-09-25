Write a function called sum_pairs which accepts a list and a number and returns the first pair 
of numbers that sum to the number passed to the function.

The returned pair should be a tuple.

Examples

```py
sum_pairs([4, 2, 10, 5, 1], 6) # (4, 2)
# (4, 2) comes before (5, 1)

sum_pairs([5, 1, 4, 8, 3, 2], 7) # (4, 3)
# (4, 3) completes before [5, 2]

sum_pairs([11, 20, 4, 2, 1, 5], 100) # ()
# no pairs sum to 100
```
