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
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const repetitiveFiles = [];
  for (let i = 0; i < names.length; i += 1) {
    if (names.slice(0, i).includes(names[i]) && names[i].length > 2) {
      if (repetitiveFiles.includes(names[i]) && !names[i].includes('(1)')) {
        names[i] = names[i].concat('(2)');
      } else {
        repetitiveFiles.push(names[i]);
        names[i] = names[i].concat('(1)');
      }
    }
  }
  return names;
}

module.exports = renameFiles;
