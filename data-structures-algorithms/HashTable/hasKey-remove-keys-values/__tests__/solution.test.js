describe("UnitTests", function() {
  it("lists_all_the_values_in_an_array", function() {
    // Failure message:
    // This test has no failure messages
    var h = new HashTable();

    h.set("cat", "Felis catus");
    h.set("dog", "Canis familiaris");
    h.set("porcupine", "Erethizon dorsatum");

    let vals = h.values();
    vals.sort();
    expect(vals).toEqual([
      "Canis familiaris",
      "Erethizon dorsatum",
      "Felis catus"
    ]);
  });
  it("removes_keys_and_values_from_the_hash_table", function() {
    // Failure message:
    // This test has no failure messages
    var h = new HashTable();

    h.set("cat", "Felis catus");
    h.set("dog", "Canis familiaris");
    h.set("porcupine", "Erethizon dorsatum");

    h.delete("cat");
    expect(h.has("cat")).toBe(false);

    h.delete("unicorn");
    expect(h.has("unicorn")).toBe(false);
  });
  it("keys_lists_all_the_keys_in_an_arra", function() {
    // Failure message:
    // This test has no failure messages
    var h = new HashTable();

    h.set("cat", "Felis catus");
    h.set("dog", "Canis familiaris");
    h.set("porcupine", "Erethizon dorsatum");

    let keys = h.keys();
    keys.sort();
    expect(keys).toEqual(["cat", "dog", "porcupine"]);
  });
  it("has_returns_true_if_the_key_exists_or_false_if_not", function() {
    // Failure message:
    // This test has no failure messages
    var h = new HashTable();

    h.set("cat", "Felis catus");
    h.set("dog", "Canis familiaris");
    h.set("porcupine", "Erethizon dorsatum");
    expect(h.has("cat")).toBe(true);
    expect(h.has("dog")).toBe(true);
    expect(h.has("unicorn")).toBe(false);
  });
});
