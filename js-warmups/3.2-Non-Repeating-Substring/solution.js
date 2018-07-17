/**
 * Sliding window approach, build a substring as long as
 *  the current character is not equal to the previous character.
 *  If the current is equal, reset the substring
 */
function nonRepeatSubstring(str) {
  if (str.length <= 1) {
    return str;
  }
  let sub = str[0];
  let currSub = str[0];
  for (let i = 1; i < str.length; i++) {
    // if the current char is equal to the previous char
    if (str[i] === str[i - 1]) {
      // reset the current substring
      currSub = str[i];
    } else {
      // add to the current substring
      currSub += str[i];
      // store the longer of the two substrings
      if (currSub.length > sub.length) {
        sub = currSub;
      }
    }
  }
  return sub;
}
