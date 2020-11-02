/**
 * Returns a shallow copy of the given array without the first element
 * When passed a one-dimensional array, the tail is copied and returned.
 * WARNING: Multi-dimensional elements will not be copied and will only be
 * returned by referenced
 * @param  {*[]} arr An array of unspecified type
 * @return {*[]} The tail of the array, that is, an array with every element but the first
 */
const tail = function(arr) {
  const [, ...tail] = arr;
  return tail;
};

module.exports = tail;