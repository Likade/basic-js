const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
 function calculateHanoi(diskNumber, turnsSpeed){
  let turnes = 2**diskNumber -1;
  let speed = Math.floor((turnes/turnsSpeed)*3600);
  mas = {'turns' : turnes, "seconds":speed};
  return mas;
}

module.exports = {
  calculateHanoi
};
