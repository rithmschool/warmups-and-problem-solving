Design a stack that supports push, pop, top, and retrieving the minimum element in constant time O(1).

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element (also known as "peek")
getMin() -- Retrieve the minimum element in the stack.

Example:

```js
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); --> Returns -3.
minStack.pop();
minStack.top(); --> Returns 0.
minStack.getMin();  --> Returns -2.
```

Credit: https://leetcode.com/problems/min-stack/description/
