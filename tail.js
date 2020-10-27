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
 * Returns a shallow copy of the given array without the first element
 * When passed a one-dimensional array, the tail is copied and returned.
 * WARNING: Multi-dimensional elements will not be copied and will only be
 * returned by referenced
 * @param  {*[]} arr An array of unspecified type
 * @return {*[]} The tail of the array, that is, an array with every element but the first
 */
const tail = function(arr) {
  const [firstElm, ...tail] = arr;
  console.log(`firstElm: ${firstElm} tail: ${tail}`);
  return tail;
};


// Test Case 1: Check the returned array elements
console.log(`Test 1`);
const test1 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(test1.length, 2); // ensure we get back two elements
assertEqual(test1[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(test1[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: Check the original array
console.log(`Test 2`);
const test2 = ["Yo Yo", "Lighthouse", "Labs"];
tail(test2); // no need to capture the return value since we are not checking it
assertEqual(test2.length, 3); // original array should still have 3 elements!

// Test Case 3: Array with one element
console.log(`Test 3`);
const test3 = tail(["Hello"]);
assertEqual(test3.length, 0); // ensure we get back two elements

// Test Case 4: Empty Array
console.log(`Test 4`);
const test4 = [];
tail(test4); // no need to capture the return value since we are not checking it
assertEqual(test4.length, 0); // original array should still have 3 elements!

// Test Case 5: undefined
console.log(`Test 5`);
const test5 = [undefined];
tail(test5); // no need to capture the return value since we are not checking it
console.log(test5);
assertEqual(test5.length, 0); // original array should still have 3 elements!
