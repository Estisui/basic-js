const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  if (!(Array.isArray(members))) {
    return false;
  }
  let newArray = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) === 'string') {
      members[i] = members[i].toUpperCase();
      members[i] = members[i].trim();
      newArray.push(members[i]);
    }
  }
  newArray.sort();
  let result = '';
  for (let i = 0; i < newArray.length; i++) {
    result += newArray[i][0];
  }
  return result;
}

module.exports = {
  createDreamTeam
};
