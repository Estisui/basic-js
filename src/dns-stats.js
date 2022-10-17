const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  //throw new NotImplementedError('Not implemented');
  let appearances = new Object;
  domains.forEach((domain) => {
    let dns = domain.split('.');
    let fullDomainList = [];
    for (let i = dns.length - 1; i >= 0; i--) {
      fullDomainList.push(dns[i]);
      appearances['.' + fullDomainList.join('.')] ? appearances['.' + fullDomainList.join('.')] += 1 : appearances['.' + fullDomainList.join('.')] = 1;
    }
  })
  return appearances;
}

module.exports = {
  getDNSStats
};
