/**
 * To reduce the lines of code, our strategy is to push the appropriate closing paren
 *  when we encounter an opening paren. Then when we encounter the closing paren, we
 *  can do a simple equality comparison to make sure the right thing is getting popped.
 */

function validParens(str) {
  const stack = [];

  for (let char of str) {
    if (char === "(") {
      stack.push(")");
    } else if (char === "[") {
      stack.push("]");
    } else if (char === "{") {
      stack.push("}");
    } else if (stack.length === 0 || stack.pop() !== char) {
      // note that calling stack.pop() in a comparison evaluation as we are here will actually pop the element
      return false;
    }
  }
  return stack.length === 0;
}

/**
 * Shorter version using an object because why not
 */

function validParensObj(str) {
  const stack = [];
  const parens = { "(": ")", "{": "}", "[": "]" };
  for (let char of str) {
    if (char in parens) stack.push(parens[char]);
    else if (stack.length === 0 || stack.pop() !== char) return false;
  }
  return stack.length === 0;
}
