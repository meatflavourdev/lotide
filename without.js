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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🟥 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

/**
 * Returns a subset of a given array, removing unwanted elements.
 * @param  {*[]} source The array containing the set of elements to be filtered
 * @param  {*[]} itemsToRemove The elements to filter from the source array
 * @return {*[]} An array containing only elements not filtered
 */
const without = function(source, itemsToRemove) {
  let filtered = [];
  for (const [key] of Object.entries(source)) {
    if (!itemsToRemove.includes(source[key])) {
      filtered.push(source[key]);
    }
  }
  return filtered;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
