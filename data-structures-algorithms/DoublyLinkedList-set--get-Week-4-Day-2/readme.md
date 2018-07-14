Implement the following on the DoublyLinkedList.prototype

\_\_get

This internal/helper function should find a node at a specified index in a DoublyLinkedList. It should return the found node.

set
This function should accept an index and a value and update the value of the node in the DoublyLinkedList at the index with the new value. It should return true if the node is updated successfully, or false if an invalid index is passed in.

Examples

(Note: you don't need to re-implement push, the tests will be provided with it.)

```js
var doublyLinkedList = new DoublyLinkedList();

doublyLinkedList
  .push(5)
  .push(10)
  .push(15)
  .push(20);
doublyLinkedList.__get(0).val; // 5
doublyLinkedList.__get(1).val; // 10
doublyLinkedList.__get(2).val; // 15
doublyLinkedList.__get(3).val; // 20
doublyLinkedList.__get(4); // null

doublyLinkedList.set(0, 10); // true
doublyLinkedList.length; // 4
doublyLinkedList.head.val; // 10

doublyLinkedList.set(10, 10); // false

doublyLinkedList.set(2, 100); // true
doublyLinkedList.head.next.next.val; // 100
```
