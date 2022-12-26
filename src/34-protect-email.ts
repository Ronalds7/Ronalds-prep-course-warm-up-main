export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */

 function protectEmail(email: string): string {
  
        const [username, secondHalf]: string[] = email.split('@');

        if (username.length - 3 <= 3) {
            return username.slice(0, -3) + '...' + '@' + secondHalf;
        }
        
        return username.slice(0, 3) + '...' + '@'  +
        "..." +
        "@" +
        secondHalf;
    };
    

console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
console.log(protectEmail('12345@example.com')); // Expected result: 12...@example.com
console.log(protectEmail('12@example.com')); // Expected result: ...@example.com