function isPrime(n) {
    // Special case for n = 2
    if (n === 2) {
      return true;
    }
  
    // Check if n is evenly divisible by any number between 2 and the square root of n
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
  
    // If n is not evenly divisible by any number, it is prime
    return true;
  }
  
  function nthPrime(n) {
    // Initialize a counter to keep track of the number of primes found
    let count = 0;
    // Initialize a variable to store the current number being tested
    let current = 2;
  
    // Keep looping until the nth prime has been found
    while (count < n) {
      // If the current number is prime, increment the count
      if (isPrime(current)) {
        count++;
      }
  
      // Move on to the next number
      current++;
    }
  
    // Return the nth prime number
    return current - 1;
  }
  
  console.log(nthPrime(10001));
  