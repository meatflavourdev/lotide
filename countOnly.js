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

/** 
 * Counts the number of strings in an array as specified by the truthiness of keys given by itemsToCount
 * @param  {string[]} allItems an array of strings that we need to look through
 * @param  {Object} itemsToCount an object specifying what to count
 * @return {Object} An object containing keys of items counted and values specifying the number of their occurance
 */
const countOnly = function(allItems, itemsToCount) {
  // Build an array of strings that we should count as specified
  // by the truthiness of each element of itemsToCount
  let itemsArr = [];
  for (const [key, value] of Object.entries(itemsToCount)) {
    if(value) itemsArr.push(key);
  }

  // Loop through each item in allItems
  let results = [];
  for (const item of allItems) {
    if(itemsArr.includes(item)){
      results[item] = (!results[item]) ? 1 : results[item] + 1;
    } 
  }
  return {};
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);