const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  result: [],

  getLength() {
    return this.result.length;
  },
  addLink(value = '') {
    this.result.push(`( ${value} )`);
    return chainMaker;
  },
  removeLink(position) {
    if (typeof position === 'number' && position > 0 &&  position <= this.result.length) {
      this.result.splice(position - 1, 1);
      return chainMaker;
    } else {
      this.result = [];
      throw new Error(`You can\'t remove incorrect link!`);
    }
  },
  reverseChain() {
    this.result.reverse();
    return chainMaker;
  },
  finishChain() {
    const result = this.result.join('~~');
    this.result = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
