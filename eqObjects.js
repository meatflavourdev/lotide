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
 * Returns true if both objects have identical keys with identical values.
 * Expects shallow objects for comparison(!)
 * Otherwise you get back a big fat false!
 * @param  {Object} actual The obhect to test against
 * @param  {Object} expected The object to be tested
 */
const eqObjects = function(actual, expected) {
  for (const [key, value] of Object.entries(expected)) {
    if (actual[key] !== value) return false;
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const empty = {};
assertEqual(eqObjects(empty, empty), true); // => true
assertEqual(eqObjects(empty, abc), false); // => true