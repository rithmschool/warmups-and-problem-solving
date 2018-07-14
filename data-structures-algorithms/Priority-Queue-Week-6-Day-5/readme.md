Implement a PriorityQueue. Instead of inserting a value, you'll insert a node object which contains a val and priority property. Your PriorityQueue should have the highest priority at the top and maintain the structure of a MaxBinaryHeap.

Enqueue

This function should add a node to the PriorityQueue and should run in O(log(n)).

```js
var q = new PriorityQueue()
q.enqueue('a', 100)
q.enqueue('b', 1000)
q.enqueue('c', 2000)
q.values[0].val # 'c'
q.values[1].priority < q.values[0].priority # true
```

Dequeue

This function should remove the first node in the PriorityQueue and return the removed Node. It should run in O(log(n)) time.

```js
var q = new PriorityQueue()
q.enqueue('a', 100)
q.enqueue('b', 1000)
q.enqueue('c', 2000)
q.dequeue().val # 'c'
q.dequeue().val # 'b'
q.dequeue().val # 'a'
```

HINT - Use your MaxBinaryHeap implementation! This will look very similar to your MaxBinaryHeap implementation.
