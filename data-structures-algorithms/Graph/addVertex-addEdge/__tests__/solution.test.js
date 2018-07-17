describe("UnitTests", function() {
  it("addVertex_should_add_a_key_in_the_adjacency_list_with_a_value_as_an_empty_array", function() {
    // Failure message:
    // This test has no failure messages
    graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    expect(graph.adjacencyList["A"]).toEqual([]);
    expect(graph.adjacencyList["B"]).toEqual([]);
    expect(graph.adjacencyList["C"]).toEqual([]);
  });
  it("addEdge_should_add_the_appropriate_edges_to_the_adjacency_list", function() {
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
    expect(graph.adjacencyList["A"]).toContain("B", "C");
    expect(graph.adjacencyList["B"]).toContain("A", "D");
    expect(graph.adjacencyList["C"]).toContain("A", "D");
    expect(graph.adjacencyList["D"]).toContain("C", "B");
  });
});
