describe("UnitTests", function() {
  it("removeVertex_should_remove_the_vertex_as_well_as_any_edges", function() {
    // Failure message:
    // This test has no failure messages
    graph = new Graph();
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
    expect(graph.adjacencyList["A"]).toBeDefined();
    expect(graph.adjacencyList["D"]).toBeDefined();
    expect(graph.adjacencyList["B"]).toBeUndefined();
    expect(graph.adjacencyList["C"]).toBeUndefined();
    expect(graph.adjacencyList["A"]).not.toContain("C");
  });
  it("removeEdge_should_remove_the_vertices_from_the_adjacency_list", function() {
    // Failure message:
    // This test has no failure messages
    graph = new Graph();
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
    expect(graph.adjacencyList["A"]).toContain("C");
    expect(graph.adjacencyList["B"]).toContain("D");
    expect(graph.adjacencyList["C"]).toContain("A");
    expect(graph.adjacencyList["D"]).toContain("B");
    expect(graph.adjacencyList["B"]).not.toContain("A");
    expect(graph.adjacencyList["A"]).not.toContain("B");
  });
});
