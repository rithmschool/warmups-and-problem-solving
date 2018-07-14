describe("UnitTests", function() {
  it("validParens_is_a_function", function() {
    // Failure message:
    // you must have a function named 'validParens'
    expect(typeof validParens === "function").toBe(true);
  });
  it("empty_string_is_true", function() {
    // Failure message:
    // did not return true for empty string
    expect(validParens("")).toBe(true);
  });
  it("passes_true_tests", function() {
    // Failure message:
    // did not handle true cases
    expect(validParens("()[]()")).toBe(true);
    expect(validParens("{[]}")).toBe(true);
    expect(validParens("([{}])")).toBe(true);
    expect(validParens("(){}[]")).toBe(true);
    expect(validParens("()[]{}")).toBe(true);
    expect(validParens("(((((([]))))))")).toBe(true);
    expect(validParens("[[]][[{}]]")).toBe(true);
  });
  it("passes_false_tests", function() {
    // Failure message:
    // did not handle false cases
    expect(validParens("()[]{")).toBe(false);
    expect(validParens("([{})")).toBe(false);
    expect(validParens("({}[]")).toBe(false);
    expect(validParens("(}")).toBe(false);
    expect(validParens("((((([)]))))")).toBe(false);
    expect(validParens("[][{]}")).toBe(false);
  });
});
