function sumPrimesBelowTwoMillion() {
  // Create a helper function to check if a number is prime
  function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    let i = 5;
    while (i * i <= n) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  }

  // Initialize the sum to 0
  let sum = 0;

  // Iterate through all the numbers below 2 million
  for (let i = 2; i < 2e6; i++) {
    // If the number is prime, add it to the sum
    if (isPrime(i)) sum += i;
  }

  // Return the sum
  return sum;
}

console.log(sumPrimesBelowTwoMillion());
