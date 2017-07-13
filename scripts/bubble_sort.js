const bubs = Array => {
  for (let i = 0; i < Array.length; i++) {
    for (let j = 0; j < Array.length - 1; j++) {
      if (Array[j] > Array[j + 1]) {
        [Array[j], Array[j + 1]] = [Array[j + 1], Array[j]]
      }
    }
  }
  return Array
};

export default bubs
