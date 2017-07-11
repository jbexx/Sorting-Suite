let numArray;

function makeArray(items, maxNum) {
  numArray = [];
  for (var i = 0; i < items; i++) {
    numArray.push(Math.floor(Math.random() * maxNum + 1));
  }

  console.log('initial array: ', numArray);
  return numArray
};


function sortMerge(left, right) {
  let sortedArray = [];
  if( left[0] > right [0] ){
    sortedArray.push(left.shift())
  } else {
    sortedArray.push(right.shift())
  }
  console.log(sortedArray);
}


function splitArray(array) {
  // take numArray and split it into 2
  const midPoint = Math.floor(array.length/2)
          console.log('midPoint: ', midPoint);
  let left = array.slice(0, midPoint)
          console.log('left array: ', left);
  let right = array.slice(midPoint, array.length)
          console.log('right array: ', right);
  // take the left side and break it down into single arrays
  if ( left.length > 1 ) {
    console.log('in if left: ', left);
    left = splitArray(left);
  }

  // take right side and break it down into single arrays
  if ( right.length > 1 ) {
    console.log('in if right: ', right)
    right = splitArray(right);
  }
  // sort those arrays and merge them into a single array
  // need to have a condition either here or in the sortMerge Fn to only sort and merge arrays with 1 item.
  // sortMerge(left, right);
  // now compare the two sorted arrays and sort them into one array
}

$(document).ready(() => {
  makeArray(10, 100);
  splitArray(numArray);
})
