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
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let low = 0;
  let high = array.length - 1;
  do {
    let mid = Math.floor((low + high) / 2);
    let guess = array[mid];
    if (guess === value) {
      return mid;
    }
    if (guess > value) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  } while (low <= high);
}

module.exports = findIndex;
