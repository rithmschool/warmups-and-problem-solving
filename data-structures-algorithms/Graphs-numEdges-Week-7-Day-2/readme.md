Add the following function to the Graph.prototype (addVertex and addEdge have been implemented to help).

numEdges - returns the number of edges in the graph.

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

graph.numEdges(); // 4

graph2 = new Graph();

graph2.addVertex("A");
graph2.addVertex("B");
graph2.addVertex("C");

graph2.addEdge("A", "B");
graph2.addEdge("A", "C");

graph2.numEdges(); // 2
```
