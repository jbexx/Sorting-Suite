const insertion = Array => {
  for (var i = 1; i < Array.length; i++) {
    let j = i - 1
    while (Array[i] < Array[j]) {
      [Array[i], Array[j]] = [Array[j], Array[i]];
      j--;
      i = j + 1;
    }
  }
  return Array
};
    //start at position 1 and compare with position 0
    //if [1] < [0] then swap else leave it like it is
    //now start at position 2 and compare with position 1
    //if [2] < [1] then swap then if [2] < [0] then swap else leave it (because you have sorted the left side already you don't need to compare that number with the rest if it is greater than the last of the sorted numbers)
    //now start at position 3 and compare with position 2
    //if [3] < [2] then swap else do nothing


export default insertion
