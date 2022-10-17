const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let setup = JSON.parse(JSON.stringify(matrix));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let minesCount = 0;
      for (let ii = i - 1; ii <= i + 1; ii++) {
        for (let jj = j - 1; jj <= j + 1; jj++) {
          if (!(ii < 0 || ii >= matrix.length || jj < 0 || jj >= matrix.length || (ii == i && jj == j))) {
            console.log(ii, jj, 'made', matrix[ii][jj]);
            if (matrix[ii][jj] === true) {
              minesCount += 1;
            }
          }
        }
      }
      setup[i][j] = minesCount;
    }
  }
  return setup;
}

module.exports = {
  minesweeper
};
