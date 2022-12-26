export {};

/**
 * If you find yourself stuck with this exercise, perhaps a more visual approach
 *  would help:
 *  - https://blog.codeanalogies.com/2017/11/07/javascript-for-loops-explained/
 */

function draw(num: number) {
    let star: string = "";
    for(let i = 1; i <= num; i++) {
        star += "*";
        console.log(star);
       }  
}  

draw(3);
/* Expected output:

    *
    **
    ***

*/

draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/
