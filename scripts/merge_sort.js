let merge = (left, right) => {
  // debugger
  let Array = [];

  while (left.length && right.length) {

    if (left[0] < right[0]) {
      Array.push(left.shift())
    } else {
      Array.push(right.shift())
    }
};

  while (left.length) {
    Array.push(left.shift())
  };

  while (right.length) {
    Array.push(right.shift())
  };

  return Array;
}


let mergeSort = array => {
  // debugger
  const midPoint = Math.floor(array.length/2)
  let left = array.slice(0, midPoint)
  let right = array.slice(midPoint, array.length)

  if ( left.length > 1 ) {
    left = mergeSort(left);
  };

  if ( right.length > 1 ) {
    right = mergeSort(right);
  };

  return merge(left, right);
};

export default mergeSort;
