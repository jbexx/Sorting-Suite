const insertionSort = Array => {

  for (let i = 1; i < Array.length; i++) {
    let j = i - 1;

    while (Array[i] < Array[j]) {
      [Array[i], Array[j]] = [Array[j], Array[i]];
      j--;
      i--;
    }
  }
  return Array
};

export default insertionSort
