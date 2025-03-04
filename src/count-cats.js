const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  //throw new NotImplementedError('Not implemented');
  let catsCount = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let o = 0; o < matrix[i].length; o++) {
      if (matrix[i][o] == '^^') {
        catsCount += 1;
      }
    }
  }
  return catsCount;
}
module.exports = {
  countCats
};
