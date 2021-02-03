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
console.log(assertEqualArrays([1, 2, 3], [1, 2, 3]));