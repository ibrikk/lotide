const eqArrays = require('./eqArrays');

 
 const assertArraysEqual = function (arr3, arr4) {
  if (eqArrays(arr3, arr4)) {
    console.log(`😎😎😎 Arrays are equal!`)
  } else {
    console.log(`Oh no! Arrays are NOT equal 😰😰😰`)
  }
} 

module.exports = assertArraysEqual;