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
  let maxNumber = 0;
  const array = (n + '').split('');

  array.forEach((number, index) => {
      Number.parseInt(removeElementAt(array, index).join('')) > maxNumber ? maxNumber = Number.parseInt(removeElementAt(array, index).join('')) : '';
  });

  function removeElementAt(arr, index) {
      let frontPart = arr.slice(0, index);
      let lastPart  = arr.slice( index+1 ); 
      return [...frontPart, ...lastPart];
   }
   
   return maxNumber;
}

module.exports = {
  deleteDigit
};
