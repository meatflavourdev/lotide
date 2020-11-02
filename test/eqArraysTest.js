const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Tests
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