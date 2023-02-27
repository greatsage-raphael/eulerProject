//2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

//What is the sum of the digits of the number 2^1000?

function powerDigitSum(exponent){
    // find the number 
    const digit = 2 ** (exponent);
    // make it a string
    const digitstring = digit.toString();
    // split the string into sub array
    const numArray = digitstring.split("");
    //loop over array elements and calculate sum
    let sum ;
    numArray.forEach(summation);

    function summation(number){
         sum += number
    }
    return sum
}


//new method
let power = BigInt(Math.pow(2, 1000)); // calculate 2^1000 using BigInt

let digitsSum = 0;
let powerString = power.toString(); // convert the result to a string

for (let i = 0; i < powerString.length; i++) {
  digitsSum += parseInt(powerString[i]); // convert each character to a number and add it to the sum
}

console.log(digitsSum); // output the sum of the digits


console.log(powerDigitSum(10))



