In this exercise, you'll build a "polish notation calculator".

Polish notation is a different way to write an artithmetic expression. For example, instead of writing "1 + 2 _ 3", as we would in normal ("infix") style, we could write it with the operators to the left of their arguments. This expression would become "+ 1 _ 2 3".

You can read a polish notation expression backwards to see exactly what it does --- in this case, multiply 2 times 3, then add that result to 1.

Your function will be given a string which contains space-separated positive integers and operators (+, -, \*, and /), like "+ 1 2". It should return the value of the expression.

Some tests (along with how this expression would be written in infix style, to help you understand this format of expressions):

```js
calc("+ 1 2"); // 3 (same as 1 + 2)
calc("_ 2 + 1 2"); // 6 (same as 2 _ (1 + 2))
calc("+ 9 _ 2 3"); // 15 (same as 9 + (2 _ 3))
```

Also make sure you have non-commutative operators (subtraction and division) working:

```js
calc("- 1 2"); // -1 (same as 1 - 2)
calc("- 9 _ 2 3"); // 3 (same as 9 - (2 _ 3))
calc("/ 6 - 4 2"); // 3 (same as 6 / (4 - 2))
```

Hint:
You'll want to turn the expression into an array and work through it backwards. Do this by hand and see how it feels.
