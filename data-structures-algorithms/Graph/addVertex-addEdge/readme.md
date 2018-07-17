Implement the following methods on the Graph.prototype

addVertex- this function should add a node to the graph and place a new key in the adjacency list with the value of an empty array.

```js
var graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.adjacencyList["A"]; // []
graph.adjacencyList["B"]; // []
graph.adjacencyList["C"]; // []
```

addEdge - this function should add an edge between two nodes in the graph and place each value of the nodes in each array for the value of the node in the adjacency list.

```js
var graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

graph.adjacencyList["A"]; // contains both ('B', 'C')
graph.adjacencyList["B"]; // contains both ('A', 'D')
graph.adjacencyList["C"]; // contains both ('A', 'D')
graph.adjacencyList["D"]; // contains both ('C', 'B')
```
