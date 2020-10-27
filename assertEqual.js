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

// Test Code
assertEqual("String Identical", "String Identical");
assertEqual("abc", "abc");
assertEqual(1, 1);
assertEqual(10.0, 10.0);
assertEqual(12e3, 12e3);
assertEqual(true, true);
assertEqual(undefined, undefined);

assertEqual("String Not Identical", "String");
assertEqual("abc", "def");
assertEqual("abc", "123");
assertEqual(1, 10);
assertEqual(-45, 1.44);
assertEqual(12e3, 12e-3);
assertEqual(12e3, NaN);
assertEqual(true, false);
assertEqual(NaN, NaN);
