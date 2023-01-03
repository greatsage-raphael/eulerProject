//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99. 2002676-rfImLEwXl9XAlXJ4KgpndkSYRtirDQSe3bT4mL0U
//Find the largest palindrome made from the product of two 3-digit numbers with javascript

// This function takes a number and returns true if it is a palindrome, and false otherwise
function isPalindrome(num) {
    // Convert the number to a string
    const str = num.toString();
  
    // Return true if the string is the same forwards and backwards, and false otherwise
    return str === str.split('').reverse().join('');
  }

function largestPalindrome() {
    // Initialize a variable to store the largest palindrome found so far
    let largestPalindrome = 0;
  
    // Use a loop to iterate over all possible values of i from 100 to 999
    for (let i = 100; i < 1000; i++) {
      // Use a loop to iterate over all possible values of j from 100 to 999
      for (let j = 100; j < 1000; j++) {
        // Calculate the product of i and j
        const product = i * j;
  
        // If the product is a palindrome and is greater than the current largest palindrome, update the largest palindrome
        if (isPalindrome(product) && product > largestPalindrome) {
          largestPalindrome = product;
        }
      }
    }
  
    // Return the largest palindrome
    return largestPalindrome;
  }
  
  
  
  // Call the largestPalindrome function and print the result to the console
  console.log(largestPalindrome());
  

