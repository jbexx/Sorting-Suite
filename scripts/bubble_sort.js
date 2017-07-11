// let numArray;
//
// function makeArray(items, maxNum) {
//   numArray = [];
//   for (var i = 0; i < items; i++) {
//     numArray.push(Math.floor(Math.random() * maxNum + 1));
//   }
//
//   console.log('inital array: ', numArray);
//   return numArray
// };


function bubs(numArray) {
  for (var i = 0; i < numArray.length; i++) {
    for (var j = 0; j < numArray.length - 1; j++) {
      if (numArray[j] > numArray[j + 1]) {
        [numArray[j], numArray[j + 1]] = [numArray[j + 1], numArray[j]]
      }
    }
  }
  console.log('sorted array: ', numArray);
  return numArray
};

// $(document).ready(() => {
//   makeArray(1000, 1000);
//   bubs(numArray);
// })

export default bubs
