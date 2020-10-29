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
 * Logs a message to the console inidicating if the two shallow arrays passes in are identical
 * @param  {*[]} actual The array to compare
 * @param  {*[]} expected The array to compare against
 */
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🟥 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// @todo jsdoc this function!
const letterPositions = function(sentence) {
  const results = {};
  for (const [key, value] of Object.entries(sentence)) {
    const valueString = String(value);
    if (!results[valueString]) results[valueString] = [];
    results[valueString].push(key);
  }
  return results;
};

const expected1 = {
  3: ["19", "23", "25"],
  4: ["20", "24"],
  5: ["21"],
  7: ["26"],
  t: ["0", "6"],
  h: ["1"],
  i: ["2"],
  s: ["3", "14"],
  " ": ["4", "22"],
  S: ["5"],
  r: ["7"],
  I: ["8"],
  N: ["9"],
  G: ["10"],
  d: ["11", "13"],
  f: ["12"],
  D: ["15", "18"],
  '"': ["16", "17"],
  ":": ["27"],
};

const test1 = letterPositions('this StrINGdfdsD""D345 3437:');
for (const [key, value] of Object.entries(test1)) {
  assertArraysEqual(value, expected1[key]);
}

const expected2 = {
  '1': [ '6' ],
  '2': [ '7' ],
  '3': [ '8' ],
  A: [ '0', '3' ],
  B: [ '1', '4' ],
  C: [ '2', '5' ]
};

const test2 = letterPositions('ABCABC123');
for (const [key, value] of Object.entries(test2)) {
  assertArraysEqual(value, expected2[key]);
}

// Test empty input
const test3 = letterPositions('');
if (Object.keys(test3).length === 0) {
  console.log(`🟢 Object is empty`);
} else {
  console.log(`🟥 This should be an empty object`);
}
