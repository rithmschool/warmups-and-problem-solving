describe("UnitTests", function() {
  it("returns_true_if_an_average_pair_exists_otherwise_false", function() {
    // Failure message:
    // This test has no failure messages
  });
  it("should_return_false_for_empty_letters_string", function() {
    // Failure message:
    // 'abcd, '' should return false
    expect(constructNote("abcd", "")).toBe(false);
  });
  it("should_return_true_for_empty_message", function() {
    // Failure message:
    // '', 'abc' should return true
    expect(constructNote("", "abc")).toBe(true);
  });
  it("should_account_for_duplicates", function() {
    // Failure message:
    // 'aa', 'abcd' should return false
    expect(constructNote("aa", "abcd")).toBe(false);
  });
  it("should_handle_large_cases", function() {
    // Failure message:
    // 'skbjjjvnnd','fdjlkjfeburevjvnfnsjckjncjdnchbechbadhsd should return true
    expect(
      constructNote("skbjjjvnnd", "fdjlkjfeburevjvnfnsjckjncjdnchbechbadhsd")
    ).toBe(true);
  });
  it("should_return_true_if_all_letters_contained", function() {
    // Failure message:
    // 'abc', 'abcd' should return true
    expect(constructNote("abc", "abcd")).toBe(true);
  });
});
