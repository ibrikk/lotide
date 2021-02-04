const eqObjects = function(object1, object2) {

  let equivalent = false;

  if (Object.keys(object1).length === Object.keys(object2).length) {
    
    for (let property in object1) {
      for (let property2 in object2) {

        if (property === property2) {   //both keys are the same

          if (typeof object1[property] === "object" || typeof object2[property] === "object") { //when either obj1 or obj2 value is equal to non-primitive type (array or obj)

            if (object1[property].length === object2[property].length) {  //if array/ objects are equal length
              
              for (let value of object1[property]) {
                for (let value2 of object2[property]) {
                  
                  if (value === value2) { //if array element is the same
                    equivalent = true;
                  } else {
                    equivalent = false;
                  }

                }
              }

            } else {
              equivalent = false;
            }

          } else {  //when equal to primitive type
            if (object1[property] === object2[property]) {  //both values are the same
              equivalent = true;
            } else {
              equivalent = false;
            }
          }

        } 
      }
    }

  }

  return equivalent;

};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)) {  //objects are same
    console.log(`😜😍😎Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {  //objects are different
    console.log(`😡🤮😰Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}

const obj1 = {
  val1: ["hi", "hey"],
  val2: ["hey", "hola"]
}
const obj2 = {
  val1: ["hi", "hey"],
  val2: ["hey", "hola"]
}
assertObjectsEqual(obj1, obj2);