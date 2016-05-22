// Problem 3: Largest Prime Factor
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

var maxPrimeFactor = function(n) {
  let max = 1;
  
  while (n % 2 === 0) {
    max = 2;
    n /= 2;
  }
  
  let maxFactor = Math.sqrt(n);
  
  for (let i = 3; i <= maxFactor && n > 1; i += 2) {
    while (n % i === 0) {
      max = i;
      n /= i;
    }
    maxFactor = Math.sqrt(n);
  }

  return n === 1 ? max : n;
};
