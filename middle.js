/* const eqArrays = (arr1, arr2) => {
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
*/

const middle = (arr) => {
  let middleArr = [];
  if (arr.length < 3) {
    return middleArr;
  } else {
    let middleIndex = Math.ceil(arr.length / 2) - 1 ;
    if (arr.length % 2 !== 0) {
      middleArr.push(arr[middleIndex]);
    } else {
      middleArr.push(arr[middleIndex]);
      middleArr.push(arr[++middleIndex]);
    }
    return middleArr;
  }
}
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]