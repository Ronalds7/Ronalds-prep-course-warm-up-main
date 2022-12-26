export {};

/**
 * So far you've been working with numeric and textual data using JS data types - numbers
 * and strings. But there are many more data types in JS. One of them is arrays.
 * Here are a few resources that might help to better understand what arrays are for:
 *  - https://www.w3schools.com/js/js_arrays.asp
 *  - https://javascript.info/array
 */

//let string = "John Doe";
//let splittedJohn = string.slice(0, 4);
//let splittedDoe = string.slice(5, 8);
//let newArray: string[] = [];
//newArray.push(splittedJohn);
//newArray.push(splittedDoe);
//console.log(newArray);

  

function stringToArray(fullNames: string[]): string[] {
    let resultArr: string[] = [];
    for (let i = 0; i < fullNames.length; i++) {
         const nameSurname = fullNames[i];
         const nameParts = nameSurname.split(" ");
        resultArr.push(nameParts[0]);
        resultArr.push(nameParts[1]);
             }

    // fullNames.forEach((nameSurName: string) => {
    //     const nameParts = nameSurname.split(" ");
    //     resultArr.push(nameParts[0]);
    //     resultArr.push(nameParts[1])
    
    return resultArr;
}
   //const fullName = fullNames[0];
   //const nameParts = fullName.split(" ");
   //return nameParts


console.log(stringToArray(["John Doe", "Jānis Bērziņš"])); // Expected output: ['John', 'Doe']
