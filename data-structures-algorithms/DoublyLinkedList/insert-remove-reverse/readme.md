Implement the following on the DoublyLinkedList.prototype

\_\_insert

This internal/helper function should insert a node at a specified index in a DoublyLinkedList. It should return true if the index is valid, and false if the index is invalid (less than 0 or greater than the length of the list).

remove

This function should remove a node at a specified index in a DoublyLinkedList. It should return the removed node. if the index is valid, or undefined if the index is invalid.

reverse

This function should reverse all of the nodes in a DoublyLinkedList, and should return the list.

Examples

(Note: you don't need to re-implement push, the tests will be provided with it)

```js
var doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5).push(10).push(15).push(20);
doublyLinkedList.**insert(2,12); // true
doublyLinkedList.**insert(100,12); // false
doublyLinkedList.length // 5
doublyLinkedList.head.val // 5
doublyLinkedList.head.next.val // 10
doublyLinkedList.head.next.next.val // 12
doublyLinkedList.head.next.next.next.val // 15
doublyLinkedList.head.next.next.next.next.val // 20

var doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5).push(10).push(15).push(20);
doublyLinkedList.remove(2).val; // 15
doublyLinkedList.remove(100); // undefined
doublyLinkedList.length // 3
doublyLinkedList.head.val // 5
doublyLinkedList.head.next.val // 10
doublyLinkedList.head.next.next.val // 20

var doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5).push(10).push(15).push(20)
doublyLinkedList.reverse(); // singlyLinkedList;
doublyLinkedList.length; // 4
doublyLinkedList.head.val); // 20
doublyLinkedList.head.next.val; // 15
doublyLinkedList.head.next.next.val; // 10
doublyLinkedList.head.next.next.next.val; // 5
```
