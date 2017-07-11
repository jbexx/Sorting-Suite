let numArray;

function makeArray(items, maxNum) {
  numArray = [];
  for (var i = 0; i < items; i++) {
    numArray.push(Math.floor(Math.random() * maxNum + 1));
  }

  console.log('initial array: ', numArray);
  return numArray
};

function insertion(numArray) {
  for (var i = 1; i < numArray.length; i++) {
    let j = i - 1
    while (numArray[i] < numArray[j]) {
      [numArray[i], numArray[j]] = [numArray[j], numArray[i]];
      j--;
      i = j + 1;
    }
  }
    console.log('sorted array: ', numArray);

};
    //start at position 1 and compare with position 0
    //if [1] < [0] then swap else leave it like it is
    //now start at position 2 and compare with position 1
    //if [2] < [1] then swap then if [2] < [0] then swap else leave it (because you have sorted the left side already you don't need to compare that number with the rest if it is greater than the last of the sorted numbers)
    //now start at position 3 and compare with position 2
    //if [3] < [2] then swap else do nothing


$(document).ready(() => {
  makeArray(100, 10);
  insertion(numArray);
})

// export default insertion
