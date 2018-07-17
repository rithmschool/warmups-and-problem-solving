Create a constructor function for a WeightedGraph.It should inherit from the Graph constructor and have all the same methods except for adding an edge.Since weights will now be added with edges, the adjacency list should not only store the nodes which are connected to it but also the corresponding weight of the edge.

A PriorityQueue has been implemented for you.The PriorityQueue adds the LOWEST priority first(this is helpful for Dijkstra).

Implement the following method on the WeightedGraph.prototype

Dijkstra - this function should return an array with all the nodes that create the shortest path.

var g = new WeightedGraph()

g.addVertex('A');
g.addVertex('Z');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('H');
g.addVertex('Q');
g.addVertex('G');

g.addEdge('A', 'Z', 7)
g.addEdge('A', 'C', 8)

g.addEdge('Z', 'Q', 2)

g.addEdge('C', 'G', 4)

g.addEdge('D', 'Q', 8)

g.addEdge('E', 'H', 1)

g.addEdge('H', 'Q', 3)

g.addEdge('Q', 'C', 6)

g.addEdge('G', 'Q', 9)

g.Dijkstra('A', 'E') // ["A", "Z", "Q", "H", "E"]
g.Dijkstra('A', 'Q') // ["A", "Z", "Q"]
g.Dijkstra('A', 'G') // ["A", "C", "G"]
g.Dijkstra('A', 'D') // ["A", "Z", "Q", "D"]
