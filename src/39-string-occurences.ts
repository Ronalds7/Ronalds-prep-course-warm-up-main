import { addSyntheticTrailingComment } from "typescript";

export {};

const count = (a: string, b: string) => {
        
    let sum = a.toLowerCase().split(b.toLowerCase()).length - 1;
    return sum

    };

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
