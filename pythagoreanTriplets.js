// define a function that takes in a target sum
function pythagoreanTriplet(targetSum) {
    // iterate over all possible values of a from 1 to the target sum
    for (let a = 1; a < targetSum; a++) {
      // iterate over all possible values of b from a to the target sum
      for (let b = a; b < targetSum; b++) {
        // calculate c as the target sum minus a and b
        let c = targetSum - a - b;
  
        // check if a, b, and c form a Pythagorean triplet
        if (a ** 2 + b ** 2 === c ** 2) {
          // if they do, return the product of a, b, and c
          return a * b * c;
        }
      }
    }
  
    // if no Pythagorean triplet is found, return null
    return null;
}
  
  // test the function with the target sum of 1000
  console.log(pythagoreanTriplet(1000)); // should output 31875000
  