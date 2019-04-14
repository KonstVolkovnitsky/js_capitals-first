'use strict';

/**
 * Implement capitalsFirst function:
 *
 * Create a function that takes an input String and returns a String, where all
 * the uppercase words of the input String are in front and all the lowercase
 * words at the end. The order of the uppercase and lowercase words should be
 * the order in which they occur.
 *
 * If a word starts with a number or special character, skip the word and leave
 * it out of the result. Input String will not be empty.
 *
 * capitalFirst("hey You, Sort me Already!") === "You, Sort Already! hey me"
 *
 * capitalsFirst(1, 2) === 3
 * capitalsFirst(1, 11) === 12
 *
 * @param {string} str
 *
 * @returns {string} - string with uppercase words in front
 */
function capitalsFirst(str) {
  const wordsArray = str.split(' ');
  const isUpperCasedLetter = function(word) {
    return (word[0] >= 'A' && word[0] <= 'Z');
  };
  const isLowerCasedLetter = function(word) {
    return (word[0] >= 'a' && word[0] <= 'z');
  };
  let upperWords = wordsArray.filter(isUpperCasedLetter);
  let lowerWords = wordsArray.filter(isLowerCasedLetter);
  return [...upperWords, ...lowerWords].join(' ');
}

module.exports = capitalsFirst;
