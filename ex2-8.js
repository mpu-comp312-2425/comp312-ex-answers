class Circle {
  // create a Circle object at (x,y) with the given radius
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  // define a method for Circle object
  area() {
    return this.radius * this.radius * Math.PI;
  }
  // override the default toString method
  toString() {
    return `a circle at (${this.x}, ${this.y}) of radius ${this.radius}`;
  }
  move(x, y) {
    this.x = x;
    this.y = y;
  }
}

let c = new Circle(1, 2, 10);
let a = c.area();
console.log(`The area is ${a}`);
// this calls c.toString()
console.log(`c is ${c}`);
// c is a circle at (1, 2) of radius 10
c.move(-1, 0);
console.log(`c is ${c}`);
// c is a circle at (-1, 0) of radius 10



// check whether the Circle c1 fully contains the Circle c2
function contains(c1, c2) {
  // calculate distance between center of the two circles
  let dist = Math.sqrt(Math.pow(c1.x - c2.x, 2) + Math.pow(c1.y - c2.y, 2));
  return (dist < c1.radius - c2.radius);
}

let c1 = new Circle(0, 0, 10);
let c2 = new Circle(3, 4, 4);
let c3 = new Circle(3, 4, 8);
console.log('c1 contains c2? ', contains(c1, c2));
console.log('c1 contains c3? ', contains(c1, c3));
