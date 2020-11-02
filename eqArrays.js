/**
 * Compares two shallow arrays and returns true if they contain the same elements
 * @param  {*[]} actual The array to test against
 * @param  {*[]} expected The array to be tested
 * @return {boolean} True if the arrays contain the same elements, false if not or if arrays are not shallow
 */
const eqArrays = function(actual, expected) {
  // Return false if input are not arrays
  if (!Array.isArray(actual) || !Array.isArray(expected)) return false;
  for (const [key] of Object.entries(actual)) {
    if (actual[key] !== expected[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;