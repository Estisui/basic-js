const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  let max = 0;
  let numArray = n.toString().split('');
  for (let i = 0; i < numArray.length; i++) {
    let testNumArray = numArray.slice(0, i).concat(numArray.slice(i + 1, numArray.length));
    let testNum = parseInt(testNumArray.join(separator = ''));
    if (testNum > max) {
      max = testNum
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
