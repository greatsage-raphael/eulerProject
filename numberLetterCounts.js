//If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

//If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

function countLetters() {
    // Define arrays for the word representations of numbers
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
    let count = 0;
  
    // Iterate through all numbers from 1 to 1000
    for (let i = 1; i <= 1000; i++) {
      let num = i;
      let word = '';
  
      // Check for thousands
      if (num === 1000) {
        word += 'one thousand';
        num -= 1000;
      }
  
      // Check for hundreds
      if (num >= 100) {
        word += ones[Math.floor(num / 100)] + ' hundred';
        num %= 100;
        if (num > 0) {
          word += ' and ';
        }
      }
  
      // Check for tens and ones
      if (num >= 20) {
        word += tens[Math.floor(num / 10)];
        num %= 10;
        if (num > 0) {
          word += '-';
        }
      }
      word += ones[num];
  
      // Remove spaces and hyphens from the word and add its length to the count
      count += word.replace(/ |-/g, '').length;
    }
  
    console.log(count);
    return count;
  }
  
  countLetters();
  