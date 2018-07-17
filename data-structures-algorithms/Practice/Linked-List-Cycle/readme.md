Given a linked list, determine if it has a cycle in it. A cycle exists if any node points back to any previous node.

The function should be called listHasCycle and return a boolean.

Bonus: Solve this in constant O(1) space.

```js
const head1 = new ListNode(1);
const second1 = new ListNode(2);
const third1 = new ListNode(3);

head1.next = second1;
second1.next = third1;
third1.next = second1;

/*

First List Looks like this:

  1 -> 2 <-> 3  

*/

listHasCycle(head1); // true

const head2 = new ListNode(5);
const second2 = new ListNode(5);
const third2 = new ListNode(5);

head2.next = second2;
second2.next = third2;

/*

 Second List looks like this:

   5 -> 5 -> 5 -> null

*/

listHasCycle(head2); // false
```
