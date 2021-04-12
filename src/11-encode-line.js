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
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 0;
  const result = [];
  for (let i = 0; i < str.length; i += 1) {
    if (str[i + 1] === str[i]) {
      counter += 1;
    } else {
      counter += 1;
      if (counter === 1) {
        result.push(`${str[i]}`);
      } else if (counter > 1) {
        result.push(`${counter}${str[i]}`);
      }
      counter = 0;
    }
  }
  return result.join('');
}

module.exports = encodeLine;
