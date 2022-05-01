const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    //throw new NotImplementedError('Not implemented');
    throw new NotImplementedError('Not implemented');
  },
  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    if (position < 1 || position > this.chain.length || isNaN(position)) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    this.chain.reverse();
    return this;
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    let chainOutput = '';
    chainOutput += `( ${this.chain[0]} )`;
    for (let i = 1; i < this.chain.length; i++) {
      chainOutput += `~~( ${this.chain[i]} )`;
    }
    this.chain = [];
    return chainOutput;
  }
};

module.exports = {
  chainMaker
};
