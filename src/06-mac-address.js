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
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  for (let i = 2; i < n.length; i += 3) {
    if (n.codePointAt(i) !== 45) {
      return false;
    }
  }
  for (let i = 0; i < n.length; i += 1) {
    if ((n.codePointAt(i) >= 48 && n.codePointAt(i) <= 57) || (n.codePointAt(i) >= 65 && n.codePointAt(i) <= 70)) {
      return true;
    }
    return false;
  }
}

module.exports = isMAC48Address;
