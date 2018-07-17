Implement the following on the `SinglyLinkedList.prototype`

unshift

This function should take in a value and add a node to the beginning of the SinglyLinkedList. It should return the list.

shift

This function should remove a node at the beginning of the SinglyLinkedList. It should return the value of the node removed.

Examples

```js
var singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.unshift(5); // singlyLinkedList
singlyLinkedList.length; // 1
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 5

singlyLinkedList.unshift(10); // singlyLinkedList
singlyLinkedList.length; // 2
singlyLinkedList.head.val; // 10
singlyLinkedList.head.next.val; // 5
singlyLinkedList.tail.val; // 5

singlyLinkedList.unshift(15); // singlyLinkedList
singlyLinkedList.length; // 3
singlyLinkedList.head.val; // 15
singlyLinkedList.head.next.val; // 10
singlyLinkedList.head.next.next.val; // 5
singlyLinkedList.tail.val; // 5

singlyLinkedList.shift(); // 15
singlyLinkedList.head.val; // 10
singlyLinkedList.tail.val; // 5
singlyLinkedList.length; // 2
singlyLinkedList.shift(); // 10
singlyLinkedList.length; // 1
singlyLinkedList.shift(); // 5
singlyLinkedList.length; // 0
singlyLinkedList.shift(); // undefined
singlyLinkedList.length; // 0
```
