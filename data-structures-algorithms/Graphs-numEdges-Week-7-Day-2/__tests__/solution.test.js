describe("UnitTests", function() {
  it("returns_the_number_of_edges", function() {
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

    expect(graph.numEdges()).toBe(4);

    graph2 = new Graph();
    graph2.addVertex("A");
    graph2.addVertex("B");
    graph2.addVertex("C");
    graph2.addEdge("A", "B");
    graph2.addEdge("A", "C");

    expect(graph2.numEdges()).toBe(2);
  });
  it("does_not_allow_for_setting_a_value_in_the_constructor", function() {
    // Failure message:
    // Do not set a value in the constructor for numEdges!
    graph2 = new Graph();
    expect(graph2.length).toBe(undefined);
    expect(graph2.numberEdges).toBe(undefined);
    expect(graph2.numberOfEdges).toBe(undefined);
    expect(graph2.edges).toBe(undefined);
    expect(graph2.edgeCount).toBe(undefined);
  });
});
