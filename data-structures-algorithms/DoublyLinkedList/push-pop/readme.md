Implement the following on the DoublyLinkedList.prototype:

push

This function should accept a value add a node to the end of the DoublyLinkedList with the given value. It should return the DoublyLinkedList.

pop

This function should remove a node at the end of the DoublyLinkedList. It should return the node removed.

Examples

```js
var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(5); // doublyLinkedList
doublyLinkedList.length; // 1
doublyLinkedList.head.val; // 5
doublyLinkedList.tail.val; // 5
doublyLinkedList.head.prev; // null
doublyLinkedList.push(10);
doublyLinkedList;
doublyLinkedList.length; // 2
doublyLinkedList.head.val; // 5
doublyLinkedList.head.next.val; // 10
doublyLinkedList.tail.val; // 10
doublyLinkedList.head.next.prev.val; // 10
doublyLinkedList.push(15);
doublyLinkedList;
doublyLinkedList.length; // 3
doublyLinkedList.head.val; // 5
doublyLinkedList.tail.val; // 15
doublyLinkedList.tail.prev.val; // 10
doublyLinkedList.head.next.next.val; // 15

doublyLinkedList.pop().val; // 15
doublyLinkedList.length; // 2
doublyLinkedList.pop().val; // 10
doublyLinkedList.length; // 1
doublyLinkedList.pop().val; // 5
doublyLinkedList.length; // 0
doublyLinkedList.pop(); // undefined
doublyLinkedList.length; // 0
```
