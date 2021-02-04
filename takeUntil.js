const eqArrays = (arr1, arr2) => {
  let correct = true;

  if (arr1.length !== arr2.length) {
    correct = false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      correct = false;
    }
  }
  return correct;
} 

const assertArraysEqual = function (arr3, arr4) {
  if (eqArrays(arr3, arr4)) {
    console.log(`😎😎😎 Arrays are equal!`)
  } else {
    console.log(`Oh no! Arrays are NOT equal 😰😰😰`)
  }
} 
// console.log(assertEqualArrays([1, 2, 3], [1, 2, 3]));


const takeUntil = (arr, cb) => {
  let res = [];
  for (const el of arr) {
    if (!cb(el)){
      res.push(el);
    } else {
      return res;
    }
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);



