
function makeArray(items, maxNum) {
  let numArray = [];
  for (var i = 0; i < items; i++) {
    numArray.push(Math.floor(Math.random() * maxNum + 1));
  }

  console.log(numArray);
  return numArray
};

makeArray(10, 50);
