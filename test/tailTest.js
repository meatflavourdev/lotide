const assertEqual = require('../assertEqual');
const tail = require('../tail');

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
assertEqual(test3.length, 0); // Ensure returned array has length of 0

// Test Case 4: Empty Array
console.log(`Test 4`);
const test4 = [];
tail(test4);
assertEqual(test4.length, 0); // Ensure returned array has length of 0

// Test Case 5: Array with one undefined element
console.log(`Test 5`);
const test5 = tail([undefined]);
assertEqual(test5.length, 0); // Ensure returned array has length of 0
