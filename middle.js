/**
 * Returns an array containing the middle element(s) of a given array
 * @param  {*[]} arr The input array
 * @return {*[]} An array containing the middle element(s) if they exist
 */
const middle = function(arr) {
  if (!Array.isArray(arr)) return false;
  if (arr.length < 3) return [];
  if (arr.length % 2 === 1) return [arr[Math.floor(arr.length / 2)]];
  if (arr.length % 2 === 0) return [arr[arr.length / 2 - 1], arr[arr.length / 2]];
};

module.exports = middle;