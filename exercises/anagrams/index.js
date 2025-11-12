// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let charMapA = buildCharMap(stringA);
  let charMapB = buildCharMap(stringB);

  if (charMapA.size !== charMapB.size) {
    return false;
  }

  for (let entry of charMapA) {
    if (charMapB.get(entry[0]) !== entry[1]) {
      return false;
    }
  }
  return true;
}

function buildCharMap(str) {
  const cleanString = str.replace(/[^\w]/g, '').toLowerCase();
  let charMap = new Map();

  for (let char of cleanString) {
    if (charMap.has(char)) {
      charMap.set(char, charMap.get(char) + 1);
    } else {
      charMap.set(char, 1);
    }
  }
  return charMap;
}

module.exports = anagrams;
