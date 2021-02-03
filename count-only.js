const assertEqual = function(actual, expected) {
     if (actual !== expected) {
       console.log(`😡🤮🤢Assertion Failed: ${actual} !== ${expected}`);
     } else {
       console.log(`😜😍🍆Assertion Passed: ${actual} === ${expected}`);
    }
   };
  
 
  const countOnly = function(allItems, itemsToCount) {
    const results = {};
    for (let item in allItems) {
      if (allItems[item]) {
        for (let element of itemsToCount) {
          if (element === item) {
            if (results[item]) {  //if item exists
              results[item] += 1;
            } else {
              results[item] = 1;
            }
          }
        }
      }
    }
    return results;
  }
  

   const firstNames = [
     "Karl",
     "Salima",
     "Agouhanna",
     "Fang",
     "Kavith",
    "Jason",
     "Salima",
     "Fang",
     "Joe"
   ];
  
   const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
  
   assertEqual(result1["Jason"], 1);
   assertEqual(result1["Karima"], undefined);
   assertEqual(result1["Fang"], 2);