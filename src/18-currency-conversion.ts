export {};

/**
 * Currency Formatting
 *
 * The business is breaking out into a new market and need to convert prices to USD
 * Write a function that converts a price to USD (exchange rate is 1.4 $ to £)
 */

const GBP_TO_USD_RATE = 1.4

// You are allowed to change only this function
function convertToUSD(x: number): string {
    return (price * GBP_TO_USD_RATE).toFixed(2);
    }

const product = "You don't know JS";
const price = 19.99;
const priceInUSD = convertToUSD(price);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);

/* Expected output:

    > Product: You don't know JS
    > Price: $27.99

*/