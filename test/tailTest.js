const assertEqual = require('../assertEqual');
const tail = require('../tail');

const res = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(res.length, 2); // ensure we get back two elements
assertEqual(res[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(res[1], "Labs");