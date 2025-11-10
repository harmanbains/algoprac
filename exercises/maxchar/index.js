// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charMap = new Map();
  for (let char of str) {
    if (charMap.has(char)) {
      charMap.set(char, charMap.get(char) + 1);
    } else {
      charMap.set(char, 1);
    }
  }

  let curMaxChar = '';
  let curMaxCount = 0;
  for (let char of charMap.entries()) {
    if (char[1] > curMaxCount) {
      curMaxChar = char[0];
      curMaxCount = char[1];
    }
  }
  return curMaxChar;
}

module.exports = maxChar;
