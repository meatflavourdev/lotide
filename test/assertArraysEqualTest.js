const assertArraysEqual = require('../assertArraysEqual');

// Test Code
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