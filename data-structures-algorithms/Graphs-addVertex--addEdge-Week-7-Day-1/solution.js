function Graph() {
  this.adjacencyList = {};
}

Graph.prototype.addVertex = function(vertex) {
  this.adjacencyList[vertex] = [];
};

Graph.prototype.addEdge = function(vertex1, vertex2) {
  this.adjacencyList[vertex1].push(vertex2);
  this.adjacencyList[vertex2].push(vertex1);
};
