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
  //throw new NotImplementedError('Not implemented');
  if (!(Array.isArray(arr))) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let newArr = [];
  let double = false;
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i += 1;
        break;
      case '--discard-prev':
        let discardValue = newArr.pop();
        if (discardValue !== arr[i - 1]) {
          newArr.push(discardValue);
        }
        break;
      case '--double-next':
        double = true;
        break;
      case '--double-prev':
        let doubleValue = newArr.pop();
        if ((doubleValue !== undefined) && (doubleValue === arr[i - 1])) {
          newArr.push(doubleValue);
          newArr.push(doubleValue);
        } else if ((doubleValue !== arr[i - 1])) {
          newArr.push(doubleValue);
        }
        break;
      default:
        if (double) {
          newArr.push(arr[i]);
          newArr.push(arr[i]);
          double = false;
        } else {
          newArr.push(arr[i]);
        }
    }
  }
  return newArr;
}

module.exports = {
  transform
};
