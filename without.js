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
*/
const without = (sourceArr, itemsToRemove) => {
  let newArr = [];
  for (let i = 0; i < sourceArr.length; i++) {
    let removeElement = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (sourceArr[i] === itemsToRemove[j]) {
        removeElement = true;
      }
    }
    if (removeElement === false) {
      newArr.push(sourceArr[i]);
    }
  }
  return newArr;
}
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]