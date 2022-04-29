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
  str = String(str);
  let res = '';
  let repeatTimes = 1;
  let separator = '+';
  let addition = '';
  let additionRepeatTimes = 1;
  let additionSeparator = '|';
  if (typeof options["repeatTimes"] !== "undefined") repeatTimes =  options["repeatTimes"];
  if (typeof options['separator'] !== "undefined") separator =String(options["separator"]);
  if (typeof options['addition'] !== "undefined") addition = String(options["addition"]);
  if (typeof options['additionRepeatTimes'] !== "undefined") additionRepeatTimes = options["additionRepeatTimes"];
  if (typeof options['additionSeparator'] !== "undefined") additionSeparator = String(options["additionSeparator"]);
  for(let i = 0; i<repeatTimes; i++)
  {
    res+=str;
    for(let j = 0; j<additionRepeatTimes; j++)
    {
      res+=addition;
      if(j!=additionRepeatTimes-1) res+=additionSeparator;
    }
    if(i!=repeatTimes-1) res+=separator;
  }
  return res;
}

console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }));

module.exports = {
  repeater
};
