Implement the following methods on the Graph.prototype

removeEdge - this function should accept two nodes and remove the edge between them. It should modify the adjacency list to ensure that both values are not in each array for the two nodes which no longer contain the edge.

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

graph.removeEdge("B", "A");
graph.removeEdge("C", "D");

graph.adjacencyList["A"]; // // contains 'C'
graph.adjacencyList["B"]; // contains 'D'
graph.adjacencyList["C"]; // contains 'A'
graph.adjacencyList["D"]; // contains 'B'
```

removeVertex - this function should remove the node in the array of nodes and also remove all edges that the removed node previously contained.

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

graph.removeVertex("C");
graph.removeVertex("B");

graph.adjacencyList["A"]; // still exists
graph.adjacencyList["D"]; // still exists
```
