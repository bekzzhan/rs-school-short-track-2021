/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-self-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/* jshint esversion:6 */
/**
 * Given an array with heights, sort them except if the value is -1.
 *

 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const copyOfArr = arr.slice(0);
  const heights = copyOfArr.filter((item) => item !== -1).sort((a, b) => a - b);
  const result = arr.map((item) => (item !== -1 ? item = heights.shift() : item = item));
  return result;
}

module.exports = sortByHeight;
