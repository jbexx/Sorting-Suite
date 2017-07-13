const insertionSort = Array => {
  for (var i = 1; i < Array.length; i++) {
    let j = i - 1;
    
    while (Array[i] < Array[j]) {
      [Array[i], Array[j]] = [Array[j], Array[i]];
      j--;
      i = j + 1;
    }
  }
  return Array
};

export default insertionSort
