Write a function called calculate that accepts these arguments:

- `operation`, a string which must be 'add', 'subtract', 'multiply', or 'divide'.

- `first`, which is a number

- `second`, which is another number

- `make_int`, a boolean (this should default to False)

- `message` which is a string (which can be omitted).

The function should calculate the result of the operation with the first and second keyword arguments.
(For example, for operation 'add' or 2 and 3, it should find the sum of 5).

If `make_int` is True, it should truncate this result to an integer (otherwise, you can return
the natural result of the operation).

The function should return the string "The result is " joined with the result of the operation, 
unless a message is supplied, in which case it should return the `message` + the result of the operation.

Examples

```py
calculate(
    operation='add',
    first=2,
    second=4
    message='You just added',
) # "You just added 6"

calculate(
    operation='divide',
    first=3.5,
    second=5
) # "The result is 0.7"

calculate(
    operation='divide',
    first=3.5,
    second=5,
    make_int=True
) # "The result is 0"
```
