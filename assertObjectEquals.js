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
 * Returns true if both objects have identical keys with identical values.
 * Expects shallow objects for comparison(!)
 * Otherwise you get back a big fat false!
 * @param  {Object} actual The obhect to test against
 * @param  {Object} expected The object to be tested
 */
const eqObjects = function(actual, expected) {
  for (const [key, value] of Object.entries(expected)) {
    if (Array.isArray(value)) {
      if (!eqArrays(value, actual[key])) return false;
    } else {
      if (actual[key] !== value) return false;
    }
  }
  return true;
};

/**
 * Logs a message to the console inidicating if the two shallow objects passes in are identical
 * @param  {Object} actual The object to compare
 * @param  {Object} expected The object to compare against
 */
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🟢 Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`🟥 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};


// Tests
/* assertObjectsEqual({}, {});
assertObjectsEqual({a: "a"}, {a: "a"});
assertObjectsEqual({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3});
assertObjectsEqual({"1": 1, "2": 2, "3": 3}, {"1": 1, "2": 2, "3": 3}); */
console.log("---");
//assertObjectsEqual({}, {a: 1, b: 2, c: 3});
assertObjectsEqual({a: 1, b: 2, c: 3}, {});
assertObjectsEqual({a: 1, b: 2, c: 3}, {a: 2, b: 2, c: 3});
assertObjectsEqual({"1": 1, "2": 2, "3": 3}, {"1": "d", "2": 2, "3": 3});
