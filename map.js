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





const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const test1 = ["ground", "control", "to", "major", "tom"];
const results1 = map(test1, word => word[0]);
const exptected1 = [ 'g', 'c', 't', 'm', 't' ];
assertArraysEqual(results1, exptected1);

const test2 = ["ground", "control", "to", "major", "tom"];
const results2 = map(test2, word => word.toUpperCase());
const exptected2 = ["GROUND","CONTROL","TO","MAJOR","TOM"];
assertArraysEqual(results2, exptected2);

const test3 = [];
const results3 = map(test3, word => word.toUpperCase());
const exptected3 = [];
assertArraysEqual(results3, exptected3);