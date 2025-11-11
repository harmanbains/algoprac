// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let returnArr = [];
  let curSize = 0;
  let curChunk = [];
  for (let num of array) {
    if (curSize < size) {
      curChunk.push(num);
      curSize++;
    } else {
      returnArr.push(curChunk);
      curSize = 1;
      curChunk = [];
      curChunk.push(num);
    }
  }
  if (curChunk.length > 0) {
    returnArr.push(curChunk);
  }
  return returnArr;
}

module.exports = chunk;
