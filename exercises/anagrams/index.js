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
  const cleanStringA = stringA.replace(/[^\w]/g, '').toLowerCase();
  const cleanStringB = stringB.replace(/[^\w]/g, '').toLowerCase();
  let charMapA = new Map();
  let charMapB = new Map();

  for (let char of cleanStringA) {
    if (charMapA.has(char)) {
      charMapA.set(char, charMapA.get(char) + 1);
    } else {
      charMapA.set(char, 1);
    }
  }

  for (let char of cleanStringB) {
    if (charMapB.has(char)) {
      charMapB.set(char, charMapB.get(char) + 1);
    } else {
      charMapB.set(char, 1);
    }
  }

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

module.exports = anagrams;
