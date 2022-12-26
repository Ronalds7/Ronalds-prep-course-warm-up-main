export {};

/**
 * Complete the function to check if passed argument satisfies the following:
 *
 *  - is a number
 *  - is an integer (not a float)
 *  - is not equal to any of the numbers in the array `excludedNums`
 */

const excludedNums = [6, 14, 91, 111];
// let regexPattern = /^-?[0-9]+$/;
// You are allowed to edit only this function

function validate(num: any): boolean {
  for(let i = 0; i < excludedNums.length; i++) {
    if(excludedNums.includes(num))
  { return false;
  } else if (typeof num === "number" && Number.isInteger(num))
  { return true;
  } 
}  return false;
}

console.log(validate(6));
console.log(validate(10.5));
console.log(validate(101));
console.log(validate(-91));
console.log(validate("16"));

/* 
  Expected output:
  
    false
    false
    true
    true
    false
*/
