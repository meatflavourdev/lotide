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

// @todo jsdoc this function!
const findKeyByValue = (object, searchValue) => {
  for (const [key, value] of Object.entries(object)) {
    if (value === searchValue) return key;
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "foo"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);