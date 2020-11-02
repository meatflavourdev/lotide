const assertEqual = require('./assertEqual');

/**
 * Returns the first object in the specified array
 * @param  {*[]} arr An array of unspecified type and length
 * @return  {*} First item in the specified array
 */
const head = function(arr) {
  return arr[0];
};

module.exports = head;