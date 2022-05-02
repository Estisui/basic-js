const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  //throw new NotImplementedError('Not implemented');
  let newLine = '';
  let sameCounter = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      sameCounter += 1;
    } else {
      if (sameCounter !== 1) {
        newLine += sameCounter.toString();
      }
      newLine += str[i];
      sameCounter = 1;
    }
  }
  return newLine;
}

module.exports = {
  encodeLine
};
