/* eslint-disable no-new-object */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable no-self-assign */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/* jshint esversion:6 */
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
  const result = new Object();
  for (const item of domains) {
    const arr = item.split('.').reverse();
    if (result[`.${arr[0]}`]) {
      result[`.${arr[0]}`] += 1;
    } else {
      result[`.${arr[0]}`] = 1;
    }
    if (result[`.${arr[0]}.${arr[1]}`]) {
      result[`.${arr[0]}.${arr[1]}`] += 1;
    } else {
      result[`.${arr[0]}.${arr[1]}`] = 1;
    }
    if (arr[2] && result[`.${arr[0]}.${arr[1]}.${arr[2]}`]) {
      result[`.${arr[0]}.${arr[1]}.${arr[2]}`] += 1;
    } else if (arr[2]) {
      result[`.${arr[0]}.${arr[1]}.${arr[2]}`] = 1;
    }
  }
  return result;
}

module.exports = getDNSStats;
