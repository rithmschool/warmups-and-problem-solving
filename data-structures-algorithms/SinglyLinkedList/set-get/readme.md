Implement the following on the SinglyLinkedList.prototype

\_\_get

This internal/helper function should find a node at a specified index in a SinglyLinkedList. It should return the found node.

set

This function should accept an index and a value and update the value of the node in the SinglyLinkedList at the index with the new value. It should return true if the node is updated successfully, or false if an invalid index is passed in.

Examples

(Note: you don't need to re-implement push, the tests will be provided with it)

```js
var singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.push(5).push(10).push(15).push(20);
singlyLinkedList.**get(0).val // 5
singlyLinkedList.**get(1).val // 10
singlyLinkedList.**get(2).val // 15
singlyLinkedList.**get(3).val // 20
singlyLinkedList.\_\_get(4) // null

singlyLinkedList.set(0,10) // true
singlyLinkedList.length // 4
singlyLinkedList.head.val // 10

singlyLinkedList.set(10,10) // false

singlyLinkedList.set(2,100) // true
singlyLinkedList.head.next.next.val; // 100
```
