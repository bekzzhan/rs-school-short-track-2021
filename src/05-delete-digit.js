/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable no-self-assign */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/* jshint esversion:6 */
/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('').map((item) => item = Number(item));
  const deleteDigit = arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return Number(arr.map((item) => item = String(item)).join(''));
}

module.exports = deleteDigit;
