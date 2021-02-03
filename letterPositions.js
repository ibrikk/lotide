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

const letterPositions = function(word) {
  const obj = {};
  for (const letter of word) {
    if (!obj[word[letter]]) {
        obj[word[letter]] = [letter];
    } else {
        obj[word[letter]].push(word);
    }
  }
  return obj;
};
// assertArraysEqual(letterPositions("hello").e, [1]);

