Implement the following on the SinglyLinkedList.prototype

rotate

This function should rotate all the nodes in the list by some number passed in. For instance, if your list looks like 1 -> 2 -> 3 -> 4 -> 5 and you rotate by 2, the list should be modified to 3 -> 4 -> 5 -> 1 -> 2. The number passed in to rotate can be any integer.

Time Complexity: O(N), where N is the length of the list.
Space Complexity: O(1)

Examples

(Note: push is implemented to help you test your rotate function)

```js
var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList
  .push(5)
  .push(10)
  .push(15)
  .push(20)
  .push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;

singlyLinkedList.rotate(3);
singlyLinkedList.head.val; // 20
singlyLinkedList.head.next.val; // 25
singlyLinkedList.head.next.next.val; // 5
singlyLinkedList.head.next.next.next.val; // 10
singlyLinkedList.head.next.next.next.next.val; // 15
singlyLinkedList.tail.val; // 15
singlyLinkedList.tail.next; // null

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList
  .push(5)
  .push(10)
  .push(15)
  .push(20)
  .push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;

singlyLinkedList.rotate(-1);
singlyLinkedList.head.val; // 25
singlyLinkedList.head.next.val; // 5
singlyLinkedList.head.next.next.val; // 10
singlyLinkedList.head.next.next.next.val; // 15
singlyLinkedList.head.next.next.next.next.val; // 20
singlyLinkedList.tail.val; // 20
singlyLinkedList.tail.next; // null

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList
  .push(5)
  .push(10)
  .push(15)
  .push(20)
  .push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;

singlyLinkedList.rotate(1000);
singlyLinkedList.head.val; // 5
singlyLinkedList.head.next.val; // 10
singlyLinkedList.head.next.next.val; // 15
singlyLinkedList.head.next.next.next.val; // 20
singlyLinkedList.head.next.next.next.next.val; // 25
singlyLinkedList.tail.val; // 25
singlyLinkedList.tail.next; // null
```
