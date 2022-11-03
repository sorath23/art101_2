/**
* Author: Anika, Ellery
* Created 25.11.2022
*
*/

//Define Array
integers = [1,2,3,4,5,6,7,8,9,10];

//Define Functions
function SquareRoot(integers) {
  var results = Math.sqrt(integers)
  return results;
}

//Testing output
console.log("Original Array:", integers);

console.log("Square root of an integer in the Array:", SquareRoot(3));

var result = integers.map(SquareRoot);
//should return [1, 1.4142135623730951, 1.7320508075688772, 2, 2.23606797749979, 2.449489742783178, 2.6457513110645907, 2.8284271247461903, 3, 3.1622776601683795]

console.log("Testing SquareRoot function:", result);

const message = function() {
    console.log("Here is a message that you can only see, 5 seconds later!");
}

setTimeout(message, 5000);
