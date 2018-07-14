/**
 * For numbers less than 3 non-decimal digits, just return the
 *  string version of the number.
 *
 * For larger numbers, first get rid of the right-hand side by
 *  splitting the string on the decimal point.
 *
 * Then loop backwards through the number left of the decimal point,
 *  inserting a comma at every 3rd position.
 *
 *  Finally, put the decimal back in if applicable.
 */
function addCommas(num) {
  const strNum = num.toString();
  // if the stringified number is less than three digits on its own or with a decimal
  if (strNum.length <= 3 || (strNum.includes(".") && strNum.indexOf(".") < 3)) {
    return strNum;
  }

  // split into two strings
  let [theNum, decimal] = strNum.split(".");

  // keep track of where the comma should go
  let commaIndex = 0;

  // iterate backwards
  for (let i = theNum.length - 1; i >= 0; i--) {
    // every 3rd space should have a comma
    if (commaIndex > 0 && commaIndex % 3 === 0) {
      // slice the current number and inject a comma
      theNum = theNum.slice(0, i + 1) + "," + theNum.slice(i + 1);
    }
    commaIndex++;
  }

  // if there was a decimal, re-insert here
  if (decimal) {
    theNum += `.${decimal}`;
  }

  return theNum;
}

addCommas(1); // "1"
addCommas(1000); // "1,000"
addCommas(123456789); // "123,456,789"
addCommas(3.141592); // "3.141592"
addCommas(54321.99); // "54,321.99"
