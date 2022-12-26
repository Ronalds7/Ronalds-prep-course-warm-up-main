export {};

function truncateString(text: string, length: number): string {
//     let result = '';

//     for (let i = 0; i < length; i++) {
//             result = result + text[i];
//     }

//     return result;
//return text.substring(0, length);
return text.slice(0, length);
}

console.log(truncateString("CODELEX", 4)); // Expected output: CODE
