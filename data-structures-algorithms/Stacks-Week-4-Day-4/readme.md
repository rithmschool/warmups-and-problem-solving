A stack is a commonly-used data structure in computer science. From Wikibooks (https://en.wikibooks.org/wiki/Data_Structures/Stacks_and_Queues):

A stack is a basic data structure that can be logically thought as linear structure represented by a real physical stack or pile, a structure where insertion and deletion of items takes place at one end called top of the stack. The basic concept can be illustrated by thinking of your data set as a stack of plates or books where you can only take the top item off the stack in order to remove things from it. This structure is used all throughout programming.
The basic implementation of a stack is also called a LIFO (Last In First Out) to demonstrate the way it accesses data.
One example of a stack is the function call stack in JavaScript. Another is the undo operation in a text editor - the editor can keep track of changes in a stack, and the last change to be made is the first one to be undone.

First implement a constructor function for a Node. Each node should have a value property and a next property. Value should be whatever is passed to the function and next should default to null.

Your stack should be implemented with the following properties

first - this should point to the node at the top of the stack
last - this should point to the node at the bottom of the stack
size - this should be the number of nodes in the stack

You are given two constructor functions: one for Node and one for Stack. Your goal is to implement the following methods on the Stack prototype:

push - takes in a node and puts it at the top of the stack. Should return the new size of the stack.

```js
var stack = new Stack();

stack.push(10); // 1
stack.first.value; // 10
stack.last.value; // 10
stack.push(100);
stack.first.value; // 100
stack.last.value; // 10
stack.push(1000);
stack.first.value; // 1000
stack.last.value; // 10

var stack = new Stack();

stack.push(10); // 1
stack.size; // 1
stack.push(100); // 2
stack.size; // 2
stack.push(1000); // 3
stack.size; // 3
```

pop - removes the node at the top of the stack and returns the value of that node.

Note: The tests for pop rely on push working. So try to implement push first, then pop.

```js
var stack = new Stack();

stack.push(10);
stack.push(100);
stack.push(1000);
var removed = stack.pop();
removed; // 1000
stack.size; // 2
stack.pop();
stack.pop();
stack.size; // 0
```

peek - returns the first value in the stack

```js
var stack = new Stack();
stack.push(10);
stack.push(100);
stack.push(1000);
stack.peek(); // 1000
```
