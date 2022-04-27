const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  let disabledIndexes = [];

  for (let index = 0; index < matrix[0].length; index++) {
    disabledIndexes.push(true);
  }

  matrix.forEach(array => {
    array.forEach((number, index) => {
      number <= 0 ? disabledIndexes.splice(index, 1, false) : '';
      disabledIndexes[index] ? number ? result += number : '' : '';
    });
  });

  return result;
}

module.exports = {
  getMatrixElementsSum
};
