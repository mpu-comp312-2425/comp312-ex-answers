// 2-7 Q1. Add a method `quadrant()` to the object literal `point`. 
// The method returns the quadrant See: https://en.wikipedia.org/wiki/Quadrant_(plane_geometry) 
// in which the point resides.

let point = {
  x: -2,
  y: 3,
  toString() { return `(${this.x}, ${this.y})`; },
  quadrant() { 
    // your work here
    if (this.x >= 0) {
      return (this.y >= 0) ? 'I' : 'IV';
    } else {
      return (this.y >= 0) ? 'II' : 'III';
    }
  }
};
// prints "The point (-2, 3) is in quadrant II"
console.log(`The point ${point} is in quadrant ${point.quadrant()}`);
