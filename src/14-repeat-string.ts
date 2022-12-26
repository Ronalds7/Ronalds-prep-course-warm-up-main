export {};

const repeatString = (char: string, length: number): string => char.repeat(length);

console.log(repeatString("a", (4))) // Expected output: 'aaaa'
console.log(repeatString("b", (5))) // Expected output: 'bbbbb'

//function repeatString(char: string, length: number): string {
 //   return char.repeat(length)
//}

//console.log(repeatString('a'.repeat(4)));
//console.log(repeatString('b'.repeat(5)));
