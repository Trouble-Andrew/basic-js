const {NotImplementedError} = require('../extensions/index.js');

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
function calculateHanoi(disksNumber, turnsSpeed) {

  function getTurns(disksNumber) {
    return 2 ** disksNumber - 1;
  }

  function getSeconds(turns, turnsSpeed) {
    return Math.floor(turns / (turnsSpeed / 3600));
  }

  return {
    turns: getTurns(disksNumber),
    seconds: getSeconds(getTurns(disksNumber), turnsSpeed),
  }
}

module.exports = {
  calculateHanoi
};
