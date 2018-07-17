describe("UnitTests", function() {
  it("should_return_an_array_of_the_total_distance_and_the_shortest_path", function() {
    // Failure message:
    // This test has no failure messages
    var g = new WeightedGraph();

    g.addVertex("A");
    g.addVertex("Z");
    g.addVertex("C");
    g.addVertex("D");
    g.addVertex("E");
    g.addVertex("H");
    g.addVertex("Q");
    g.addVertex("G");

    g.addEdge("A", "Z", 7);
    g.addEdge("A", "C", 8);

    g.addEdge("Z", "Q", 2);

    g.addEdge("C", "G", 4);

    g.addEdge("D", "Q", 8);

    g.addEdge("E", "H", 1);

    g.addEdge("H", "Q", 3);

    g.addEdge("Q", "C", 6);

    g.addEdge("G", "Q", 9);

    expect(g.Dijkstra("A", "E")).toEqual(["A", "Z", "Q", "H", "E"]);
    expect(g.Dijkstra("A", "Q")).toEqual(["A", "Z", "Q"]);
    expect(g.Dijkstra("A", "G")).toEqual(["A", "C", "G"]);
    expect(g.Dijkstra("A", "D")).toEqual(["A", "Z", "Q", "D"]);
  });
});
