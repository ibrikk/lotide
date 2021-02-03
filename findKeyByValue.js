const findKeyByValue = (obj, val) => {
  // Implement the function findKeyByValue done
  //  which takes in an object and a value. done
  
  for (const [key, value] of Object.entries(obj)) {
    if (val === value) {
      return key;
    }
  }
    return undefined;
  
  //  It should scan the object find the first key which contains the given value
  // >>>>>If no key with that given value is found, then it should return undefined.
  // and return the key. 
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))//, "drama");
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"))//, undefined);


