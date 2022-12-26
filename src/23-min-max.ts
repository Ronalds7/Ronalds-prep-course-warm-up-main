export {};

/**
 * Try to find at least two different solutions for this exercise,
 * one of which does not use built-in Math methods.
 */

const min = (array: number[]) => Math.min(...array); // reduce()
const max = (array: number[]) => Math.max(...array);

// const min = function myArrayMin(array) {
//     let len = array.length;
//     let min = Infinity;
//     while (len--) {
//         if (array[len] < min) {
//             min = array[len];
//         }
//     }
//     return min;
// };

// const max = function myArrayMax(array) {
//     let len = array.length; 
//     let max = -Infinity;
//     while (len--) {
//         if (array[len] > max) {
//             max = array[len];
//         }
//     }
//     return max;
// };

console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min([9, -3, 6])); // Expected output: -3
console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max([9, -3, 6])); // Expected output: 9
