export {};

/**
 * The good ol' this.. Possibly the most confusing topic in the whole language
 * and one that interviewers often use to make you (me) feel miserable in interviews 😭
 * If you find the docs (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
 * also confusing, try some of these resources:
 *  - https://www.freecodecamp.org/news/javascript-this-keyword-binding-rules/
 *  - https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/
 *  - https://www.youtube.com/watch?v=Pi3QC_fVaD0 (JavaScript this Keyword Explained In 3 Minutes)
 *  - https://www.youtube.com/watch?v=YOlr79NaAtQ (What is THIS in JavaScript? in 100 seconds)
 */

class Circle {
     radius: number;
     area: any;
     perimeter: any;
    constructor(radius: number) {
      this.radius = radius;
      this.area = this.area;
      this.perimeter = this.perimeter;
    }

Circle(radius: number) {
  this.radius = radius;
  this.area = () => {
       return (this.radius * this.radius) * 3.14159;
     
  };
  this.perimeter = () => {
       return this.radius * 3.14159 * 2;
       }; 

}
}

const c = new Circle(3) ;

console.log("Area =", c.area()); // Expected output: Area = 28.27
console.log("Perimeter =", c.perimeter()); // Expected output: Perimeter = 18.85


/**
 * This was the last exercise in this repository.
 * Congratulations on getting this far!
 */


// Sākotnējais uzdevums
// function Circle(radius) {
//      this.radius = radius;
//      this.area = function() {};
//      this.perimeter = function() {};
//    }
   
//    const c = new Circle(3);
//    console.log("Area =", c.area()); // Expected output: Area = 28.27
//    console.log("Perimeter =", c.perimeter()); // Expected output: Perimeter = 18.85