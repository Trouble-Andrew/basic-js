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
var encodeLine = function (str) {
  let result = [];
  str = str.split('');
  str = str.map((char) => [1, char]);

  for (const char of str) {
    if (
      (result[result.length - 1] ? result[result.length - 1][1] : false) !==
      char[1]
    ) {
      result.push(char);
    } else {
      result[result.length - 1][0]++;
    }
  }

  result = result.map((element) => element.join('').replace('1', ''));
  return result.flat().join('');
};

module.exports = {
  encodeLine,
};
