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
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(num) {
  const str = String(num);
  let result = 0;
  for (let i = 0; i < str.length; i += 1) {
    result += Number(str[i]);
  }
  return result < 10 ? result : getSumOfDigits(result);
}

module.exports = getSumOfDigits;
