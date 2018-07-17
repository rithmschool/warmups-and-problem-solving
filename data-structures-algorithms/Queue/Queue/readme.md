- Write a constructor function for a Node - it should have a value property which is assigned to a value passed as a parameter to the
  constructor function - it should have a next property initialized to null

- Write a constructor function for a Queue
  - it should have a size property initialized to 0
  - it should have a first property initialized to null
  - it should have a last property initialized to null

Implement the following methods on the `Queue.prototype`

enqueue

This function adds the value to the end of the queue. This should be an O(1) operation and return the new size of the queue.

```js
var queue = new Queue();
queue.enqueue(10); // 1
queue.size; // 1
queue.enqueue(100); // 2
queue.size; // 2
queue.enqueue(1000); // 3
queue.size; // 3
```

dequeue

This function removes the value at the beginning of the queue. This should be an O(1) operation and return the value removed. Note: The tests for dequeue rely on enqueue working -

```js
var queue = new Queue();
queue.enqueue(10);
queue.enqueue(100);
queue.enqueue(1000);
var removed = queue.dequeue();
removed; // 10
queue.size; // 2
queue.dequeue();
queue.dequeue();
queue.size; // 0
```

peek

This function returns the first value in the queue.

```js
queue = new Queue();
queue.enqueue(10);
queue.enqueue(100);
queue.enqueue(1000);
queue.peek(); // 10
```

A queue is another commonly-used data structure in computer science. Like a stack, it basically consists of a list of nodes. Unlike a stack, however, a queue is a FIFO (first in, first out) data structure - the first thing to be added to the queue will also be the first thing to be removed.

As a bonus, refactor your code to use ES2015 class syntax!
