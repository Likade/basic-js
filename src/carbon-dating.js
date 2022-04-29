const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }
 function dateSample(sampleActivity){
     if(!isNumber(sampleActivity) || typeof(sampleActivity)!='string'||sampleActivity>15 ||sampleActivity<1)
     return false;
     else
     {
         let num = Math.ceil(Math.log(15/sampleActivity)/(0.693/5730));
         return num;
     }
 }

module.exports = {
  dateSample
};
