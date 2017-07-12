let numArray;

let sortedArray;

let makeArray = (items, min, max) => {
  numArray = [];
  for (var i = 0; i < items; i++) {
    numArray.push(Math.floor(Math.random() * (max - min + 1)) + min)
  }

  console.log(numArray);
  return numArray
};

let sortMerge = (left, right) => {
  // debugger
  sortedArray = [];

  while (left.length && right.length) {

    if (left[0] < right[0]) {
      sortedArray.push(left.shift())
    } else {
      sortedArray.push(right.shift())
    }
};

  while (left.length) {
    sortedArray.push(left.shift())
  };

  while (right.length) {
    sortedArray.push(right.shift())
  };
  console.log('sortedArray ', sortedArray);
  return sortedArray;
}


let splitArray = array => {
  // debugger
  const midPoint = Math.floor(array.length/2)
  let left = array.slice(0, midPoint)
  let right = array.slice(midPoint, array.length)

  if ( left.length > 1 ) {
    left = splitArray(left);
  };

  if ( right.length > 1 ) {
    right = splitArray(right);
  };

  return sortMerge(left, right);
};

// let compare = (nA, sA) => {
//   fA = nA.sort((a, b) => a - b)
//   console.log('this .sort() ', fA);
//   if (fA === sA) {
//     console.log('true');
//   } else {
//     console.log('false');
//   }
// }

$(document).ready(() => {
  makeArray(20, -100, 100);
  splitArray(numArray);
  // compare(numArray, sortedArray)
})
