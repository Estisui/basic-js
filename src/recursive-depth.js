const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  maxDepth = 0;
  currentDepth = 0;
  calculateDepth(arr, self = false) {
    //throw new NotImplementedError('Not implemented');
    /*
    let currentDepth = 1;
    const getDeeper = (deeperArray) => {
      currentDepth += 1;
      for (let j = 0; j < deeperArray.length; j++) {
        if (Array.isArray(arr[j])) {
          getDeeper(arr[j]);
        }
      }
    }
    */
    if (self === false) {
      this.maxDepth = 0;
      this.currentDepth = 0;
    }
    this.currentDepth += 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        this.calculateDepth(arr[i], true);
        this.currentDepth -= 1;
      }
    }
    if (this.maxDepth < this.currentDepth) {
      this.maxDepth = this.currentDepth;
    } 
    return(this.maxDepth);
  }
}

module.exports = {
  DepthCalculator
};
