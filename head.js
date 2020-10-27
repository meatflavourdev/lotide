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
 * Returns the first object in the specified array
 * @param  {*[]} arr An array of unspecified type and length
 * @return  {*} First item in the specified array
 */
const head = function(arr) {
  return arr[0];
};


// Test Cases -----------------------------------

// Empty Array
console.log(`Input: ${[]}`);
assertEqual(head([]), undefined);

// Array with single number
console.log(`Input: ${[1]}`);
assertEqual(head([1]), 1);

// Array with single boolean
console.log(`Input: ${[true]}`);
assertEqual(head([true]), true);

// Array with numbers
console.log(`Input: ${[5,6,7]}`);
assertEqual(head([5,6,7]), 5);

// Array with strings
console.log(`Input: ${["Hello", "Lighthouse", "Labs"]}`);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// Array with booleans
console.log(`Input: ${[true, false, true, true, false]}`);
assertEqual(head([true, false, true, true, false]), true);

// Array with mixed types
console.log(`Input: ${["334 23", false, "sdfs", true, "fooo", 343]}`);
assertEqual(head(["334 23", false, "sdfs", true, "fooo", 343]), "334 23");

// Empty Object
console.log(`Input: ${{}}`);
assertEqual(head({}), undefined);

// Empty String
console.log(`Input: ${""}`);
assertEqual(head(""), undefined);

// String (Weird case)
console.log(`Input: ${"this is a string"}`);
assertEqual(head("this is a string"), "t");

// Number
console.log(`Input: ${12}`);
assertEqual(head(12), undefined);