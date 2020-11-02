const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// Test Code

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