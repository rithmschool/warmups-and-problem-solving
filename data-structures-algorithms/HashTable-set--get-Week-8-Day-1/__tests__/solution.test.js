describe("UnitTests", function() {
  it("handles_set_and_get", function() {
    // Failure message:
    // This test has no failure messages
    var animalToSpecies = new HashTable();

    animalToSpecies.set("cat", "Felis catus");
    animalToSpecies.set("dog", "Canis familiaris");
    animalToSpecies.set("porcupine", "Erethizon dorsatum");

    expect(animalToSpecies.get("cat")).toEqual("Felis catus");
    expect(animalToSpecies.get("dog")).toEqual("Canis familiaris");
    expect(animalToSpecies.get("porcupine")).toEqual("Erethizon dorsatum");
    expect(animalToSpecies.get("unicorn")).toEqual(undefined);
  });
  it("handles_collisions", function() {
    // Failure message:
    // This test has no failure messages
    var hmap = new HashTable(3);

    hmap.set("a", "A");
    hmap.set("b", "B");
    hmap.set("c", "C");
    hmap.set("d", "D");
    hmap.set("e", "E");

    expect(hmap.get("a")).toEqual("A");
    expect(hmap.get("b")).toEqual("B");
    expect(hmap.get("c")).toEqual("C");
    expect(hmap.get("d")).toEqual("D");
    expect(hmap.get("e")).toEqual("E");
    expect(hmap.get("not in map")).toEqual(undefined);
  });
});
