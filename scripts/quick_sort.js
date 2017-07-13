const quickSort = array => {

  let pivot = array[array.length - 1]
  let left = []
  let right = []

  if (array.length <= 1) {
    return array
  }

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

export default quickSort
