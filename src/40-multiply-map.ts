export {};

/**
 * Implement map function which works similarly as
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * NB! The goal of this exercise is not to call .map inside your own map function,
 * but instead  you have to figure out how Array.prototype.map() works under the hood
 * and recreate the logic yourself.
 */
// let object = Object(this);
//   let len = object.length >>> 0;
//   if(a.length > 1) {
//     a = a[1];
//   }
//   a = new Array(len);
//   k = 0;
//   while (k < len) {
//     let kValue, mappedValue;
//     if (k in object) {
//       kValue = object[k];
//       mappedValue = callback.call(a, kValue, k, object);
//       a[k] = mappedValue;
//     }
//     k++;
//   } return a;
// 
const map = (a: number[], b: any) => {
  const result = numbers.map((num) => num * 2);
  return result
  } 


const numbers = [1, 2, 3];
const doubled = map(numbers, function(number: number) {
  return number * 2;
});
console.log(doubled); // Expected result: [2, 4, 6]
