/**
 * Logs message to the console remarking on the equality of the specified parameters
 * @param  {*} actual The value to test against
 * @param  {*} expected The value to be tested
 */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🟥 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetter = (inputString) => {
  let results = {};
  for (const [, value] of Object.entries(inputString)) {
    const valueString = String(value);
    results[valueString] = !results[valueString] ? 1 : results[valueString] + 1;
  }
  return results;
};

// Test input
const expected1 =
{
  3: 3,
  4: 2,
  5: 1,
  7: 1,
  t: 2,
  h: 1,
  i: 1,
  s: 2,
  " ": 2,
  S: 1,
  r: 1,
  I: 1,
  N: 1,
  G: 1,
  d: 2,
  f: 1,
  D: 2,
  '"': 2,
  ":": 1,
};

const test1 = countLetter('this StrINGdfdsD""D345 3437:');
for (const [key, value] of Object.entries(test1)) {
  assertEqual(value, expected1[key]);
}

// Test empty input
const test2 = countLetter('');
if (Object.keys(test2).length === 0) {
  console.log(`🟢 Object is empty`);
} else {
  console.log(`🟥 This should be an empty object`);
}
