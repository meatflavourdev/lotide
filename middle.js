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

/**
 * Logs a message to the console inidicating if the two shallow arrays passes in are identical
 * @param  {*[]} actual The array to compare
 * @param  {*[]} expected The array to compare against
 */
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🟥 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

/**
 * Logs message to the console remarking on the equality of the specified parameters
 * @param  {*} actual The value to test against
 * @param  {*} expected The value to be tested
 */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🟥 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/**
 * Returns an array containing the middle element(s) of a given array
 * @param  {*[]} arr The input array
 * @return {*[]} An array containing the middle element(s) if they exist
 */
const middle = function(arr) {
  if (!Array.isArray(arr)) return false;
  if (arr.length < 3) return [];
  if (arr.length % 2 === 1) return [arr[Math.floor(arr.length / 2)]];
  if (arr.length % 2 === 0) return [arr[arr.length / 2 - 1], arr[arr.length / 2]];
};

assertEqual(middle(undefined), false); // => false
assertEqual(middle(NaN), false); // => false
assertEqual(middle(null), false); // => false

assertArraysEqual(middle([undefined, undefined]), []); // => []
assertArraysEqual(middle([NaN, NaN]), []); // => []
assertArraysEqual(middle([null, null]), []); // => []

assertArraysEqual(middle([undefined, undefined, undefined]), []); // => []
assertArraysEqual(middle([null, null, null]), [null]); // => []

assertArraysEqual(middle([]), []); // => []
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]

assertArraysEqual(middle(["a"]), []); // => []
assertArraysEqual(middle(["a", "b", "c"]), ["b"]); // => ["b"]
assertArraysEqual(middle(["a", "b", "c", "d"]), ["b", "c"]); // => ["b", "c"]