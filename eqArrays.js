/**
 * Logs message to the console remarking on the equality of the specified parameters
 * @param  {*} actual The value to test against
 * @param  {*} expected The value to be tested
 */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🟥 Assertion Failed: ${actual} === ${expected}`);
  }
};
/**
 * Compares two shallow arrays and returns true if they contain the same elements
 * @param  {*[]} actual The array to test against
 * @param  {*[]} expected The array to be tested
 * @return {boolean} True if the arrays contain the same elements, false if not or if arrays are not shallow
 */
const eqArrays = function(actual, expected) {
  for (const [key] of Object.entries(actual)) {
    if (actual[key] !== expected[key]) {
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([true], [true]), true);
assertEqual(eqArrays([true], [false]), false);
assertEqual(eqArrays([true, false], [true, false]), true);
assertEqual(eqArrays([true, false], [false, true]), false);

assertEqual(eqArrays(["string"], ["string"]), true);
assertEqual(eqArrays(["string", "test"], ["string", "test"]), true);
assertEqual(eqArrays(["string"], ["boop"]), false);
assertEqual(eqArrays(["string", "test"], ["string", "meep"]), false);

assertEqual(eqArrays([1], [3]), false);
assertEqual(eqArrays([1], [1]), true);
assertEqual(eqArrays([], []), true);

assertEqual(eqArrays([{a: 1}, {b: 2}], [{a: 1}, {b: 2}]), false);
assertEqual(eqArrays([[1], 2, 3], [[1], 2, 3]), false);

assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);