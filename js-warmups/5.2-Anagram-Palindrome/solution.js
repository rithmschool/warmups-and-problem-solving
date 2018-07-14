/**
 * Build a frequency count of all the letters,
 *  then loop through: if we find >1 odd value,
 *  it will be false (tolerate 1 odd value, which
 *  could be midpoint (fulcrum) of palindrome).
 *
 *  "bba"  ->  { b: 2, a: 1 }  [valid palindrome: bab]
 *  oddValues = 1
 *
 *  "ba" ->  {b: 1, a: 1}      [no valid palindrome]
 *  oddValues = 2
 */

function anagramPalindrome(word) {
  // build frequency counter
  let letterCounts = new Map();

  for (let letter of word) {
    letterCounts.set(letter, (letterCounts.get(letter) || 0) + 1);
  }

  // count odd values
  let oddValues = 0;

  for (let val of letterCounts.values()) {
    if (val % 2 !== 0) {
      oddValues += 1;
    }
  }
  return oddValues < 2;
}
