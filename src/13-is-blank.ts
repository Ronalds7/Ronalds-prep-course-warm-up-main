export {};

/**
 * Create a function called isBlank, which checks if passed string is blank or not
 */

function isBlank(text: string | null): boolean {
    return text === null || text.trim() === "";
    
    // if(text === null) {
    //     return true;
    //  }
    //  if(text.trim() === '') {
    //     return true;
    //  } 
    //     return false
     }



    // if(isBlank.length > 0) {
    //     return false
    // } else {
    // return true
//}

console.log(isBlank(null)); // Expected output: true
console.log(isBlank("")); // Expected output: true
console.log(isBlank(" ")); // Expected output: true
console.log(isBlank("abc")); // Expected output: false
console.log(isBlank(" abc ")); // Expected output: false
