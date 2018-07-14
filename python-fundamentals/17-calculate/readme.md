Write a function called calculate that accepts a list of keyword arguments:

- `make_float`, a boolean which returns a float if True or an integer if False.
- `operation`, which is either 'add', 'subtract', 'multiply', or 'divide'.
- `first`, which is a number.
- `second`, which is another number.
- `message` which is a string.

The function should return the result of the operation with the first and second keyword arguments. The result of the operation with the first and second is an integer if the make_float keyword argument is False. Otherwise the result of the operation is a float.

The function should return the string "The result is " joined with the result of the operation, unless a message is supplied, in which case it should return the message keyword argument + the result of the operation.

Examples

```py
calculate(
make_float=False,
operation='add',
message='You just added',
first=2,
second=4
) # "You just added 6"

calculate(
make_float=True,
operation='divide',
first=3.5,
second=5
) # "The result is 0.7"
```
