/*
Problem 1: Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

var sumOfMults = function(num, mult1, mult2) {
  if (isNaN(num) || isNaN(mult1) || isNaN(mult2)) throw 'Error: Inputs must be integers'; // check for non-Number inputs
  mult1 = mult1 || 1; // if no multiple is provided, return sum of all numbers < num
  var numbers = [];
  
  for (var i = 1; i < num; i++) {
    if (i % mult1 === 0 || i % mult2 === 0) numbers.push(i);
  };
  
  return numbers.reduce(function(sum, nextNum) {
      return sum + nextNum;
  });
};

sumOfMults(10, 3, 5);
// => 23

sumOfMults(1000, 3, 5);
// => 233168
