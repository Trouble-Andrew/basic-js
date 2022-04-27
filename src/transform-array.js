const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  const arrayForCommand = arr.slice();  

  function executeCommand(command, target, index) {
    switch (command) {
      case "--discard-next":
        target[index + 1] ? target[index + 1] = null : '';
        break;
      case "--discard-prev":
        target[index - 1] ? target[index - 1] = null : '';
        break;
      case "--double-next":
        target[index + 1] ? target.splice(index, 1, target[index + 1]) : '';
        break;
      case "--double-prev":
        target[index - 1] ? target.splice(index, 1, target[index - 1]) : '';
        break;
      default:
        return;
    }
  }

  arrayForCommand.forEach((element, index)  => {
    if (typeof element === 'string') {
      executeCommand(element, arrayForCommand, index)
    }
  });

  return arrayForCommand.filter(number => {
    if (number === '--discard-prev' || number === '--discard-next' || number === '--double-next' || number === '--double-prev') {
      return;
    }
    return number;
  })
}

module.exports = {
  transform
};
