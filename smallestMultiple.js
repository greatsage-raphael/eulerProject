//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function smallestMultiple(n) {
    let smallest = n;
    for (let i = n; i >= 2; i--) {
      if (smallest % i !== 0) {
        smallest++;
        i = n;
      }
    }
    return smallest;
  }
  
  console.log(smallestMultiple(20));
  