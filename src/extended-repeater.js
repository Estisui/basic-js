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
  //throw new NotImplementedError('Not implemented');
  options.repeatTimes = (options.repeatTimes || 1);
  options.additionRepeatTimes = (options.additionRepeatTimes || 1);
  options.addition = (options.addition === undefined ? '' : (options.addition === null ? 'null' : options.addition));
  let separator = options.separator || '+';
  let additionSeparator = options.additionSeparator || '|';
  //let addition = (options.addition ? options.addition.repeat(options.additionRepeatTimes) : '');
  let additionOutput = '';
  additionOutput += options.addition;
  for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
    additionOutput += additionSeparator;
    additionOutput += options.addition;
  }
  let output = '';
  str = (str === null ? 'null' : str);
  output += str;
  output += additionOutput;
  for (let i = 0; i < (options.repeatTimes - 1); i++) {
    output += separator;
    output += str;
    output += additionOutput;
  }
  return output;
}

module.exports = {
  repeater
};
