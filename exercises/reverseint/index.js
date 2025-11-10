// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let reverseInt = '';
  let absInt = n * Math.sign(n);
  for (let char of absInt.toString()) {
    reverseInt = char + reverseInt;
  }
  reverseInt = parseInt(reverseInt);

  if (Math.sign(n) < 0) {
    reverseInt = reverseInt * -1;
  }

  return reverseInt;
}

module.exports = reverseInt;
