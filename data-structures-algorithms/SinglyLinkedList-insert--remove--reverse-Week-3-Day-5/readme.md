Implement the following on the SinglyLinkedList.prototype

\_\_insert

This internal/helper function should insert a node at a specified index in a SinglyLinkedList. It should return true if the index is valid, and false if the index is invalid (less than 0 or greater than the length of the list).

remove

This function should remove a node at a specified index in a SinglyLinkedList. It should return the removed node. if the index is valid, or undefined if the index is invalid.

reverse

This function should reverse all of the nodes in a SinglyLinkedList, and should return the list.

Examples

(Note: you don't need to re-implement push, the tests will be provided with it)

```js
var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20);
singlyLinkedList.**insert(2,12); // true
singlyLinkedList.**insert(100,12); // false
singlyLinkedList.length // 5
singlyLinkedList.head.val // 5
singlyLinkedList.head.next.val // 10
singlyLinkedList.head.next.next.val // 12
singlyLinkedList.head.next.next.next.val // 15
singlyLinkedList.head.next.next.next.next.val // 20

singlyLinkedList.\_\_insert(5,25); // true
singlyLinkedList.head.next.next.next.next.next.val //25
singlyLinkedList.tail.val // 25

var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20);
singlyLinkedList.remove(2).val; // 15
singlyLinkedList.remove(100); // undefined
singlyLinkedList.length // 3
singlyLinkedList.head.val // 5
singlyLinkedList.head.next.val // 10
singlyLinkedList.head.next.next.val // 20

var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20)
var currentHead = singlyLinkedList.head
var currentTail = singlyLinkedList.tail
singlyLinkedList.reverse(); // singlyLinkedList;

singlyLinkedList.head === currentTail // true
singlyLinkedList.tail === currentHead // true
singlyLinkedList.length; // 4
singlyLinkedList.head.val; // 20
singlyLinkedList.head.next.val; // 15
singlyLinkedList.head.next.next.val; // 10
singlyLinkedList.head.next.next.next.val; // 5
```
