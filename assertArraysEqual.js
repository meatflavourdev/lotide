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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🟥 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

assertArraysEqual([true], [true]);
assertArraysEqual([true, false], [true, false]);
assertArraysEqual(["string"], ["string"]);
assertArraysEqual(["string", "test"], ["string", "test"]);
assertArraysEqual([1], [1]);
assertArraysEqual([], []);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);

assertArraysEqual([true], [false]);
assertArraysEqual([true, false], [false, true]);
assertArraysEqual(["string"], ["boop"]);
assertArraysEqual(["string", "test"], ["string", "meep"]);
assertArraysEqual([1], [3]);
assertArraysEqual([{a: 1}, {b: 2}], [{a: 1}, {b: 2}]);
assertArraysEqual([[1], 2, 3], [[1], 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);