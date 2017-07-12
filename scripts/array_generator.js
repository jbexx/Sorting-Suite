
let randomNumbers = (items, min, max) => {
  let numArray = [];
  for (let i = 0; i < items; i++) {
    numArray.push(Math.floor(Math.random() * (max - min + 1)) + min)
  }
  return numArray;
};

let alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
  'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
  'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F',
  'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
  'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
  'W', 'X', 'Y', 'Z' ];

let letterArray = [];

let randomLetters = amnt => {
  for (let i = 0; i < amnt; i++) {
    let index = Math.floor(Math.random() * 52);
    console.log(index);
    letterArray.push(alphabet[index]);
  }
  console.log(letterArray);
  return letterArray;
}

$(document).ready(() => {
  randomLetters(100);
});
