const map = (arr, cb) => {
  let newArr = [];

  for (const el of arr) {
    newArr.push(cb(el));
  }
  return newArr;
};

const words = ["ground", "control", "to", "major", "tom"];

console.log(map(words, word => word.length));
