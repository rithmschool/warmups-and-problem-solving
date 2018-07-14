Implement the following operations of a queue using two stacks

enqueue
dequeue

This must be done using the Stack constructor implemented below - make sure to write your time and space complexities for each function

```js
var q1 = new Queue();
q1.enqueue(3); // returns the queue
q1.enqueue(4); // returns the queue
q1.enqueue(5); // returns the queue
q1.enqueue(6).enqueue(7); // returns the queue
q1.dequeue(); // 3
q1.dequeue(); // 4
q1.dequeue(); // 5
q1.dequeue(); // 6
q1.dequeue(); // 7
q1.dequeue(); // null
```
