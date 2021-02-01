const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: 1 === 1`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "Lighthouse Labs" !== "Bootcamp"`);
  }
};

// TEST CODE
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);


const tail = (arr) => {
  let result = [];
  for (let i = 1; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}

const res = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(res.length, 2); // ensure we get back two elements
assertEqual(res[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(res[1], "Labs");
