const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  //throw new NotImplementedError('Not implemented');
  let emailArray = email.split('');
  return emailArray.slice(emailArray.lastIndexOf('@') + 1, emailArray.length).join(separator = '');
}

module.exports = {
  getEmailDomain
};
