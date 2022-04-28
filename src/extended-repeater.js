const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

 function repeater(str, options) {
  const {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator= '|'} = options;

  let additionStr = '';

  if (addition + '') {
    additionStr =  (addition + '' ? `${addition + ''}${additionSeparator + ''}` : '').repeat(additionRepeatTimes);
    additionStr = additionStr ? additionStr.substring(0, additionStr.length - additionSeparator.length) : '';
  }

  let result = (str + additionStr + separator).repeat(repeatTimes);
  result = result.substring(0, result.length - separator.length);
  return result;
}

module.exports = {
  repeater
};
