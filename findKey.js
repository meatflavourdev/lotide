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

const findKey = (object, callback) => {
  for (const [key, value] of Object.entries(object)) {
    if (callback(value)) return key;
  }
  return undefined;
};

const data1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const test1 = findKey(data1, x => x.stars === 2) // => "noma"
assertEqual(test1, "noma");


const test2 = findKey(data1, x => x.stars > 3) // => "noma"
assertEqual(test2, undefined);

const test3 = findKey({}, x => x.stars === 2) // => "noma"
assertEqual(test3, undefined);
