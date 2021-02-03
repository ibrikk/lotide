const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😜😍🍆Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡🤮🤢Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (sentence) => {
  const obj = {};
  
   for (const letter of sentence) {
    if (letter !== ' ') {
      if (obj[letter]) {
        obj[letter] += 1
      } else {
        obj[letter] = 1
      }
    }
  }  
   return obj;
}
console.log(countLetters('LHL'));