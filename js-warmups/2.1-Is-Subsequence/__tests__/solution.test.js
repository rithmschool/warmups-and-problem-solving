describe("UnitTests", function() {
  it("is_subsequence_input_1", function() {
    // Failure message:
    // expected isSubsequence('hello', 'hello world') to be true
    expect(isSubsequence("hello", "hello world")).toBe(true);
  });
  it("is_subsequence_input_2", function() {
    // Failure message:
    // expected isSubsequence('sing', 'sting') to be true
    expect(isSubsequence("sing", "sting")).toBe(true);
  });
  it("is_subsequence_input_3", function() {
    // Failure message:
    // expected isSubsequence('abc', 'abracadabra') to be true
    expect(isSubsequence("abc", "abracadabra")).toBe(true);
  });
  it("is_subsequence_input_4", function() {
    // Failure message:
    // expected isSubsequence('notasubstring', 'banana') to be false
    expect(isSubsequence("notasubstring", "banana")).toBe(false);
  });
  it("is_subsequence_input_5", function() {
    // Failure message:
    // expected isSubsequence('almost', 'almossssss') to be false
    expect(isSubsequence("almost", "almossssss")).toBe(false);
  });
  it("is_subsequence_input_6", function() {
    // Failure message:
    // expected isSubsequence('abc', 'acb') to be false
    expect(isSubsequence("abc", "acb")).toBe(false);
  });
});
